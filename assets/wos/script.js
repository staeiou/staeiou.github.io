function parseCitedReferences(text) {
    const articles = text.split('\nER\n');
    let allReferences = [];

    for (let article of articles) {
        let lines = article.split('\n');
        let parsingCR = false;

        for (let line of lines) {
            if (line.startsWith('CR ')) {
                parsingCR = true;
                // Process the first citation line after 'CR '
                line = line.substring(3);
            } else if (parsingCR && /^[A-Z]{2} /.test(line)) {
                // Ends the CR section when a line starts with a two-letter abbreviation followed by a space
                parsingCR = false;
                continue;
            }

            if (parsingCR) {
                if (line.startsWith('   ')) { // Citation lines start with three spaces
                    const parts = line.trim().split(', ');
                    const author = parts[0];
                    const year = parts[1];
                    const title = parts.length > 2 ? parts[2] : ''; // Safeguard for missing title
                    const publication = line.trim(); // Entire line as publication reference
                    allReferences.push({ author, year, title, publication });
                }
            }
        }
    }

    return allReferences;
}


function countCitations(references, index) {
    const counts = {};
    references.forEach(ref => {
        const key = ref[index];
        if (key) {
            counts[key] = (counts[key] || 0) + 1;
        }
    });
    return counts;
}

function sortAndConvertCounts(counts) {
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function populateTable(tableId, data) {
    const table = document.getElementById(tableId);
    table.innerHTML = '<tr><th>Item</th><th>Count</th></tr>'; // Add header row

    for (let [item, count] of data) {
        const row = table.insertRow();
        row.insertCell(0).textContent = item;
        row.insertCell(1).textContent = count;
    }
}

function updateProgressBar(percentage) {
    const progressBar = document.getElementById('fileProgress');
    const progressContainer = document.getElementById('progressContainer');
    progressBar.value = percentage;

    if (percentage >= 100) {
        progressContainer.style.display = 'none'; // Hide progress bar when done
    } else {
        progressContainer.style.display = 'block'; // Show progress bar
    }
}

function processFiles() {
    let files = document.getElementById('fileInput').files;
    if (files.length === 0) return;

    updateProgressBar(0); // Initialize progress bar
    let allReferences = [];
    let filesProcessed = 0;

    Array.from(files).forEach(file => {
        let reader = new FileReader();
        reader.onload = function(e) {
            let references = parseCitedReferences(e.target.result);
            allReferences.push(...references);
            filesProcessed++;
            updateProgressBar((filesProcessed / files.length) * 100);

            if (filesProcessed === files.length) {
                let authorCounts = countCitations(allReferences, 'author');
                let titleCounts = countCitations(allReferences, 'title');
                let publicationCounts = allReferences.map(ref => ref.publication)
                                                     .reduce((acc, pub) => {
                                                         acc[pub] = (acc[pub] || 0) + 1;
                                                         return acc;
                                                     }, {});

                let sortedAuthors = sortAndConvertCounts(authorCounts);
                let sortedTitles = sortAndConvertCounts(titleCounts);
                let sortedPublications = sortAndConvertCounts(publicationCounts);

                populateTable('authorsTable', sortedAuthors);
                populateTable('titlesTable', sortedTitles);
                populateTable('publicationsTable', sortedPublications);
            }
        };
        reader.readAsText(file);
    });
}


document.getElementById('processButton').addEventListener('click', processFiles);

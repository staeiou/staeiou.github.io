function normalizeAuthorName(name) {
    // Remove punctuation and trim whitespace
    let normalized = name.replace(/[.,]/g, '').trim();

    // Handle names with common prefixes as a single last name
    const namePrefixes = ["van", "van der", "de", "le", "la"]; // Extend this list as needed
    let parts = normalized.split(' ');

    // Check for and handle last name prefixes
    let lastName = parts[0];
    if (parts.length > 1 && namePrefixes.includes(lastName.toLowerCase())) {
        lastName += " " + parts[1]; // Append the next part to the last name
        parts = [lastName, ...parts.slice(2)]; // Reconstruct parts array
    }

    // Process initials for names with more than one part
    if (parts.length > 1) {
        let initials = parts[1];

        if (initials.toUpperCase() === initials) {
            initials = initials.length > 2 ? initials.substring(0, 2) : initials;
        } else {
            initials = initials.substring(0, 1);
        }

        normalized = lastName + ' ' + initials;
    }

    return normalized;
}

function resetApplication() {
    // Clear file input
    document.getElementById('fileInput').value = '';

    // Reset progress bar
    updateProgressBar(0);

    // Clear tables
    ['authorsTable', 'titlesTable', 'publicationsTable'].forEach(tableId => {
        document.getElementById(tableId).innerHTML = '';
    });
}

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
        let key = ref[index];
        if (key) {
            if (index === 'author') {
                key = normalizeAuthorName(key); // Normalize author names
            }
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
    let isValidFile = true; // Flag to track if files are valid

    Array.from(files).forEach(file => {
        let reader = new FileReader();
        reader.onload = function(e) {
            // Check if the file content starts with the required header
            if (!e.target.result.startsWith("FN Clarivate Analytics Web of Science")) {
                alert("Error: File '" + file.name + "' does not appear to be a Web of Science Plain Text export. The text file should begin with 'FN Clarivate Analytics Web of Science'");
                isValidFile = false;
                updateProgressBar(100); // Reset progress bar
                return; // Stop processing this file
            }

            // If the file is valid, process its content
            if (isValidFile) {
                let references = parseCitedReferences(e.target.result);
                allReferences.push(...references);
                filesProcessed++;
            }

            // Update the progress bar and process citations when all files are processed
            if (filesProcessed === files.length && isValidFile) {
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

            updateProgressBar((filesProcessed / files.length) * 100);
        };
        reader.onerror = () => {
            alert("Error reading file: " + file.name);
            updateProgressBar(100); // Reset progress bar
        };
        reader.readAsText(file);
    });
}



document.getElementById('processButton').addEventListener('click', processFiles);
document.getElementById('resetButton').addEventListener('click', resetApplication);
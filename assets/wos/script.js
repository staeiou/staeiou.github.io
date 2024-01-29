const commonWords = new Set([
    'the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'I', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'more', 'go', 'see', 'no', 'way', 'could', 'my', 'than', 'first', 'been', 'call', 'who', 'its', 'now', 'find', 'long', 'down', 'did', 'get', 'come', 'made', 'may', 'part', 'through'
]);


function extractKeywords(text) {
    const keywords = {};
    text.toLowerCase().split('\n').forEach(line => {
        if (line.startsWith('de ')) {
            line.substring(3).split(';').forEach(keyword => {
                const trimmed = keyword.trim();
                if (trimmed) {
                    keywords[trimmed] = (keywords[trimmed] || 0) + 1;
                }
            });
        }
    });
    return keywords;
}

function cleanText(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/gi, '');
}
// Function to generate n-grams
function generateNGrams(text, n) {
    const words = cleanText(text).split(/\s+/);
    const ngrams = {};
    for (let i = 0; i <= words.length - n; i++) {
        const ngram = words.slice(i, i + n).join(' ');
        if (!ngram.split(' ').some(word => commonWords.has(word))) {
            ngrams[ngram] = (ngrams[ngram] || 0) + 1;
        }
    }
    return ngrams;
}

function extractNGrams(text) {
    let allText = '';
    text.split('\n').forEach(line => {
        if (line.startsWith('TI ') || line.startsWith('AB ')) {
            allText += ' ' + line.substring(3);
        }
    });

    const ngrams = {
        '1-gram': generateNGrams(allText, 1),
        '2-gram': generateNGrams(allText, 2),
        '3-gram': generateNGrams(allText, 3)
    };

    return ngrams;
}

function sortAndLimitCounts(counts, limit) {
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, limit);
}

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

function populateNGramsTable(tableId, data) {
    const table = document.getElementById(tableId);
    table.innerHTML = ''; // Clear existing content

    // Create headers
    const header = table.createTHead();
    const headerRow = header.insertRow();
    headerRow.insertCell(0).textContent = 'N-Gram';
    headerRow.insertCell(1).textContent = 'Item';
    headerRow.insertCell(2).textContent = 'Count';

    const tbody = table.createTBody();

    // Iterate over each n-gram category (1-gram, 2-gram, 3-gram)
    for (const [ngramType, ngramData] of Object.entries(data)) {
        for (const [item, count] of ngramData) {
            const row = tbody.insertRow();
            row.insertCell(0).textContent = ngramType;
            row.insertCell(1).textContent = item;
            row.insertCell(2).textContent = count;
        }
    }
}

function populateNGramTable(tableId, data) {
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

    updateProgressBar(0);
    let allReferences = [];
    let allTextForNGrams = '';
    let keywordCounts = {};
    let filesProcessed = 0;
    let isValidFile = true;

    Array.from(files).forEach(file => {
        let reader = new FileReader();
        reader.onload = function(e) {
            if (!e.target.result.startsWith("FN Clarivate Analytics Web of Science")) {
                alert("Error: File '" + file.name + "' does not appear to be a Web of Science Plain Text export.");
                isValidFile = false;
                updateProgressBar(100);
                return;
            }

            if (isValidFile) {
                let fileText = e.target.result;
                let references = parseCitedReferences(fileText);
                allReferences.push(...references);

                let fileKeywords = extractKeywords(fileText);
                for (const [key, value] of Object.entries(fileKeywords)) {
                    keywordCounts[key] = (keywordCounts[key] || 0) + value;
                }
                allTextForNGrams += ' ' + fileText;

                filesProcessed++;
            }

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

                let sortedKeywords = sortAndConvertCounts(keywordCounts);
                //let ngramCounts = extractNGrams(allTextForNGrams);
                //let sortedNGrams = Object.fromEntries(Object.entries(ngramCounts).map(([n, counts]) => [n, sortAndLimitCounts(counts, 50)]));
				
				let ngramCounts = extractNGrams(allTextForNGrams);

				let sorted1Grams = sortAndLimitCounts(ngramCounts['1-gram'], 50);
				let sorted2Grams = sortAndLimitCounts(ngramCounts['2-gram'], 50);
				let sorted3Grams = sortAndLimitCounts(ngramCounts['3-gram'], 50);

				populateNGramTable('oneGramTable', sorted1Grams);
				populateNGramTable('twoGramTable', sorted2Grams);
				populateNGramTable('threeGramTable', sorted3Grams);

                populateTable('authorsTable', sortedAuthors);
                populateTable('titlesTable', sortedTitles);
                populateTable('publicationsTable', sortedPublications);
                populateTable('keywordsTable', sortedKeywords);
                //populateNGramsTable('ngramsTable', sortedNGrams);
            }

            updateProgressBar((filesProcessed / files.length) * 100);
        };
        reader.onerror = () => {
            alert("Error reading file: " + file.name);
            updateProgressBar(100);
        };
        reader.readAsText(file);
    });
}

document.getElementById('processButton').addEventListener('click', processFiles);
document.getElementById('resetButton').addEventListener('click', resetApplication);
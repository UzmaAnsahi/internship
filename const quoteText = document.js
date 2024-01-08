const quoteText = document.getElementById('quote-text');
const authorElement = document.getElementById('author');

function getRandomQuote() {
    // Call your API endpoint to get a random quote
    // For simplicity, using a static array
    const quotes = [
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        // Add more quotes as needed
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    displayQuote(randomQuote);
}

function searchByAuthor() {
    const authorInput = document.getElementById('authorInput').value;
    // Call your API endpoint to search for quotes by author
    // For simplicity, using a static array
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(authorInput.toLowerCase()));

    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];
        displayQuote(randomQuote);
    } else {
        alert('No quotes found for the given author.');
    }
}

function displayQuote(quote) {
    quoteText.textContent = quote.text;
    authorElement.textContent = `- ${quote.author}`;
}

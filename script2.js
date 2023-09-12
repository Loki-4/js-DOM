document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const quoteContainer = document.querySelector(".quote");
    const newQuoteBtn = document.getElementById("new-quote-btn");

    // Function to fetch a random quote from the API
    async function fetchRandomQuote() {
        try {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];

            
            quoteContainer.innerHTML = `<p>${randomQuote.text}</p>`;
        } catch (error) {
            console.error("Error fetching random quote:", error);
            quoteContainer.innerHTML = "<p>Failed to fetch a quote. Please try again later.</p>";
        }
    }

    
    newQuoteBtn.addEventListener("click", fetchRandomQuote);

   
    fetchRandomQuote();
});

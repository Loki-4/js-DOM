document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const countryInfoContainer = document.querySelector(".country-info");

    // Function to fetch country data from the API
    async function fetchCountryData() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/name");
            const data = await response.json();

            
            if (Array.isArray(data)) {
                const countryNames = data.map((country) => country.name.common).join(", ");
                countryInfoContainer.innerHTML = `<p>Multiple countries found with this name: ${countryNames}</p>`;
            } else {
                // Display information about the single country
                const country = data[0];

                const countryHTML = `
                    <h2>${country.name.common}</h2>
                    <p>Capital: ${country.capital}</p>
                    <p>Population: ${country.population}</p>
                    <p>Region: ${country.region}</p>
                    <p>Subregion: ${country.subregion}</p>
                    <p>Flag: <img src="${country.flags.png}" alt="${country.name.common} flag"></p>
                `;

                countryInfoContainer.innerHTML = countryHTML;
            }
        } catch (error) {
            console.error("Error fetching country data:", error);
            countryInfoContainer.innerHTML = "<p>Failed to fetch country information. Please try again later.</p>";
        }
    }

    
    fetchCountryData();
});
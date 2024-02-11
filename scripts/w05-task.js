//Added additional options such as sorting the temples alphabetically.
/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement  = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create an article element
        let article = document.createElement('article');
    
        // Create an h3 element and set its text to the temple's name
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
    
        // Create an img element and set its src to the temple's image URL and alt to the temple's location
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
    
        // Append the h3 and img elements to the article
        article.appendChild(h3);
        article.appendChild(img);
    
        // Append the article to the templesElement
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch() */
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

// Call the function and log the result for testing
getTemples().then(() => console.log(templeList));

/* reset Function */
const reset = () => {
    const templesElement = document.getElementById('temples');
    const articles = templesElement.getElementsByTagName('article');
    while(articles[0]) {
        articles[0].parentNode.removeChild(articles[0]);
    }
}

/* filterTemples Function */
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();

    // Obtain the value of the HTML element with the ID of filtered
    const filter = document.getElementById('filtered').value;

    // Use a switch statement that uses the filter value as the selector
    switch(filter) {
        case 'utah':
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            // No filter. Just use temples as the argument
            displayTemples(temples);
            break;
        case 'alphabetical':
            // Sort temples alphabetically by their names
            displayTemples([...temples].sort((a, b) => a.templeName.localeCompare(b.templeName)));
            break;
    }
}

/* Event Listener */
// Get the HTML element with the ID of 'filtered'
const filteredElement = document.getElementById('filtered');

// Add a change event listener that calls the filterTemples function
filteredElement.addEventListener('change', () => filterTemples(templeList));

getTemples().then(() => console.log(templeList));
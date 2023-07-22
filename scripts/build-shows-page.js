// variable declaration+assignment of the unique API key I got when registering with the API
const apiKey = "7d6ee33e-965d-4e05-80db-0e89df09d7f2";
//variable declaration+assignment of the API's base URL 
const baseURL = "https://project-1-api.herokuapp.com";


function createShowCard(show) {
    //create article with class of shows__card
    const showCardEl = document.createElement('article');
    showCardEl.classList.add('shows__card');

    // create h3 elements for the date, venue and location table headers
    const dateHeader = document.createElement('h3');
    dateHeader.classList.add('shows__header-date');
    dateHeader.innerText = "DATE";

    const venueHeader = document.createElement('h3');
    venueHeader.classList.add('shows__header-venue');
    venueHeader.innerText = "VENUE";

    const locationHeader = document.createElement('h3');
    locationHeader.classList.add('shows__header-location');
    locationHeader.innerText = "LOCATION";

    // create paragraph elements for the date, venue and location
    const date = document.createElement('p');
    date.classList.add('shows__date');
    const convertedDate = new Date(show.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' }).replace(/,/g, '');
    date.innerText = convertedDate;

    const venue = document.createElement('p');
    venue.classList.add('shows__venue');
    venue.innerText = show.place;

    const location = document.createElement('p');
    location.classList.add('shows__location');
    location.innerText = show.location;

    //create button and add a class of shows__button
    const button = document.createElement('button');
    button.classList.add('shows__button');
    button.innerText = "BUY TICKETS";

    //create div and add a class to use flexbox on the name and date
    const divDate = document.createElement('div');
    divDate.classList.add('shows__date-div');
    //create div and add a class to use flexbox on the name and date
    const divVenue = document.createElement('div');
    divVenue.classList.add('shows__venue-div');

    //create div and add a class to use flexbox on the name and date
    const divLocation = document.createElement('div');
    divLocation.classList.add('shows__location-div');

    // append elements above as children to the showCardEl
    divDate.appendChild(dateHeader);
    divDate.appendChild(date);
    divVenue.appendChild(venueHeader);
    divVenue.appendChild(venue);
    divLocation.appendChild(locationHeader);
    divLocation.appendChild(location);
    showCardEl.appendChild(divDate);
    showCardEl.appendChild(divVenue);
    showCardEl.appendChild(divLocation);
    showCardEl.appendChild(button);

    console.log(showCardEl);
    return showCardEl;
}

//get main from html document
const main = document.querySelector('main');

//create section with class of shows and append the section to the main html element
const section = document.createElement('section');
section.classList.add('shows');
main.appendChild(section);

// create heading with class of shows__heading, add the inner text of Shows and append to the section shows
const heading = document.createElement('h2');
heading.classList.add('shows__heading');
heading.innerText = 'Shows';
section.appendChild(heading);

// create div with class of shows__container-visible-headers
const containerVisHead = document.createElement('div');
containerVisHead.classList.add('shows__container-visible-headers');

// create div with class of shows__div and append to the section shows
const div = document.createElement('div');
div.classList.add('shows__div');
section.appendChild(div);

//function that takes a parameter 
function renderShows(shows) {
    const showsEl = document.querySelector('.shows__div');
    //clear existing contents of the showsEl div
    showsEl.innerHTML = ""; 
    // Use forEach to loop through each item in the array and create a card
    shows.forEach(show => {
        //create a new card element from the lis
        const card = createShowCard(show);
        showsEl.appendChild(card);
    });
}

//function to get and display the data (shows)
const getAndDisplayListItems = function(){
    axios.get(baseURL+"/showdates?api_key="+apiKey) 
        .then((result)=>{
            const shows = result.data; //storing inside a variable the array of objects that we get from accessing <data> within <result> 
            renderShows(shows);
        })
        .catch((error)=>{ 
            console.log("error message from promise", error);
        });
}
//display all shows when we first load the page
getAndDisplayListItems();


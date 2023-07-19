// variable declaration+assignment of the unique API key I got when registering with the API
const apiKey = "7d6ee33e-965d-4e05-80db-0e89df09d7f2";
//variable declaration+assignment of the API's base URL 
const baseURL = "https://project-1-api.herokuapp.com";

//get returns a promise
//use then method to set the callback which receives the result
//use catch to handle the errors, it registers an error callback, it will be called if there is an exception in the .then() success callback
axios.get(baseURL+"/comments?api_key="+apiKey) 
    .then((result)=>{
        console.log(result); //this is the results object we get from the promise returned 
        const commentsApi = result.data; //storing inside a variable the array of obejcts that we get from accessing <data> within <result> 
        console.log(commentsApi); //array of objects
    })
    .catch((error)=>{ 
        console.log("error message from promise", error);
    })

const shows = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Nov 06 2021',
        description: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Nov 26 2021',
        description: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
];

function createShowCard(show) {
    //create article with class of shows__c
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
    date.innerText = show.date;

    const venue = document.createElement('p');
    venue.classList.add('shows__venue');
    venue.innerText = show.venue;

    const location = document.createElement('p');
    location.classList.add('shows__location');
    location.innerText = show.location;

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

    // append  elements above as children to the showCardEl
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
//get main
const main = document.querySelector('main');

//create article with class of shows
const section = document.createElement('section');
section.classList.add('shows');
main.appendChild(section);

// create heading with class of shows__heading and add the inner text of Shows
const heading = document.createElement('h2');
heading.classList.add('shows__heading');
heading.innerText = 'Shows';
section.appendChild(heading);
console.log(heading);


const containerVisHead = document.createElement('div');
containerVisHead.classList.add('shows__container-visible-headers');


const div = document.createElement('div');
div.classList.add('shows__div');
section.appendChild(div);
console.log(div);




function renderShows(show) {
    const showsEl = document.querySelector('.shows__div');
    showsEl.innerHTML = "";
    // Use forEach to loop through each item in the array and create a card
    shows.forEach(show => {
        console.log(show);
        const card = createShowCard(show);
        showsEl.appendChild(card);
    });
}

renderShows(shows);



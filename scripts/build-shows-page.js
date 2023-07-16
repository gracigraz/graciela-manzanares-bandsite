
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
const shows2 = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    }]



function createShowCard(show) {
    //create article with class of shows
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

    //create div and add a class of comments__header-div to use flexbox on the name and date
    const divDate = document.createElement('div');
    divDate.classList.add('shows__date-div');
      //create div and add a class of comments__header-div to use flexbox on the name and date
    const divVenue = document.createElement('div');
    divVenue.classList.add('shows__venue-div');

    //create div and add a class of comments__header-div to use flexbox on the name and date
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

// create heading with class of shows__heading and add the inner text of 
const heading = document.createElement('h2');
heading.classList.add('shows__heading');
heading.innerText = 'Shows';
section.appendChild(heading);
console.log(heading);


const containerVisHead = document.createElement('div');
containerVisHead.classList.add('shows__container-visible-headers');


// // create h3 elements for the date, venue and location table headers
// const dateHeaderV = document.createElement('h3');
// dateHeaderV.classList.add('shows__header-date--invisible');
// dateHeaderV.classList.add('shows__header-date');
// dateHeaderV.innerText = "DATE";

// const venueHeaderV = document.createElement('h3');
// venueHeaderV.classList.add('shows__header-venue--invisible');
// venueHeaderV.classList.add('shows__header-venue');
// venueHeaderV.innerText = "VENUE";

// const locationHeaderV = document.createElement('h3');
// locationHeaderV.classList.add('shows__header-location--invisible');
// locationHeaderV.classList.add('shows__header-location');
// locationHeaderV.innerText = "LOCATION";

// section.appendChild(containerVisHead);
// containerVisHead.appendChild(dateHeaderV);
// containerVisHead.appendChild(venueHeaderV);
// containerVisHead.appendChild(locationHeaderV);



const div = document.createElement('div');
div.classList.add('shows__div');
section.appendChild(div);
console.log(div);




function renderShows(show) {
    const showsEl = document.querySelector('.shows__div');
    console.log(showsEl, "gra");
    showsEl.innerHTML = ""; 
       // Use forEach to loop through each item in our commentsF array and create a card
    shows.forEach(show => {
        console.log(show);
        const card = createShowCard(show);
        showsEl.appendChild(card);
    });             
}   

renderShows(shows);

    


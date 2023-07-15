
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




 //create article with class of shows
const section = document.createElement('section');
section.classList.add('shows');


 //get header
 const headerHtml = document.querySelector('header')
 headerHtml.appendChild(main);
 
  //create main html tag
 const main = document.createElement('main');
 main.appendChild(section);

  // create heading with class of shows__heading and add the inner text of 
const heading = document.createElement('h2');
heading.classList.add('shows__heading');
heading.innerText = 'Shows';

section.appendChild(heading);

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

    // append  elements above as children to the cardEl
    showCardEl.appendChild(heading);
    showCardEl.appendChild(dateHeader);
    showCardEl.appendChild(venueHeader);
    showCardEl.appendChild(locationHeader);
    showCardEl.appendChild(date);
    showCardEl.appendChild(venue);
    showCardEl.appendChild(location);

    return cardEl;
} 

section.appendChild(cardEl);

function renderShows() {
            
      
}          
    
 // Loop through the todo items and append a list item for each of them       
for (let i=0; i<shows.length;i++){
    let itemEl = document.createElement('li');
    itemEl.innerText = shows[i].date;
    itemEl.classList.add('todo-list__item');
    todoListEl.appendChild(itemEl);
}

    // //create a ul with class of shows__list
    // const list = document.createElement('ul');
    // list.classList.add('shows__list');

    // // //create a li with class of shows__list-item
    // const listItem = document.createElement('li');
    // list.classList.add('shows__list-item');

    // showCardEl.appendChild(list);
    // list.apppendChild(listItem);
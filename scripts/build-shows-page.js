
let date = 'DATE';
let venue = 'VENUE';
let location = 'LOCATION';

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
    //create article with class of shows
    const cardEl = document.createElement('article');
    cardEl.classList.add('shows');
    // create heading with class of shows__heading and add the inner text of 
    const heading = document.createElement('h2');
    heading.classList.add('shows__heading');
    heading.innerText = 'Shows';

    //create a ul with class of shows__header-list
    const list = document.createElement('ul');
    list.classList.add('shows__list');

   



    // append our elements above as children to the cardEl
    cardEl.appendChild(heading);
    cardEl.appendChild(list);
   list.apppendChild(istItem);

    return cardEl;
} 

function renderShows() {
            
      
}          
            
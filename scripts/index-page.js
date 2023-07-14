//array with 3 default comment objects to start. comments have a name, timestamp and comment text.
const comments = [
    {name: 'Connor Walton', timestamp: '02/17/2021', note:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' },
    {name: 'Emilie Beach', timestamp: '01/09/2021', note: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'},
    {name: 'Miles Acosta', timestamp: '12/20/2020', note: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`}
];

//function that takes in one comment object as a parameter and displays it on the page


function createCommentCard(comment){
    // Create article with class of comments
      const cardEl = document.createElement('article');
      cardEl.classList.add('comments__card');

    // create paragraph elements for the name and note and span html element 
    //for date and add the inner text of comment.name, comment.timestamp and comment.note
    const name = document.createElement('p');
    cardEl.classList.add('comments__card');
    name.innerText = comment.name;
    const timestamp = document.createElement('span');
    cardEl.classList.add('comments__card');
    timestamp.innerText = comment.timestamp;
    const note = document.createElement('p');
    cardEl.classList.add('comments__card');
    note.innerText = comment.note;

    cardEl.appendChild(name);
    cardEl.appendChild(timestamp);
    cardEl.appendChild(note);

    return cardEl;
}

function renderAppointments() {
    // Grab #my-appointments from html to append cards below
    const myAppointmentsEl = document.querySelector("#my-appointments");

    // Clear the appointments div if appointments are already there.
    myAppointmentsEl.innerHTML = "";

    // Use forEach to loop through each item in our appointment array and create a card
    appointments.forEach(appointment => {
        const card = createAppointmentCard(appointment);
        myAppointmentsEl.appendChild(card);
    })
}

//Selecting '.comments__button' with querySelector and save as button
const button = document.querySelector('.comments__button');


//Created a const variable formEl to store the value of '#comments__form' from the DOM
const formEl = document.querySelector('#comments__form');
//Created a handleSubmit function that takes in the event object


// 11. Create a variable called lastName and store the value of the event target lastname
// 12. Create a variable called myNameEl Store the element '#my-name' from the dom using query selector
// 13. Change the innerText of myNameEl concatenating the firstName variable and lastName



const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form using its default behavior
    
    const fullName = event.target.fullName.value; //Create a variable called fullName and store the value of the event target fullName
    const comment = event.target.comment.value;
    
    const myNameEl = document.querySelector('#comments__display');
    myNameEl.innerText = fullName;


    event.target.reset(); //Reset the form 

    formEl.removeEventListener("submit", handleSubmit); //Remove event listener
};

formEl.addEventListener("submit", handleSubmit);

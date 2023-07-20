// variable declaration+assignment of the unique API key I got when registering with the API
const apiKey = "7d6ee33e-965d-4e05-80db-0e89df09d7f2";
//variable declaration+assignment of the API's base URL 
const baseURL = "https://project-1-api.herokuapp.com";


///function to get and display the data (comments)
const getAndDisplayListItems = function () {
    axios.get(baseURL + "/comments?api_key=" + apiKey)
        .then((result) => {
            console.log(result); //this is the results object we get from the promise returned 
            const commentsApi = result.data; //storing inside a variable the array of objects that we get from accessing <data> within <result> 
            console.log(commentsApi); //array of objects
        })
        .catch((error) => {
            console.log("error message from promise", error);
        });
}


// //array with 3 default comment objects to start. comments have a name, timestamp and comment text.
// const commentsF = [
//     {name: 'Connor Walton', timestamp: '02/17/2021', note:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' },
//     {name: 'Emilie Beach', timestamp: '01/09/2021', note: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'},
//     {name: 'Miles Acosta', timestamp: '12/20/2020', note: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`}
// ];


function createCommentCard(comment) {
    // Create article with class of comments
    const cardEl = document.createElement('article');
    cardEl.classList.add('comments__card');

    //create image for avatar with class of comments__img
    const imageEl = document.createElement('div');
    imageEl.classList.add('comments__avatar');

    // create paragraph elements for the name and note and span html element 
    //for date and add the inner text of comment.name, comment.timestamp and comment.note
    const name = document.createElement('p');
    name.classList.add('comments__name');
    name.innerText = comment.name;

    const timestamp = document.createElement('span');
    timestamp.classList.add('comments__timestamp');
    timestamp.innerText = comment.timestamp;

    const note = document.createElement('p');
    note.classList.add('comments__note');
    note.innerText = comment.note;

    //create div and add a class of comments__header-div to use flexbox on the name and date
    const divHeader = document.createElement('div');
    divHeader.classList.add('comments__header-div');

    //create div and add a class of comments__body-div to use flexbox on the header-div (containing name and date) and the comment itsef
    const divBody = document.createElement('div');
    divBody.classList.add('comments__body-div');

    // append elements above as children to the cardEl
    cardEl.appendChild(imageEl);
    cardEl.appendChild(divBody);
    divBody.appendChild(divHeader)
    divBody.appendChild(note)
    divHeader.appendChild(name);
    divHeader.appendChild(timestamp);

    return cardEl;
}

const section = document.querySelector('.comments__section');
const cardCon = document.createElement('div');
cardCon.classList.add('comments__div');
section.appendChild(cardCon);

//function that takes in one comment object as a parameter and displays it on the page
function displayComment(comments) {
    // Grab comments section (class = "comments") from html to append comment cards below
    const commentsEl = document.querySelector('.comments__div');
    commentsEl.innerHTML = ""; //clear previous comments
    // Use forEach to loop through each item in our commentsF array and create a card
    comments.forEach(comment => {
        const card = createCommentCard(comment);
        
         //append the new comments el  
        commentsEl.appendChild(card);
    });
}


//Create a handleSubmit function that takes in the event object - called when user submits a new comment
const handleSubmit = (event) => {

    // Prevents the form using its default behavior (reloading)
    event.preventDefault(); 

    //pull out data from our form to build our object
    const fullName = event.target.fullName.value; //Create a variable called fullName and store the value of the event target fullName
    const message = event.target.message.value; //Create a variable called message and store the value of the event target fullName

    // Clean up data to push into and match the array
    console.log(event);
    const cardData = {
        name: event.target.fullName.value,
        timestamp: new Date().toLocaleDateString(),
        note: event.target.message.value
    };

    console.log(cardData);

    //post returns a promise, post the data and wait for the response
    axios.post(baseURL + "/comments?api_key=" + apiKey, cardData)
    .then((response) => {
        console.log(response);
       //call getAndDisplayListItems to get all the todos including the new one
        // and then clear the todos and re-display them
        getAndDisplayListItems();
    })
    .catch((error) => {
        console.log("error message from calling API", error);
    });

    // commentsF.unshift(cardData);//unshift it to array
    // displayComment(commentsF);
    event.target.reset(); //Reset the form
};

//Creat a const variable formEl to store the value of '#comments__form' from the DOM
const formEl = document.querySelector('#comments__form');
// Add an event listener to the form to get all input data within form
formEl.addEventListener("submit", handleSubmit);

// displayComment(commentsF);



//display all shows when we first load the page
getAndDisplayListItems();
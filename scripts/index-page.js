// variable declaration+assignment of the unique API key I got when registering with the API
const apiKey = "7d6ee33e-965d-4e05-80db-0e89df09d7f2";
//variable declaration+assignment of the API's base URL 
const baseURL = "https://project-1-api.herokuapp.com";


//Creat a const variable formEl to store the value of '#comments__form' from the DOM
const formEl = document.querySelector('#comments__form');

function createCommentCard(comment) {
    // Create article with class of comments
    const cardEl = document.createElement('article');
    cardEl.classList.add('comments__card');

    //create image for avatar with class of comments__img
    const imageEl = document.createElement('div');
    imageEl.classList.add('comments__avatar');

    // create paragraph elements for the name and note and span html element 
    //for date and add the inner text of comment.name, comment.timestamp and comment.comment
    const name = document.createElement('p');
    name.classList.add('comments__name');
    name.innerText = comment.name;

    const timestamp = document.createElement('span');
    timestamp.classList.add('comments__timestamp');
    const epochDate = new Date(comment.timestamp)
    const convertedDate = epochDate.toLocaleDateString('en-US', {month: '2-digit', year: 'numeric', day: '2-digit'});
    timestamp.innerText = convertedDate;

    const note = document.createElement('p');
    note.classList.add('comments__note');
    note.innerText = comment.comment;

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
//get section from html document, create div to append comments to that section in the page
const section = document.querySelector('.comments__section');
const cardCon = document.createElement('div');
cardCon.classList.add('comments__div');
section.appendChild(cardCon);

//function that takes in one comment object as a parameter and displays it on the page
function displayComment(comments) {
        // Grab comments section (class = "comments__div") from html to append comment cards below
        const commentsEl = document.querySelector('.comments__div');
        commentsEl.innerHTML = ""; //clear previous comments

        //sort comments by timestamp in descending order, the oldest comments go at the bottom of the page
        const orderedComments = comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        // Use forEach to loop through each item in orderedComments array and append the comment cards from last to first. 
        orderedComments.forEach(comment => {
        const card = createCommentCard(comment);
        commentsEl.appendChild(card);
    });
}

///function to get and display the data (comments)
const getAndDisplayListItems = function () {
    axios.get(baseURL + "/comments?api_key=" + apiKey)
        .then((result) => {
            const commentsApi = result.data; //storing inside a variable the array of objects that we get from accessing <data> within <result> 
            displayComment(commentsApi);
        })
        .catch((error) => {
            //"error message from promise", error
        });
}


//Create a handleSubmit function that takes in the event object - called when user submits a new comment
const handleSubmit = (event) => {
    // Prevents the form using its default behavior (reloading)
    event.preventDefault(); 

    //pull out data from the form to build the object
    const fullName = event.target.fullName.value;
    const message = event.target.message.value; 

    // Clean up data to push into and match the array
    const cardData = {
        name: fullName,
        comment: message 
    };


    //post returns a promise, post the data and wait for the response
    axios.post(baseURL + "/comments?api_key=" + apiKey, cardData)
    .then((response) => {
        //call getAndDisplayListItems to get all the comments including the new one
        // and then clear the todos and re-display them
        getAndDisplayListItems();
    
    })
    .catch((error) => {
        //"error message from calling API", error
    });

    event.target.reset(); //Reset the form
};


// Add an event listener to the form to get all input data within form
formEl.addEventListener("submit", handleSubmit);

//display all shows when we first load the page
getAndDisplayListItems();
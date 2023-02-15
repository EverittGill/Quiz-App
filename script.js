




var startButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions")
// element.addEventListener("click", toggleDiv())

function showQuestions() {
    startScreen.setAttribute("style", "display: none;");
    questions.setAttribute("style", "display: "";)
}




// function toggleDiv() {
//     var startScreen = document.getElementById("start-screen");
//     var questions = document.getElementById("questions");
   
//     if (startScreen.style.color === "") {
//         startScreen.style.color = "none";
//         questions.style.display = "";
//     } else {
//         return
//     }
// }












// display welcome screen
// display a start button that's linked to the timer, needs it's own onclick function
// when start button is clicked, display the questions and answers, and get rid of the welcome screen. getelementbyid"welcomescreen" setattribute.style.displayNone
// display a timer
//

// that start button funciton needs to display the answers and start the whole application
// can have a funciton that has the timer and a function that displays the answers. could have a funciton(startquiz) and in that is the timer function
// possible function getquestion(showsquestions)


// HTML starts of with empty divs. will need a div for the question and for the answers
// willl need to use createElement in javascript to make the buttons and setAttribute to style it. attributes will be what's inside the button
// will need an array that has 
// will need variable and inside that variable is an array. inside that array we will store objects. inside the first object we will need, title, choices, and answers. each of those will have info in them
// we will need an object for each question that we will need. we will need on object per question in that array that is stored in the variable . all objects will need the same names for the parameters 
// to access it use something like access questions[i], thats the variable name.
// we will need onclick functions for each button. the onclick function goes on the btn variable. you're going to add an event listener to btn.   btn will have value/textcontent. if btn.value/textconten = question[i].answer   double check with a console.log(answer)    once its clicked look at it's attributes and match one of its attributes to answer in the array. then move on with a for loop
// when evaluating if the question is right or wrong then address the timer and adjust the time
// once at the last question is answered the time remaining is their score. have a div containing their remaining time which is their score and bleow that have a div textbox where they can store their initials and display that on screen too



// welcome screen text <p> Think fast and and choose wisely for the clock will determine your score. Get a question right and move along. But get one wrong and your score will be reduced. Log your name and score at the end
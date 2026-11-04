/*
  Magic 8 Ball
  Name:
  Period:
*/
function askEightBall() {


// Get input values
  let userName = document.getElementbyId('nameInput').value;
  let userQuestion = document.getElementbyId('questionInput').value;
  console.log(userName, userQuestion);

// Show the Question on site
document.getElementById('QuestionOut').textContent = "You asked: " + userQuestion;

//Greet the user!
let greeting

if(userName === ""){
  greeting = "Hello Mystery Person!"
} else {
  greeting = `Hello, $(userName)!`
}

document.getElementById('greeting').textContent = greeting

// check the question

if (userQuestion === "") {
  document.getElementById('questionOut').textContent = ''
document.getElementById('answer').textContent ='The 8 ball needs a question!'
document.getElementById('AnswerType'.innerHTML) = ''
return
}

//get a random number

//Get the Magic 8balls answer

//Show the 8ball answer type badge







}
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

// Show theb Question on site
document.getElementById('QuestionOut').textContent = "You asked: " + userQuestion;

//Greet the user!
let greeting

if(userName === ""){
  greeting = "Hello Mystery Person!"
} else {
  greeting = `Hello, $(userName)!`
}










}
/*
  Magic 8 Ball
  Name:
  Period:
*/
function askEightBall() {


// Get input values
  let userName = document.getElementById('nameInput').value;
  let userQuestion = document.getElementById('questionInput').value;
  console.log(userName, userQuestion);

// Show the Question on site
document.getElementById('questionOut').textContent = "You asked: " + userQuestion;

//Greet the user!
let greeting

if(userName === ""){
  greeting = "Hello Mystery Person!"
} else {
  greeting = `Hello, ${userName}!`
}

document.getElementById('greeting').textContent = greeting

// check the question

if (userQuestion === "") {
  document.getElementById('questionOut').textContent = ''
document.getElementById('answer').textContent ='The 8 ball needs a question!'
document.getElementById('AnswerType').innerHTML = ''
return
}

//get a random number
let randomNumber = Math.floor(Math.random() * 8);
//Get the Magic 8balls answer
switch (randomNumber) {
    case 0:
      eightBall = 'It is certain';
      answerType = 'positive';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      answerType = 'positive';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      answerType = 'neutral';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      answerType = 'neutral';
      break;
    case 4:
      eightBall = 'Do not count on it';
      answerType = 'negative';
      break;
    case 5:
      eightBall = 'My sources say no';
      answerType = 'negative';
      break;
    case 6:
      eightBall = 'Outlook good';
      answerType = 'positive';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      answerType = 'positive';
      break;
  }

  // Display the 8-ball answer
  document.getElementById('answer').textContent = eightBall;

  // Show the 8-ball answer type badge
  document.getElementById('AnswerType').textContent = `Type: ${answerType}`;
}
//Show the 8ball answer type badge
let eightBall = '';
  let answerType = '';






}
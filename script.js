/*
  Magic 8 Ball
  Name:
  Period:
*/

function askEightBall() {
  // Get input values
  let userName = document.getElementById('nameInput').value.trim();
  let userQuestion = document.getElementById('questionInput').value.trim();

  //question check
  if(userQuestion ==="") {
    document.getElementById("questionOut") .textContent = "";
    document.getElementById("answerType") .innerHTML = "";
    document.getElementById("answer") .textContent = "The Soccer Psychic needs a question";
    return
  }

  //show question
  document.getElementById("questionOut") .textContent = "You asked:" + userQuestion;

  // Greet the user
  if (userName === "") {
    document.getElementById("greeting").textContent = "Hello Gaffer!";
  } else {
    document.getElementById("greeting").textContent = `Hello, Manager ${userName}`;
  }



  // Random number 0-9
  let randomNumber = Math.floor(Math.random() * 10);

//Answer
  let eightBall = '';

  // Get response and type based on random number
  switch (randomNumber) {
    case 0:
      eightBall = 'It is a certain - GOAL!';
      break;
    case 1:
      eightBall = 'It is decidedly so - WIN!';
      break;
    case 2:
      eightBall = 'Without a doubt - 3 Points!';
      break;
    case 3:
      eightBall = 'Signs point to yes - Clean Sheet!';
      break;
    case 4:
      eightBall = 'Reply hazy, try again - VAR Review';
      break;
    case 5:
      eightBall = 'Cannot predict now - Offside';
      break;
    case 6:
      eightBall = "Ask again later - Extra Time";
      break;
    case 7:
      eightBall = "Don't count on it - Red Card!";
      break;
    case 8:
      eightBall = 'My sources say no - Penalty Miss!'
      break;
    case 9:
      eightBall = 'Very doubtful - Saved by Keeper!'
  }

  document.getElementById("answer").textContent = eightBall

  //answer type
  if(randomNumber <= 3) {
    document.getElementById("answerType").innerHTML = '<span class="yes">YES-WIN</span>';
  } else if (randomNumber <= 6) {
    document.getElementById("answerType") .innerHTML = '<span class="maybe"> MAYBE-VAR</span>'
  }else {
    document.getElementById("answerType").innerHTML = '<span class="no">NO-LOSS</span>';
  }
}
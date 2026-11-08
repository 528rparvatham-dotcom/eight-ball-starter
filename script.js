/*
  Magic 8 Ball
  Name:
  Period:
*/

function askEightBall() {
  // Get input values
  let userName = document.getElementById('nameInput').value.trim();
  let userQuestion = document.getElementById('questionInput').value.trim();

  // Elements
  let greetingEl = document.getElementById('greeting');
  let questionOutEl = document.getElementById('questionOut');
  let answerEl = document.getElementById('answer');
  let answerTypeEl = document.getElementById('answerType'); 

  // Greet the user
  if (userName === "") {
    greetingEl.textContent = "Welcome to the tunnel, Manager!";
  } else {
    greetingEl.textContent = `Hello, ${userName}!`;
  }

 
  if (userQuestion === "") {
    questionOutEl.textContent = "";
    answerEl.textContent = "?";
    answerTypeEl.innerHTML = '<span class="badge bg-warning text-dark">Please enter a question!</span>';
    return;
  }

  // Display user question
  questionOutEl.textContent = `You asked: "${userQuestion}"`;

  // Generate a random number from 0 to 7

  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = '';
  let badgeClass = '';
  let typeLabel = '';


  // Get response and type based on random number
  switch (randomNumber) {
    case 0:
      eightBall = 'It is a certain win';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Signs point to yes';
      break;
    case 3:
      eightBall = 'Reply hazy, try again';
      break;
    case 4:
      eightBall = 'Ask again later';
      break;
    case 5:
      eightBall = 'Better not tell you now';
      break;
    case 6:
      eightBall = "Don't count on it";
      break;
    case 7:
      eightBall = 'My sources say no';
      break;
  }

  
  // Display the 8-Ball answer and styled Bootstrap badge
  document.getElementById('answer').textContent = eightBall
  document.getElementById('answerType').textContent = typeLabel;
}
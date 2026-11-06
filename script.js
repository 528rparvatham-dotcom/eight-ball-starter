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
  let answerTypeEl = document.getElementById('answerType'); // Matched ID casing

  // Greet the user
  if (userName === "") {
    greetingEl.textContent = "Hello, Mystery Person!";
  } else {
    greetingEl.textContent = `Hello, ${userName}!`;
  }

  // Check if a question was entered
  if (userQuestion === "") {
    questionOutEl.textContent = "";
    answerEl.textContent = "?";
    answerTypeEl.innerHTML = '<span class="badge bg-warning text-dark">Please enter a question!</span>';
    return;
  }

  // Display user question
  questionOutEl.textContent = `You asked: "${userQuestion}"`;

  // Get a random number from 0 to 7
  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = '';
  let badgeClass = '';
  let typeLabel = '';

  // Get response and type based on random number
  switch (randomNumber) {
    case 0:
      eightBall = 'It is certain';
      typeLabel = 'Positive';
      badgeClass = 'bg-success';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      typeLabel = 'Positive';
      badgeClass = 'bg-success';
      break;
    case 2:
      eightBall = 'Signs point to yes';
      typeLabel = 'Positive';
      badgeClass = 'bg-success';
      break;
    case 3:
      eightBall = 'Reply hazy, try again';
      typeLabel = 'Neutral';
      badgeClass = 'bg-secondary';
      break;
    case 4:
      eightBall = 'Ask again later';
      typeLabel = 'Neutral';
      badgeClass = 'bg-secondary';
      break;
    case 5:
      eightBall = 'Better not tell you now';
      typeLabel = 'Neutral';
      badgeClass = 'bg-secondary';
      break;
    case 6:
      eightBall = 'Don\'t count on it';
      typeLabel = 'Negative';
      badgeClass = 'bg-danger';
      break;
    case 7:
      eightBall = 'My sources say no';
      typeLabel = 'Negative';
      badgeClass = 'bg-danger';
      break;
  }

  // Display the 8-Ball answer and styled Bootstrap badge
  answerEl.textContent = eightBall;
  answerTypeEl.innerHTML = `<span class="badge ${badgeClass} fs-6 px-3 py-2">${typeLabel} Outcome</span>`;
}
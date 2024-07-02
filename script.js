const userScoreElem = document.getElementById('user_score');
const computerScoreElem = document.getElementById('computer_score');
const resultElem = document.querySelector('.result');
const userResultImage = document.querySelector('.user_result img');
const cpuResultImage = document.querySelector('.cpu_result img');
const optionImages = document.querySelectorAll('.option_image');
const container = document.querySelector('.container');
const computerChoiceElem = document.getElementById('computer_choice');
const userChoiceElem = document.getElementById('user_choice');
const winnerElem = document.querySelector('.winner');

const choices = ['rock', 'paper', 'scissors'];
const images = {
  rock: 'images/rock.png',
  paper: 'images/paper.png',
  scissors: 'images/scissors.png',
};

let userScore = 0;
let computerScore = 0;

optionImages.forEach((option) => {
  option.addEventListener('click', () => {
    container.classList.add('start');
    const userChoice = option.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    setTimeout(() => {
      updateScores(result);
      updateImages(userChoice, computerChoice);
      displayResult(result);
      displayWinner();
      container.classList.remove('start');
    }, 700);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateScores(result) {
  if (result === 'win') {
    userScore++;
  } else if (result === 'lose') {
    computerScore++;
  }

  userScoreElem.textContent = userScore;
  computerScoreElem.textContent = computerScore;
}

function updateImages(userChoice, computerChoice) {
  userResultImage.src = images[userChoice];
  cpuResultImage.src = images[computerChoice];

  userChoiceElem.textContent = capitalizeFirstLetter(userChoice);
  computerChoiceElem.textContent = capitalizeFirstLetter(computerChoice);
}

function displayResult(result) {
  if (result === 'win') {
    resultElem.textContent = 'You win!';
  } else if (result === 'lose') {
    resultElem.textContent = 'You lose!';
  } else {
    resultElem.textContent = "It's a draw!";
  }
}

function displayWinner() {
  if (userScore > computerScore) {
    winnerElem.textContent = 'You are winning!';
  } else if (userScore < computerScore) {
    winnerElem.textContent = 'Computer is winning!';
  } else {
    winnerElem.textContent = "It's a tie!";
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

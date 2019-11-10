console.log("meow");

let userScore = 0;
let compScore = 0;

const userScore_span = document.querySelector(".scoreboard__badge--user-score");
const compScore_span = document.querySelector(".scoreboard__badge--comp-score");

const scoreBoard_div = document.querySelector(".scoreboard");

const result_p = document.querySelector(".result > p");

const rock_img = document.querySelector(".choices__item--rock");
const paper_img = document.querySelector(".choices__item--paper");
const scissor_img = document.querySelector(".choices__item--scissors");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertLetter(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "cpu".fontsize(3).sub();
  result_p.innerHTML = `${convertLetter(
    userChoice
  )}${smallUserWord} beats ${convertLetter(
    compChoice
  )}${smallCompWord}. You WIN! `;
}

function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "cpu".fontsize(3).sub();
  result_p.innerHTML = `${convertLetter(
    userChoice
  )}${smallUserWord} loses to ${convertLetter(
    compChoice
  )}${smallCompWord}. You lost.... `;
}

function draw(userChoice, compChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "cpu".fontsize(3).sub();
  result_p.innerHTML = `${convertLetter(
    userChoice
  )}${smallUserWord} equals ${convertLetter(
    compChoice
  )}${smallCompWord}. It's a draw. `;
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sr":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_img.addEventListener("click", function() {
    game("r");
    console.log("you clicked rock");
  });

  paper_img.addEventListener("click", function() {
    console.log("you clicked paper");
    game("p");
  });

  scissor_img.addEventListener("click", function() {
    console.log("you clicked scissor");
    game("s");
  });
}

main();
 

/*Rock, paper, scissors game that uses HTML, CSS, and JavaScript. Tutorial from: https://www.youtube.com/watch?v=jaVNP3nIAv0 in collaboration with FreeCodeCamp.com */


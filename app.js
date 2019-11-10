let userScore = 0;
let compScore = 0;

const userScore_span = document.querySelector(".scoreboard__badge--user-score");
const compScore_span = document.querySelector(".scoreboard__badge--comp-score");

const scoreBoard_div = document.querySelector(".scoreboard");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.querySelector("#p");
const scissor_div = document.querySelector("#s");

// const smallUserWord = "(user)".fontsize(3).sup();
// const smallCompWord = "(cpu)".fontsize(3).sup();

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
  let userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertLetter(userChoice)} beats ${convertLetter(
    compChoice
  )}. You WIN! 🔥`;

  userChoice_div.classList.add("winner");
  setTimeout(() => userChoice_div.classList.remove("winner"), 400);
}

function lose(userChoice, compChoice) {
  let userChoice_div = document.getElementById(userChoice);
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertLetter(
    userChoice
  )} loses to ${convertLetter(
    compChoice
  )}. You lost.... 😭`;

  userChoice_div.classList.add("loser");
  setTimeout(() => userChoice_div.classList.remove("loser"), 400);
}

function draw(userChoice) {
  let userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `You both chose ${convertLetter(
    userChoice
  )}. It's a draw 😐`;

  userChoice_div.classList.add("draw");
  setTimeout(() => userChoice_div.classList.remove("draw"), 400);
}
function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
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
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissor_div.addEventListener("click", function() {
    game("s");
  });
}

main();

/*Rock, paper, scissors game that uses HTML, CSS, and JavaScript. Tutorial from: https://www.youtube.com/watch?v=jaVNP3nIAv0 in collaboration with FreeCodeCamp.com */

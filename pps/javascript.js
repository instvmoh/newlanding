function randomComputer() {
  let result = Math.random();

  if (result <= 1 / 3) {
    return (computerMove = "rock");
  } else if (result >= 1 / 3 && result <= 2 / 3) {
    return (computerMove = "paper");
  } else {
    return (computerMove = "scissors");
  }
}

let computerMove;
let playerMove;

let resultat = document.querySelector(".result");
let worl = document.querySelector(".worl");

let score = {
  wins: 0,
  ties: 0,
  losses: 0,
};

function myMove(playerMove) {
  randomComputer();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie 🤏🏻";
      score.ties++;
    } else if (computerMove === "paper") {
      result = "lose 👎🏻";
      score.losses++;
    } else if (computerMove === "scissors") {
      result = "win 👍🏻😍";
      score.wins++;
    }
  }

  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "win 👍🏻😍";
      score.wins++;
    } else if (computerMove === "paper") {
      result = "tie 🤏🏻";
      score.ties++;
    } else if (computerMove === "scissors") {
      result = "lose 👎🏻";
      score.losses++;
    }
  }

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "lose 👎🏻";
      score.losses++;
    } else if (computerMove === "paper") {
      result = "win 👍🏻😍";
      score.wins++;
    } else if (computerMove === "scissors") {
      result = "tie 🤏🏻";
      score.ties++;
    }
  }

  resultat.innerHTML = `You <img src="img/${playerMove}.jpg" class="playerM"> -  <img src ="img/${computerMove}.jpg" class="computerM"> Computer`;
  worl.innerText = result;

  scoreDom = document.querySelector(".scoreDom");
  scoreDom.innerHTML = `wins : ${score.wins}, ties : ${score.ties}, losses : ${score.losses}`;
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  scoreDom.innerHTML = `wins : ${score.wins}, ties : ${score.ties}, losses : ${score.losses}`;
}

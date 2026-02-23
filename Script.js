let runs = 0;
let wickets = 0;
let overs = 0;

function addRun(run) {
  runs += run;
  updateScore();
}

function addWicket() {
  wickets += 1;
  updateScore();
}

function addOver() {
  overs += 1;
  updateScore();
}

function updateScore() {
  document.getElementById("score").innerText = runs + "/" + wickets;
  document.getElementById("over").innerText = overs + ".0";
}
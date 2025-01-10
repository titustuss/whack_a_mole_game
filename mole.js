let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  // set up the grid for the game board in the html

  for (let i = 0; i < 9; i++) {
    //i goes from (0-8), so it stops at 9
    // <div id="0-8"></div>
    // we loop over the div and generate them 8 times with the id inserted
    let tile = document.createElement("div");
    // console.log(tile);
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000); //we are going to set mole every 1sec
  setInterval(setPlant, 2000);
}

function getRandomTile() {
  // math.random --> gives us a number btwn (0-9) --> Math.floor rounds to (0-8) integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }

  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }

  // we are going to create an image tag
  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }

  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";

  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString(); //update score
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText =
      "GAME OVER:" + score.toString();
    gameOver = true;
  }
}

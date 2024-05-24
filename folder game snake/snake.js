// kode JavaScript untuk game Snake
var gameBoard = document.getElementById("game-board");
var snake = [{x: 10, y: 10}];
var food = {x: 0, y: 0};
var direction = "right";
var score = 0;

function createSnake() {
  for (var i = 0; i < snake.length; i++) {
    var snakeElement = document.createElement("div");
    snakeElement.classList.add("snake");
    snakeElement.style.left = snake[i].x + "px";
    snakeElement.style.top = snake[i].y + "px";
    gameBoard.appendChild(snakeElement);
  }
}

function createFood() {
  var foodX = Math.floor(Math.random() * 39) * 10;
  var foodY = Math.floor(Math.random() * 39) * 10;
  food = {x: foodX, y: foodY};
  var foodElement = document.createElement("div");
  foodElement.classList.add("food");
  foodElement.style.left = food.x + "px";
  foodElement.style.top = food.y + "px";
  gameBoard.appendChild(foodElement);
}

function moveSnake() {
  var snakeHead = {x: snake[0].x, y: snake[0].y};
  if (direction === "right") {
    snakeHead.x += 10;
  } else if (direction === "left") {
    snakeHead.x -= 10;
  } else if (direction === "down") {
    snakeHead.y += 10;
  } else if (direction === "up") {
    snakeHead.y -= 10;
  }
  snake.unshift(snakeHead);
  var snakeTail = snake.pop();
  var snakeHeadElement = document.createElement("div");
  snakeHeadElement.classList.add("snake");
  snakeHeadElement.style.left = snakeHead.x + "px";
  snakeHeadElement.style.top = snakeHead.y + "px";
  gameBoard.appendChild(snakeHeadElement);
  var snakeTailElement = document.getElementsByClassName("snake")[0];
  gameBoard.removeChild(snakeTailElement);
  if (snakeHead.x === food.x && snakeHead.y === food.y) {
    createFood();
    score++;
  }
}

function changeDirection(event) {
  if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  }
}

createSnake();
createFood();
setInterval(moveSnake, 100);
document.addEventListener("keydown", changeDirection);
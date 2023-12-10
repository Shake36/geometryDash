let player = new Image();
let background = new Image();

player.src = "./images/player.png";
background.src = "./images/background.png";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

let playerX = canvas.width / 6;
let playerY = canvas.height / 1.2;
let playerW = 50;
let playerH = 50;

let bgSpeed = 7;
let bgX = 0;

let jumpState = false;
let gravity = 9.8;

setInterval(() => {
  ctx.drawImage(background, bgX, 0, canvas.width, canvas.height);
  ctx.drawImage(background, bgX + canvas.width, 0, canvas.width, canvas.height);
  ctx.drawImage(player, playerX, playerY, playerW, playerH);

  /* ------------------------Задній фон-------------------------- */
  if (bgX <= canvas.width * -1) {
    bgX = 0;
  } else {
    bgX -= bgSpeed;
  }

  /* ------------------------Стрибок-------------------------- */
  if (jumpState){
    playerY -= gravity;
    if (playerY <= canvas.height - playerH - 100){
        jumpState = false;
    }
  } else {
    if (!(playerY >= canvas.height - playerH)){
        playerY += gravity;
    } 
  }
}, 30);

canvas.addEventListener("click", () => {
  if (playerY >= canvas.height - playerH) {
    jumpState = true;
  }
});

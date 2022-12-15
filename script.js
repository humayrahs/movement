// init canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//draw player
ctx.fillStyle = "blue";
let playerXPos = 10;
let playerYPos = 10;
let playerSize = 40;
ctx.fillRect(playerXPos,playerYPos,playerSize,playerSize);
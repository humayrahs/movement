// init canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//classes
class Player{
    constructor(xPos,yPos,xSize,ySize){
        this.xPos = xPos;
        this.yPos = yPos;
        this.xSize = xSize;
        this.ySize = ySize;
    }
    drawPlayer(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.xPos,this.yPos,this.xSize,this.ySize);
    }
}

class Obstacle{

}
   
//create objects
const pc = new Player(10,10,40,40); //init x/y pos top left
pc.drawPlayer();





var fixedRect,movingRect

function setup() {
  createCanvas(1200,600);
  fixedRect=createSprite(400, 100, 70, 70);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;
  fixedRect.velocityY=5 ;
  movingRect=createSprite(400,800,70,70);
  movingRect.shapeColor="blue";
  movingRect.debug=true;
  movingRect.velocityY=-5;
}

function draw() {
  background("lightblue"); 
  
 bounceOff(movingRect,fixedRect) ;

  

  drawSprites();
}


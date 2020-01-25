var fixedRect

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  //fixedRect = mouseX;

  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  fixedRect.x = World.mouseX;
fixedRect.y = World.mouseY;
if(fixedRect.y<300){
background("green");
}
if(fixedRect.x<200){
  background("red");
}
//if(fixedRect.x<600){
 // background("blue");
//}
 // bounceOff(,fixedRect);
  drawSprites();
}
var fixedRect,movingRect,rect2,rect3;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400,200,50,80)
  fixedRect.shapeColor='yellow'
  fixedRect.debug=true
  movingRect= createSprite(200,200,80,30)
  movingRect.shapeColor='blue'
  movingRect.debug=true
  rect2=createSprite(400,200,30,80)
  rect2.shapeColor='red'
  rect2.debug=true
  rect2.velocityX=-1
  rect3=createSprite(200,200,30,80)
  rect3.shapeColor='orange'
  rect3.debug=true
  rect3.velocityX=1
  //movingRect.velocityX=2;
  //fixedRect.velocityX=-2;
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  //console.log(fixedRect.width/2+movingRect.width/2)
  //console.log(movingRect.x-fixedRect.x)
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor='green'
    fixedRect.shapeColor='green'
  }
  else{
    movingRect.shapeColor='blue'
    fixedRect.shapeColor='yellow'
  }
bouncing(rect3,rect2)
  drawSprites();
}
var wall, thickness;
var bullet,bulletSpeed, bulletWeight;
var weight = 0;
var speed = 0;
var wallThickness = 0;
var PASS,FAIL;
function setup() {
  createCanvas(1600, 400);

  thickness = random(22, 83);
  bulletSpeed = random(223,321);
  bulletWeight = random(30, 52);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = bulletSpeed;
  speed = bulletSpeed;
  weight = bulletWeight;
  bullet.shapeColor = color(255, 255, 255);

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(255);
  wallThickness = thickness;
  
}

function draw() {
  background("black");
  
  
  if (hasCollided(bullet,wall )){
    bullet.velocityX = 0;
    var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor= color(255,0,0);
      textSize(30);
      fill("red")
      text("FAIL",800,200);
    }
    if(damage<10){
      wall.shapeColor= color(0,255,0);
      textSize(30);
      fill("green")
      text("PASS",800,200);
      
    }
  }

  drawSprites();
  
  textSize(15);
  fill("yellow");
  text(speed,250,50);
  text("BULLET SPEED :-",255,35);

  textSize(15);
  fill("yellow");
  text(weight,50,50);
  text("BULLET WEIGHT :-",55,35);

  textSize(15);
  fill("yellow");
  text(wallThickness,450,50);
  text("WALL THICKNESS :-",455,35);

}

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;
   if(bulletRightEdge>= wallLeftEdge){
      return true;
   }
  else {
      return false;
  }
}
var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 10, 70);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "(80,80,80)";
  wall = createSprite(1200, 200, 50, 1000);
  bullet.collide(wall);

}

function draw() {
  background(0); 
//stops infront of wall

if (wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX = 0;

  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

if(damage<10){
  wall.shapeColor = "green";
}

if(damage<9){
 wall.shapeColor = "red";
}


hasCollided();
  drawSprites();
}

function hasCollided(bullet, wall){

  bulletRightEdge=1bullet.x +1bullet.width;
  wallLeftEdge=1wall.x;
  if (bulletRightEdge>=wallLeftEdge)

{
  return true
}
return false;

}  



}

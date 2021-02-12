var bullet,wall;

var speed,weight,thickness;


function setup() {
  createCanvas(800,400);


    speed=random(55,200)
    weight=random(400,1500)
    thickness=random(22,83)

    bullet=createSprite(50, 200, 50, 5);
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

    wall=createSprite(700,200,thickness,height/2)
    wall.shapeColor=color(255);


}

function draw() {
  background(0);  
  if(wall.x-bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 *weight * speed*speed/22509;
    if(deformation<180 && deformation>100){
      bullet.shapeColor = color(255);
      wall.shapeColor = color(230,230,0);
    }
    if(deformation>180){
      bullet.shapeColor = color(255);
      wall.shapeColor = color(255,0,0);
    }
    if(deformation<100){
      bullet.shapeColor = color(255);
      wall.shapeColor = color(255,255,0);
    }
    if(deformation<80){
      bullet.shapeColor = color(255);
      wall.shapeColor = color(0,128,0);
    }
  }

  drawSprites();
}
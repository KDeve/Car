var car,wall;
var speed,weight;




function setup() {
  createCanvas(800,400);
 car= createSprite(50, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX= speed;
  wall=createSprite(800,200,60,height/2)
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/25509;
       if (deformation>180) {

      car.shapecolor=color(255,0,0);
     }
       if(deformation<180 && deformation>100){
         car.shapecolor=color(230,230,0);

       }
       if(deformation<100){
         car.shapecolor=color(0,255,0);
       }

      }
}
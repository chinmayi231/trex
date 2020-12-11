function setup() {

  createCanvas(800,400);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "green";
  b = createSprite(200,200,30,80);
  b.shapeColor = "green";


}

function draw() {

  background(255,255,255); 

  console.log(a.x - b.x);
  
  a.x = World.mouseX;
  a.y = World.mouseY;

  if(a.x - b.x < a.width/2 + b.width/2  &&  b.x - a.x  <  a.width/2 + b.width/2 && a.y - b.y <  a.height/2 + b.height/2  &&  b.y - a.y <  a.height/2 + b.height/2  ) {

  a.shapeColor = "magenta";
  b.shapeColor = "magenta";

  }

  else {

    a.shapeColor = "green";
    b.shapeColor = "green";

  }

  drawSprites();
}
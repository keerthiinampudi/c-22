const Engine = Matter.Engine ;
const Bodies = Matter.Bodies ;
const World = Matter.World ;

var box,engine,world;
var ball;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
   world = engine.world;
   var ball_options = {
     restitution:1
   }
   ball = Bodies.circle(400,200,20,ball_options);
   World.add(world,ball);
   
   
   var options = {
     isStatic:true
   }
    box = Bodies.rectangle(400,390,800,20,options);
     World.add(world,box);
     console.log(box);
  }

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect (box.position.x,box.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,20,20);

  drawSprites();
}
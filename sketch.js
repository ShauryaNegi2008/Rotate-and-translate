
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var box1,box2;
var ground
// var ball

function setup() {
var canvas = createCanvas(400,400);
engine=Engine.create();
world=engine.world;

box1=new Box(200,300,50,50);
box2=new Box(240,100,50,100);

ground=new Ground(200,395,400,20);
// var  ground_option={
//  isStatic:true
// }
// ground=Bodies.rectangle(200,390,200,20,ground_option);
// World.add(world,ground);
// var  ball_option={
//   restitution:1.7
//  }
// ball=Bodies.circle(200,100,20,ball_option);
// World.add(world,ball);
// console.log("hello",ground)
}

function draw() {
  background(0);  
  Engine.update(engine);

 box1.display();
box2.display();

ground.display();
  // rectMode(CENTER);
  // rect(ground.position.x,ground.position.y,400,20);


  // ellipseMode(RADIUS);
  // ellipse(ball.position.x,ball.position.y,20,20);

}
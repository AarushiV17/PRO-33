const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var runnerImg , runner;
var snow ; 
var bgImg , bg;

var snow = [];

function preload(){
bgImg = loadImage("snow2.jpg")
runnerImg = loadAnimation("runner.PNG","runner2.PNG","runner3.PNG","runner4.PNG")
runner2 = loadAnimation("runner5.png")
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  runner = createSprite(400, 500, 50, 50);
  runner.addAnimation("standing",runner2)
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.5;

}

function draw() {
  background(bgImg);  

  Engine.update(engine);

  textSize(20);
  fill("white");
text("PRESS LEFT AND RIGHT ARROW TO MOVE THE PLAYER",600,50);
text("PRESS SPACE KEY TO STOP THE PLAYER",670,75)



if(frameCount%30===0)
  {
    snow.push(new Snow(random(width/2-10,width/2+10),10,10))
  }

  for (var s = 0; s < snow.length; s++) {
    snow[s].display();
  }

  runnerMove();

  drawSprites();
}

function runnerMove(){
  if (keyCode === RIGHT_ARROW){
    runner.velocityX = 2;
    runner.changeAnimation("running",runnerImg);
  }

  if (keyCode === LEFT_ARROW){
    runner.velocityX = -2;
    runner.changeAnimation("running",runnerImg);
  }

  if (keyCode === 32){
    runner.velocityX = 0;
    runner.changeAnimation("standing",runner2);
  }

}
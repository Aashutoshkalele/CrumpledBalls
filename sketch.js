
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var log1, log2, log3;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color("yellow");

	paper = createSprite(300, 645, 30, 30);
	paper.shapeColor = "pink";

	log1 = createSprite(1400, 650, 200, 15);
	log1.shapeColor = "white";

	log2 = createSprite(1300, 600, 20, 115);
	log2.shapeColor = "white";

	log3 = createSprite(1500, 600, 20, 115);
	log3.shapeColor = "white";



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		paper.velocityX=0;
		paper.velocityY=-4;
	}
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {

		paper.velocityX=0;
		paper.velocityY=4;
	}
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {

		paper.velocityX=4;
		paper.velocityY=0;
	}
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

		paper.velocityX=-4;
		paper.velocityY=0;
	}
}



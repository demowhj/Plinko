
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground; 

var particles = [], plinkos = [], divisions = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240,790,480,20);

	for(var k = 6; k <= width; k+=78){
		divisions.push(new Division(k, height - divisionHeight/2 - 20, 10, divisionHeight));
	}
	
	for (var j = 40; j <= width; j+=50){
		plinkos.push(new Plinko(j,75));
	}

	for (var j = 15; j <= width-10; j+=50){
		plinkos.push(new Plinko(j,175));
	}

	for (var j = 40; j <= width; j+=50){
		plinkos.push(new Plinko(j,275));
	}

	for (var j = 15; j <= width-10; j+=50){
		plinkos.push(new Plinko(j,375));
	}
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();

	for(var k = 0; k < divisions.length; k++){
		divisions[k].display();
	}

	for(var k = 0; k < plinkos.length; k++){
		plinkos[k].display();
	}
	
	if(frameCount % 60 === 0){
		particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10));
	}

	for(var k = 0; k < particles.length; k++){
		particles[k].display();
	}
	drawSprites();
 
}




var border1sprite,border2sprite,border3sprite;
var paper,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	border1sprite=createSprite(400,645,200,20);
	border2sprite=createSprite(500,605,20,100);
	border3sprite=createSprite(300,605,20,100);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	
	 border1body=Bodies.rectangle(400, 645, 200, 20 , {isStatic:true} );
	World.add(world,border1body);
	border2body=Bodies.rectangle(500, 605, 20, 100 , {isStatic:true} );
	World.add(world,border2body);
	border3body=Bodies.rectangle(400, 605, 20, 100 , {isStatic:true} );
	World.add(world,border3body);

	Engine.run(engine);
	paper=new Paper(100,100,40);



}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  
	paper.display();
}

 

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,{x:250,y:200});
	}
}



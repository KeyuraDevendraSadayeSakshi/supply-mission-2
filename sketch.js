var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite = createSprite(260,610,15,100);
	boxSprite.shapeColor = rgb(255,0,0);

    parallalSprite = createSprite(360,650,200,20 );
	parallalSprite.shapeColor = rgb(255,0,0);

	planeSprite = createSprite(460,610,15,100);
	planeSprite.shapeColor = rgb(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box = 	Bodies.rectangle(260,610,15,100,{isStatic:true});
	World.add(world,box);

	parallal = 	Bodies.rectangle(360,650,200,15,{isStatic:true});
	World.add(world,parallal);

	plane = 	Bodies.rectangle(460,610,20,100,{isStatic:true});
	World.add(world,plane);

	Engine.run(engine);
	
	
}


function draw() {
	background(0);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,15,100);
  rect(parallal.position.x,parallal.position.y,200,15);
  rect(plane.position.x,plane.position.y,20,100);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  Engine.update(engine);
	
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}




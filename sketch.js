var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;


	engine = Engine.create();
	world = engine.world;
	var starBody_options={
		isStatic:true,
	restitution:1.3
}
	starBody = Bodies.circle(650 , 30 , 5 ,starBody_options);
	World.add(world, starBody);

	star = createSprite(starBody.position.x,starBody.position.y);
	star.addImage(starImg);
	star.scale = 0.2;
	
	Engine.run(engine);
	console.log(starBody)
}


function draw() {
	Engine.update(engine)
  background(bgImg);

  star.x=starBody.position.x
  star.y=starBody.position.y

	keyPressed()
  drawSprites();
	
}

function keyPressed() {
	//write code here
	if (keyDown("left")){
		fairy.x-=(3)
	}
	if (keyDown("right")){
		fairy.x+=(3)
	}
	if(keyDown("down")){
		Matter.Body.setStatic(starBody,false)
	}
	if(starBody.position.y>=490 && fairy.x <= 600 && fairy.x >= 500){
		Matter.Body.setStatic(starBody,true)
	}
}

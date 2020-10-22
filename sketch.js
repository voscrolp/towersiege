
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hexagon, rope;
var ground, platform1, platform2;
var block1,block2,block3;
var block4,block5;
var block6;

var block7,block8,block9;
var block10,block11;
var block12;

var count, frame;

function preload(){
	
}

function setup() {
  createCanvas(800, 700);
  
  count = 0;


	engine = Engine.create();
	world = engine.world;

	//Bodies
	hexagon = new Hexagon(150,475,50,50);
  rope = new Rope(hexagon.body,{x:150,y:400});
  
  ground = new Ground(400,675,800,50);
  platform1 = new Ground(600,250,200,10);
  platform2 = new Ground(600,500,200,10);

  block1 = new Block(550,220);
  block2 = new Block(600,220);
  block3 = new Block(650,220);

  block4 = new Block(575,170);
  block5 = new Block(625,170);

  block6 = new Block(600,120);


  block7 = new Block(550,470);
  block8 = new Block(600,470);
  block9 = new Block(650,470);

  block10 = new Block(575,420);
  block11 = new Block(625,420);

  block12 = new Block(600,370);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ellipseMode(RADIUS);
  fill('yellow');
  ellipse(150,400,10,10);

  console.log(count);
  if(count == 2){
    frame++;
    if(frame<=1){
      hexagon.shrink();
    }
  }

  if(count == 3){
    frame = frame;
    frame = 0;
  }

  if(count == 4){
    frame++;
    if(frame<=1){
      hexagon.shrink();
    }
  }

  if(count == 5){
    frame = frame;
    frame = 0;
  }

  if(count == 6){
    frame++;
    if(frame<=1){
      hexagon.shrink();
    }
  }

  if(count == 7){
    frame = frame;
    frame = 0;
  }

  if(count == 8){
    frame++;
    if(frame<=1){
      hexagon.shrink();
    }
  }

  if(count == 9){
    frame = frame;
    frame = 0;
  }

  if(count == 10){
    frame = frame;
    frame = 0;
    hexagon.reset();
  }

  rope.display();
  hexagon.display();

  ground.display();
  platform1.display();
  platform2.display();

  block1.display();
  block2.display();
  block3.display();

  block4.display();
  block5.display();

  block6.display();


  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();

  block12.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
		Matter.Body.setPosition(hexagon.body,{x:160,y:570});
    rope.attach();
    count = count + 1;
	}
}




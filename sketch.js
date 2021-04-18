const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground, gameState,engine, world,dustbin,paper;
function preload(){
  dustbinimg = loadImage("dustbin.png")
  paper = loadImage("paper.png")
}
function setup() {
  createCanvas(800, 400);
  

  

  engine = Engine.create();
  world = engine.world;
  
bin = createSprite(710,320,20,20)
bin.addImage(dustbinimg)
bin.scale = 0.65

 


  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 50);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);

  launcher = new Launcher(paper.body,{x: 200,y:100})
  Engine.run(engine);


}

function draw() {
  background("white")
  dustbin.display();
  paper.display();
  launcher.display();

   drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcher.fly()

  
}

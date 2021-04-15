const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup() 
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    box1 = new Box(900,300,80,80);
    box2 = new Box(1100,300,80,80); 
    pig1 = new Pig(1000,300);
    log1 = new Log(1000,250,280,PI/2)

    box3 = new Box(900,220,80,80);
    box4 = new Box(1100,220,80,80); 
    pig2 = new Pig(1000,220);
    log2 = new Log(1000,200,280,PI/2);

   box5 = new Box(1000,180,80,80);
    log3 = new Log(980,180,140,PI/7);
  // log4 = new Log(1020,180,140,-PI/7);

  bird1 = new Bird(200,200,50,50);
}

function draw()
{
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    //log4.display();

   bird1.display();
}
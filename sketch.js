//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ob1,ground
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var boption = {   //to set physics properties on the body
      restitution:1.0  //bouncing
    }
    ob1 = Bodies.circle(200,100,20,boption);//creates a body but in memory 
    World.add(world,ob1);
    var goption=   //JSON
    {
    isStatic:true     //fixed
    }
    ground = Bodies. rectangle(100,390,400,20,goption);
    World.add(world,ground)
// console.log(ob1);
    
}

function draw(){
    background(0);
    var p=this.ob1.position;
    console.log(p)
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(p.x,p.y,20,20);
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20);
}
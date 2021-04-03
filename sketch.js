//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();  //myEngine.world
    myWorld = myEngine.world;


    var groundOptions = {
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20, groundOptions);
    World.add(myWorld, ground);


    var ballOptions={
        restitution: 1.5
    }

    ball = Bodies.rectangle(200,100,20,20, ballOptions);
    World.add(myWorld, ball);

}

function draw(){
    background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x, ground.position.y, 400,20);
    fill("orange");
    rect(ball.position.x, ball.position.y, 20, 20);
 
}

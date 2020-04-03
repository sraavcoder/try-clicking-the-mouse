var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
 
var boxes = [];
var gSlider;
var engine,world;
var ground;
 
 
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
   
   ground = new Ground(200,350,500,20);
}

function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
     boxes.push(new Block(mouseX, mouseY, random(20, 50), random(5, 60)));
    }
}
 
function draw() {
    
    Engine.update(engine);
    background(51);
    
    var fVal = gSlider.value();
   
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
    
    ground.display();
   
    fill("green");
    textSize(15);
    text("Gravity" +fVal,190,380);
   

}



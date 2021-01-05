const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var rows=[],plinkos=[],particles=[]
var rowsheight=300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(240,790,480,20)
for(var k=0;k<=width;k=k+80){
  rows.push(new Rows(k,height-rowsheight/2,10,rowsheight))
  
  
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75))
}
for(var j=15;j<=width;j=j+50){
  plinkos.push(new Plinko(j,175))
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,275))
}
for(var j=15;j<=width;j=j+50){
  plinkos.push(new Plinko(j,375))
}




  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();
  ground.display();
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
  }
  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j =15; j<plinkos.length;j++){
    plinkos[j].display();
  }
  if(frameCount%60===0){
 
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
     }
  for(var j = 0; j<particles.length;j++){
    particles[j].display();
  }
  
}
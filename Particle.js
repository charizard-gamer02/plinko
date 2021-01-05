class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.5,
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
         this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle= this.body.position
        push();
     
        noStroke();
        translate(pos.x,pos.y);
     fill(this.color)
     
        ellipse(0,0,this.radius*2);
        pop();
    }}
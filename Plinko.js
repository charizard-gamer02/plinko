class Plinko{
    constructor(x,y){
      var options = {
         isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = this.body.circleRadius;
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world,this.body);
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
    }
    display(){
        var pos = this.body.position;
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
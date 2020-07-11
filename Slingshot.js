class Slingshot{
    constructor(body1, point2){
    var options = {
        bodyA : body1,
        pointB :point2,
        length : 10,
        stiffness : 0.15
    }
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if (this.sling.bodyA != null) {
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.pointB
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
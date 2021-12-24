class Boat{
    constructor(x, y, w, h, boatPos){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.boatPos = boatPos;

        var options = {
            isStatic:true
        }

        this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);

        this.image = loadImage("./assets/boat.png");
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
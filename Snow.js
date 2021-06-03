class Snow{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
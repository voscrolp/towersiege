class Block{
    constructor(x,y){
        var options = {
            restitution:0.04,
            density:0.5
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;
        
        
    }

    display(){
        push();
        stroke('black')
        strokeWeight(2);
        fill('red');
        rect(this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}
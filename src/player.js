class Player {

    constructor(){

    // Initial position of rectangle
    this.xposition = (width / 2) 
    this.yposition = height - 30    

    // Top and bottom coordinates of rectangle for collision purposes
    this.top = this.xposition - this.w/2;
    this.bottom = this.x + this.w/2;
    
    // Dimensions of rectangle 
    this.w = 150
    this.h = 25
    
    // Velocity of rectangle
    this.velocity = 7

    }

    // Function to display rectangle 
    show() {
        rectMode(CENTER);
        fill(0,105,132)
        rect(this.xposition, this.yposition, this.w, this.h)
    }

   
    // Function handles rectangle movement
    move(direction) {
        if (direction === 'right') {
            this.xposition += this.velocity;        
        }
        else 
        {
            this.xposition -= this.velocity;
        }


        if (this.xposition < this.w / 2) 
        {
            this.xposition = this.w / 2
        } 
        else if(this.xposition > width - (this.w / 2)) 
        {
            this.xposition = width - this.w / 2   
        }

        this.top = this.xposition - this.w/2;
        this.bottom = this.xposition + this.w/2

    }
}

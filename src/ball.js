
class Ball {

    constructor(player)
    {
    // Initial position and dimensions of ball
    this.radius = 15;  
    this.diameter = this.radius * 2 
    this.xposition = player.xposition;
    this.yposition = player.yposition - (this.diameter)

    // X and Y components of the velocity
    this.horizontalVelocity = 5;
    this.verticalVelocity = -5;

    }

   
    // Function to show the ball
    show() 
    {
        fill(255); // Makes the ball white 
        ellipse(this.xposition, this.yposition, this.diameter, this.diameter); // Creates a proportional ball
    }
    
    // Function handles ball movement
    move() 
    {
        this.xposition += this.horizontalVelocity;
        this.yposition += this.verticalVelocity;    
    
        if (this.xposition > width || this.xposition < 0) {
            this.horizontalVelocity = -this.horizontalVelocity;
        }
    }


    // Function handles collisions 
    collision(element) 
    {
        if  (this.yposition <= (element.yposition + element.h/2) && this.yposition >= (element.yposition - element.h/2)) {

            if (this.xposition >= element.top && this.xposition <= element.bottom) {
                return true;
            }        
            return false;
        }
    }

    
}
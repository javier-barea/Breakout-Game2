class Block{
    constructor(xposition, yposition, width, height)
    {
        // Initial position of blocks
        this.xposition = xposition
        this.yposition = yposition
    
        // Dimensions of blocks
        this.w = width
        this.h = height
    
        // Top and bottom coordinates of rectangle for collision purposes
        this.top = this.xposition - this.w/2
        this.bottom = this.xposition + this.w/2
            
    
        // Variables to get random color for each block
        this.firstColor = random(255)
        this.SecondColor = random(255)
        this.ThirdColor = random(255)

    }



    // Function to display blocks
    show() {   
        rectMode(CENTER);    
        fill(this.firstColor, this.SecondColor, this.ThirdColor)
        rect(this.xposition, this.yposition, this.w, this.h)
    }

}

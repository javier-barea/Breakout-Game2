let player
let blocks = []
let ball
let button
let gameMode
let score

function setup() {  

    score = 0;
    gameMode = 0;
    // Creates window
   createCanvas(900,600)
 
   player = new Player()    


  let rows = 10
  let blocksLine = 10
  let blockWidth = width / blocksLine
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < blocksLine; j++) {
      block = new Block(blockWidth * j + 45, 25 * i + 10, blockWidth, 25)
      blocks.push(block) 
    }
  }

  ball = new Ball(player); 
}

function draw() {

    // Start screen
    if (gameMode == 0) 
    {
       textSize(30);   
       text("press ENTER to start ", width/2, height/2)

    }

    else
    {    

    background(0); // Black background    

    
    player.show(); // Player is displayed

    if (keyIsDown(RIGHT_ARROW)) {
        player.move('right')
    } else if (keyIsDown(LEFT_ARROW)) {
        player.move('left')
    }


   ball.move(); // Move method is called for the ball
    


    if (ball.yposition > height) { startNewGame();} // If ball goes under player's rectangle game's over

    
    for (let i = 0; i < blocks.length; i++) {

        blocks[i].show(); // Calls each block in "blocks" and displays it 
        
        // Checks if the ball hits a block
        if (ball.collision(blocks[i])) {
            ball.verticalVelocity = -ball.verticalVelocity; // The ball rebounds and goes back down
            blocks.splice(i,1); // Removes block from array 
            score++
        }
        
    }

    if (blocks == undefined || blocks.length < 1) { WinMode()} // If there are no more blocks left game's over



    // Checks if the ball hits a the player's rectangle
    if (ball.collision(player)) {
        ball.yposition -= ball.radius
        ball.verticalVelocity = -ball.verticalVelocity ; // The ball rebounds and goes back up
    }

    // Checks if the ball hits top of the screen
    if (ball.yposition < 0) {
        ball.verticalVelocity = -ball.verticalVelocity; // The ball rebounds and goes back down
    }

    ball.show(); // Displays the ball 

    textSize(32)
    textStyle(BOLD);
    fill(255,255,255)
    text(`Score:${score}`, width - 150, 50)

    }   

    
}




// Handles winning
function WinMode() {   
    gameMode = 0;
    alert("Congratulations, you won!!")
    window.location.reload();
}

// Handles lost
function startNewGame() {   
    gameMode = 0;
    alert("You lost, try again!")
    window.location.reload();
}

// Start screen
function keyPressed() {
    if (keyCode === ENTER) {
      gameMode = 1;
    }
  }

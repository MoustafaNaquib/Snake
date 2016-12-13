var snake;
var gridSize = 10;
var snakeSize = 0;

function setup() {
  createCanvas(500, 500);
  food = new Food();
  snake = new Snake();
  
  speedSlider = createSlider(1, 20, 10);
  speedSlider.position(515, 20);
  
  addSlider = createSlider(1, 20, 5);
  addSlider.position(515, 50);
  
}

function draw(){
  background(255, 0, 100);
    
    
    text("Speed", 460, 30);
    text("Add Rate", 445, 60);
  
    frameRate(speedSlider.value());
    food.display();

    
    
    snake.move();
    snake.display();
    snake.collided();
    
   


    
    if(snake.eaten(food))
    {
      food = new Food();
      snakeSize+=addSlider.value();
    }
}

function keyPressed()
{
  if(keyCode === LEFT_ARROW && snake.xVelocity === 0){
    snake.xVelocity = -gridSize;
    snake.yVelocity = 0;
    snake.move;
  
  }
  else if(keyCode === RIGHT_ARROW && snake.xVelocity === 0){
    snake.xVelocity = gridSize;
    snake.yVelocity = 0;
    snake.move;
  }
  else if(keyCode === UP_ARROW && snake.yVelocity === 0){
    snake.yVelocity = -gridSize;
    snake.xVelocity = 0;
    snake.move;
  }
  else if(keyCode === DOWN_ARROW && snake.yVelocity === 0){
    snake.yVelocity = gridSize;
    snake.xVelocity = 0;
    snake.move;
  }
}

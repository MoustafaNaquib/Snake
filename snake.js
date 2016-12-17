function Snake()
{
  
  if(snakeCount ===1)
  {
    this.x = 250;
    this.y = 250;
  }
  else
  {
    this.x = 500;
    this.y = 500;
  }
  this.width = gridSize;
  this.height = gridSize;
  this.xHistory = [];
  this.yHistory = [];
  this.snakeSize = 0;

  
  if(snakeCount ===1)
  {
    this.c = color('#622569');
  }
  else
  {
    this.c = color('#FF5733');
  }
  
  this.xVelocity = 0;
  this.yVelocity = 0;
  
  this.move = function()
  {
    
    for(var i = this.snakeSize; i > 0; i--)
    {
      this.xHistory[i] = this.xHistory[i-1];
      this.yHistory[i] = this.yHistory[i-1];
      
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;
    
    this.x = constrain(this.x, 0, width-this.width);
    this.y = constrain(this.y, 0, height- this.height);
    
    this.xHistory[0] = this.x;
    this.yHistory[0] = this.y;
    
    
  }
  
  this.display = function()
  {
    for(var i = 0; i <= this.snakeSize; i++)
    {
      stroke(0);
      strokeWeight(2)
      fill(this.c);
      rect(this.xHistory[i],this.yHistory[i], this.width, this.height);
    }  
  }
  
  this.collided = function()
  {
    
    for(var i = 0; i < this.snakeSize; i++)
    {
      var pos = dist(this.xHistory[i+1], this.yHistory[i+1], this.xHistory[0],this.yHistory[0]);
      
  
      if(pos < 1)
      {
        this.snakeSize = i;
        this.xHistory.splice(i, this.xHistory.length-i);
        this.yHistory.splice(i, this.yHistory.length-i);
      }
      
    }
  }
  
  this.eaten = function(f)
  {
    var d = dist(this.x, this.y, f.x, f.y)
    
    if(d < 1)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}


function keyPressed()
{
  
   
  
  
  if(keyCode === LEFT_ARROW && snake.xVelocity === 0){
    snake.xVelocity = -gridSize;
    snake.yVelocity = 0;
    
    print(time);
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
   if(keyCode === 65 && snake2.xVelocity === 0){
    snake2.xVelocity = -gridSize;
    snake2.yVelocity = 0;
    snake2.move;
  }
  else if(keyCode === 68 && snake2.xVelocity === 0){
    snake2.xVelocity = gridSize;
    snake2.yVelocity = 0;
    snake2.move;
  }
  else if(keyCode === 87 && snake2.yVelocity === 0){
    snake2.yVelocity = -gridSize;
    snake2.xVelocity = 0;
    snake2.move;
  }
  else if(keyCode === 83 && snake2.yVelocity === 0){
    snake2.yVelocity = gridSize;
    snake2.xVelocity = 0;
    snake2.move;
  }
  
}

 
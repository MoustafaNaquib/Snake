function Snake()
{
  
  
  this.x = 250;
  this.y = 250;
  this.width = gridSize;
  this.height = gridSize;
  this.xHistory = [];
  this.yHistory = [];

  this.c = color('#0f0');
  
  this.xVelocity = 0;
  this.yVelocity = 0;
  
  this.move = function()
  {
    
    for(var i = snakeSize; i > 0; i--)
    {
      this.xHistory[i] = this.xHistory[i-1];
      this.yHistory[i] = this.yHistory[i-1];
      
    }

    this.x += snake.xVelocity;
    this.y += snake.yVelocity;
    
    this.x = constrain(this.x, 0, width-this.width);
    this.y = constrain(this.y, 0, height- this.height);
    
    this.xHistory[0] = this.x;
    this.yHistory[0] = this.y;
    
    
  }
  
  this.display = function()
  {
    for(var i = 0; i <= snakeSize; i++)
    {
      noStroke();
      fill(this.c);
      rect(this.xHistory[i],this.yHistory[i], this.width, this.height);
    }  
  }
  
  this.collided = function()
  {
    
    for(var i = 0; i < snakeSize; i++)
    {
      var pos = dist(this.xHistory[i+1], this.yHistory[i+1], this.xHistory[0],this.yHistory[0]);
      
  
      if(pos < 1)
      {
        snakeSize = i;
        this.xHistory = [];
        this.yHistory = [];
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
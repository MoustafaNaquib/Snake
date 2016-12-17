function Food(){

  this.r = gridSize;
  this.x = (round(random(width)/gridSize) * gridSize);
  this.y = (round(random(height)/gridSize) * gridSize);
  
  this.foodColor = color('#5b9aa0');
  constrain(this.x, 0, width-this.r);
  constrain(this.y, 0, height-this.r);
  
 
  
  this.display = function()
  {
    noStroke();
    fill(this.foodColor);
    rect(this.x,this.y,this.r,this.r);
    
  }
}
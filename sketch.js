var snake;
var snake2;
var gridSize = 10;
var snakeCount = 1;
var gameStarted = 0;
var twoPlayers;
var time;


function setup() {
  createCanvas(1000, 600);
  
  
  
}

function createSnakes(players)
{
  snake = new Snake();
  twoPlayers = 1;
  
  if(players === 2)
  {
     twoPlayers = 2;
     snakeCount++;
     snake2 = new Snake();
  }
  print("Game Started");
  gameStarted = 1;
 
}

function startGame(players)
{
  food = new Food();
  
  createSnakes(players);
  
}

function menu()
{
  textSize(60)
  textFont("Helvetica");
  
  fill(255);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER, TOP);
  text("Snake",width/2,height/8);
    
  textSize(30);
  strokeWeight(3);
  
   text("One Player", width/8, height/3);
    
    text("Two Players", width- (width/8), height/3);
    

  if(mouseX < width/2)
  {
    fill(mouseX/20);
    text("One Player", width/8, height/3);
    if(mouseIsPressed)
    {
      startGame(1);
    }
  }
  else
  {
    fill(mouseX/20);
    text("Two Players", width- (width/8), height/3); 
    if(mouseIsPressed)
    {
     
      startGame(2);
    }
  }
  
  
  
  
  
}



function draw(){
  background(249, 213, 229);
    
    if(gameStarted === 0)
    {
      menu();
    }
    else
    {
   
    
    
    food.display();

    
    snakeLogic();
   
    }
     frameRate(15);
  
    
    
    
}

function snakeLogic()
{
    snake.move();
   
    
    
    snake.display();
    
    
    snake.collided();
   
   
    
    if(twoPlayers === 2)
    {
      snake2.move();
      snake2.display();
      snake2.collided();
      
    }
    
    if(snake.eaten(food))
    {
      food = new Food();
      snake.snakeSize+=5;
    }
    if(twoPlayers === 2)
    {
     if(snake2.eaten(food))
    {
      food = new Food();
      snake2.snakeSize+=5;
    }
    }
}
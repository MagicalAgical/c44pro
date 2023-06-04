

let engine;
let world;
var ground;


var mainPlayer,mainPlayerImage,goldCoin,goldCoinImage,bricks,brickImage;
var backgoundImage;
var back;
var dogAnimation;
var dogStanding;
var wrongImg;


function preload(){
  mainPlayerImage = loadImage("./assests/player.jpeg")
  goldCoinImage = loadImage("./assests/goldCoin.jpeg")
  brickImage = loadImage("./assests/bricks.jpeg")
  backgoundImage = loadImage("./assests/background.jpeg")
  dogStanding = loadImage("./assests/dog3.png")


  wrongImg = loadImage("./assests/wrong.png")


  dogAnimation = loadAnimation("./assests/dog1.png","./assests/dog2.png","./assests/dog3.png")

}

function setup() 
{
  createCanvas(2000,1000);
  back = createSprite(10,20,2000,700)
  back.addImage("background",backgoundImage);
  back.scale = 13

  ground = createSprite(width,height-10,4000,10)
  ground.visible = true;


  dog = createSprite(300,height-70,180,920)
  dog.addAnimation("running",dogAnimation)
  dog.scale = 3.5

  coin = createSprite(2000,height-70,180,920)
  coin.addImage("coin",goldCoinImage)
  coin.scale = 0.5


  brick = createSprite(3000,height-70,180,920)
  brick.addImage("brick",brickImage)
  brick.scale = 0.5


  
  


  
  

  

  

}



function draw() 
{

  background(221);
  back.velocityX = -1
  
  if(back.x<200){
   back.x = back.width/2+100
   console.log("work")
  }

  if(keyIsDown(UP_ARROW)){
    dog.velocityY = -12
    dog.addImage(dogStanding);

  }

  dog.velocityY = dog.velocityY + 0.8
   dog.collide(ground);



  coin.velocityX = -5


  if(dog.collide(coin)){
    coin.remove();
    dog.velocityX=0.2
  }

  brick.velocityX = -5 


  if(dog.collide(brick)){
    dog.changeImage("wrong",wrongImg);
    dog.velocityX = 0;
    dog.velocityY = 0;
  }

  


  drawSprites();
  

 
   
}

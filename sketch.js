var bgGameplay,bgGameplayImg;
var bgStory, bgStoryImg, play, playImg, ctrl, ctrlImg;
var player, shooterImg, shooter_shooting;
var story, gameplay;
var playButton, playButtonImg;
var howButton, howButtonImg;
gameState = story


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgStoryImg = loadImage("assets/story.jpeg")
  bgGameplayImg = loadImage("assets/gameplay.jpeg")
  playButtonImg = loadImage("assets/play_button.png")
  howButtonImg = loadImage("assets/doubt.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bgGameplay = createSprite(displayWidth/2,displayHeight/2,20,20)
bgGameplay.addImage(bgGameplayImg)
bgGameplay.scale = 1.2

//bgStory = createSprite(displayWidth/2,displayHeight/2-60,20,20)
//bgStory.addImage(bgStoryImg)
//bgStory.scale = 3.5

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

 // playButton = createSprite(displayWidth/3-displayWidth/4+10, displayHeight/2-125, 50, 50);
 // playButton.addImage(playButtonImg)
 // playButton.scale = 0.09

 // howButton = createSprite(displayWidth/3-displayWidth/4+10, displayHeight/2+10, 50, 50);
 // howButton.addImage(howButtonImg)
 // howButton.scale = 0.09


}

function draw() {
  background(0); 



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+20
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-20
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
 player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}

drawSprites();

}

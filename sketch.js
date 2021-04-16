var bgImg;
var cat;
var catImg;
var catImg2;
var mouse;
var mouseImg;
var mouseImg2;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg2 = loadImage("cat2.png , cat3.png");
    mouseImg2 = loadImage("mouse2.png , mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RightArrow){
    mouse.addAnimation("mouseTeasing" , mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
}
if(keyCode === LeftArrow){
    mouse.addAnimation("mouseTeasing" , mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
if(cat.x - mouse.x < (cat.width - mouse.width)/2){

}

if(mouse.isTouching(cat)){

cat.addAnimation("catRunning" , catImg2);
cat.changeAnimation("catRunning");
mouse.velocityX = 0;

}

}


}

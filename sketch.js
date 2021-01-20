
function preload() {
    //load the images here
cat_im = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png")
tom_im = loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png")
back = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(50, 160, 20, 50);
    tom.addAnimation("tt", tom_im)
    cat = createSprite(50, 160, 20, 50);
    cat.addAnimation("running", cat_im)

}

function draw() {

    background(back);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX -= 5
        cat.addAnimation("catRunning",catImg2)
        cat.changeAnimation("catRunning")
    }
  //For moving and changing animation write code here
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX = 0
   }

}
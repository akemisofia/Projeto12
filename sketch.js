var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload()
{
pathImg=loadImage("path.png");
boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup()
{
  createCanvas(400,400);
  path=createSprite(200,200,20,20);
  path.addImage(pathImg);
  path.scale=1.2;
  boy=createSprite(200,300,20,20);
  boy.addAnimation("Jake1",boyImg);
  boy.scale=0.8;
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false;
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false;
}

function draw() 
{
  background(0);
path.velocityY=4;
if(path.y>400)
{
  path.y=height/2;
}

// mover o menino com o mouse usando mouseX
boy.x = World.mouseX
//problema corrigido ==> boy.X=World.mouseX
// o comando acima está dando problema ao ser executado por ter o X em maiúsculo
edges= createEdgeSprites();
boy.collide(edges[3]);
// colidir o menino com os limites invisíveis da esquerda e da direita
boy.collide(leftBoundary);
boy.collide(rightBoundary);


  drawSprites();
}

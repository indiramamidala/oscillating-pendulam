function setup() {
  createCanvas(1400,640);

}

function draw() {
  background(0); 
  rect(200,200,100,500);
  rect(400,200,100,500);
  rect(600,200,100,500);
  rect(800,200,100,500);
  rect(1000,200,100,500);
  rect(1200,200,100,500);
  square(300,550,100,100);
  square(500,550,100,100);
  square(700,550,100,100);
  square(900,550,100,100);
  square(1100,550,100,100);
  rect(150,150,1200,100);
  square(700,50,100,100);
  triangle(650, 150, 150, 150, 350, 25);
  triangle(1200, 200, 200, 200, 700, 50);
  
    drawSprites();
}
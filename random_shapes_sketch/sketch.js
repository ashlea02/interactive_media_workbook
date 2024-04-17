// code by me, in Interactive Media workshop

function setup() {
  createCanvas(windowWidth, windowHeight);
 // background(255, 200, 100);
  frameRate(10)
}


function draw() {
// background(255, 200, 100, 40);
 fill(random(256), random(256), random(256));
 circle(random(width), random(height), random(500));
 fill(random(256), random(256), random(256));
 circle(random(width), random(height), random(250));
 fill(random(256), random(256), random(256));
 circle(random(width), random(height), random(250));
  //square(mouseX, mouseY, 600);
  //rect(mouseX, mouseY, 400, 500);
  noStroke();
  //strokeWeight(5);
  //stroke(255, 0, 0);
  //line(mouseX, mouseY, pmouseX, pmouseY);
  fill(random(256), random(256), random(256));
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));
  fill(random(256), random(256), random(256));
  triangle(random(width/2), random(height/2), random(width/2), random(height/2), random(width/2), random(height/2));
  fill(random(256), random(256), random(256));
  triangle(random(width/2), random(height/2), random(width/2), random(height/2), random(width/2), random(height/2));
  strokeWeight(5);
  
}
function mousePressed(){
  background(random(256), random(256), 
random(256));
}
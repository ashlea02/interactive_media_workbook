//RANDOM POSITION + MOVEMENT OF TEXT --> 
//SCRIPT BY IBERDDUGO https://editor.p5js.org/lberdugo/sketches/ldAjJb4ns + MODIFIED USING COPILOT   

  var beginningElem, middleElem, endElem;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
  
    beginningElem = createA('beginning.html', 'beginning');
    beginningElem.class('beginning');
  
    middleElem = createA('middle.html', 'middle');
    middleElem.class('middle');
  
    endElem = createA('end.html', 'end');
    endElem.class('end');

    // Randomize initial positions
    x = random(width);
    y = random(height);
    a = random(width);
    b = random(height);
    g = random(width);
    h = random(height);
  
   // Randomize initial steps 
  xStep = random(.2, .7);
  yStep = random(.2, .7);
  aStep = random(.2, .7);
  bStep = random(.2, .7);
  gStep = random(.2, .7);
  hStep = random(.2, .7);
}
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
  background("#ffffff")
  
  var beginningWidth = textWidth("beginning");
  var middleWidth = textWidth("middle");
  var endWidth = textWidth("end");

  var beginningHeight = beginningElem.elt.offsetHeight;
  var middleHeight = middleElem.elt.offsetHeight;
  var endHeight = endElem.elt.offsetHeight;

  beginningElem.position(x, y);
  middleElem.position(a, b);
  endElem.position(g, h);

  x += xStep;
  y += yStep;
  
  a += aStep;
  b += bStep;

  g += gStep;
  h += hStep;

  // bounce along the width
  if (x > width - beginningWidth || x < 0) {
    xStep = xStep * -1;
  }
  
  // bounce along the height
  if (y > height - beginningHeight || y < 0) {
    yStep = yStep * -1;
  }
  
  // bounce along the width
  if (a > width - middleWidth || a < 0) {
    aStep = aStep * -1;
  }
  
  // bounce along the height
  if (b > height - middleHeight || b < 0) {
    bStep = bStep * -1;
  }
  
  // bounce along the width
  if (g > width - endWidth || g < 0) {
    gStep = gStep * -1;
  }

  // bounce along the height
  if (h > height - endHeight || h < 0) {
    hStep = hStep * -1;
  }
}
 

var returnHomeElem, unwelcomeElem, countdownElem, iframeElem;
var x, y, xSpeed, ySpeed;
var returnHomeHeight, unwelcomeWidth, unwelcomeHeight, countdownWidth, countdownHeight, iframeWidth, iframeHeight;
  
function setup() {
  createCanvas(windowWidth, windowHeight);

  returnHomeElem = createA('index.html', 'return home ▶');
  returnHomeElem.class('countdown-container');

  unwelcomeElem = createP('you are unwelcome here');
  unwelcomeElem.class('countdown-container');

  // Fetch the HTML content from 'end.html'
  fetch('end.html')
    .then(response => response.text())
    .then(data => {
      // Parse the fetched HTML string into a Document object
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(data, 'text/html');

      // Get the specific part by its id
      var countdownContent = htmlDoc.getElementById('countdown-content');

      // Create a paragraph element with the specific part's inner HTML
      countdownElem = createP(countdownContent.innerHTML);
      countdownElem.class('countdown-container');
    });

  // Create an iframe
  iframeElem = createElement('iframe', 'https://www.example.com');
  iframeElem.position(random(width), random(height));
  iframeElem.size(200, 200); // Set the size of the iframe

  // Randomize initial speeds
  xSpeed = random(2, 5);
  ySpeed = random(2, 5);

  // Randomize initial positions
  x = random(width);
  y = random(height);

  // Set the heights and widths of the elements
  returnHomeHeight = returnHomeElem.height;
  unwelcomeWidth = unwelcomeElem.width;
  unwelcomeHeight = unwelcomeElem.height;
  countdownWidth = countdownElem.width;
  countdownHeight = countdownElem.height;
  iframeWidth = iframeElem.width;
  iframeHeight = iframeElem.height;
}

function draw() {
  // Update the position of the iframe
  var x = iframeElem.position().x;
  var y = iframeElem.position().y;

  if (x < 0 || x > width - iframeWidth) {
    xSpeed = -xSpeed;
  }
  if (y < 0 || y > height - iframeHeight) {
    ySpeed = -ySpeed;
  }

  iframeElem.position(x + xSpeed, y + ySpeed);

  // Existing bouncing logic...
  if (b > height - unwelcomeHeight || b < 0) {
    bStep = bStep * -1;
  }

  // bounce along the width
  if (g > width - countdownWidth || g < 0) {
    gStep = gStep * -1;
  }

  // bounce along the height
  if (h > height - countdownHeight || h < 0) {
    hStep = hStep * -1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
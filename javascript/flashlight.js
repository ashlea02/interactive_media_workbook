//FLASHLIGHT EFFECT ON MOUSEMOVE
//MODIFIED CHATGPT CODE

// Get the image element
var pic = document.getElementById('followFlashlight');

// Set initial position
var picWidth = pic.width / 2;
var picHeight = pic.height / 2;

// Update pic position on mousemove
document.addEventListener('mousemove', function(event) {
  // Calculate mouse position relative to the document
  var mouseX = event.pageX;
  var mouseY = event.pageY;

  updateImagePosition(mouseX, mouseY);
});

// Update pic position on scroll
document.addEventListener('scroll', function(event) {
  // Calculate current mouse position relative to the document
  var mouseX = event.clientX + window.pageXOffset;
  var mouseY = event.clientY + window.pageYOffset;

  updateImagePosition(mouseX, mouseY);
});

// Update image position
function updateImagePosition(mouseX, mouseY) {
  pic.style.left = mouseX + 'px';
  pic.style.top = mouseY + 'px';
}

// Get all iframe overlays
var iframeOverlays = document.querySelectorAll('.iframe-overlay');

// Add mouseenter and mouseleave event listeners to each iframe overlay
iframeOverlays.forEach(function(iframeOverlay) {
    iframeOverlay.addEventListener('mouseenter', function() {
        // Remove the iframe overlay when the mouse enters it
        this.style.display = 'none';
    });

    iframeOverlay.parentNode.addEventListener('mouseleave', function() {
        // Add the iframe overlay back when the mouse leaves the parent element
        iframeOverlay.style.display = 'block';
    });
});
//FLASHLIGHT EFFECT ON MOUSEMOVE
//MODIFIED CHATGPT CODE

// Get the image element
        var image = document.getElementById('followImage');
      
        // Set initial position
        var imageWidth = image.width / 2;
        var imageHeight = image.height / 2;
      
        // Update image position on mousemove
        document.addEventListener('mousemove', function(event) {
          // Calculate mouse position relative to the document
          var mouseX = event.pageX;
          var mouseY = event.pageY;
      
          updateImagePosition(mouseX, mouseY);
        });
      
        // Update image position on scroll
        document.addEventListener('scroll', function(event) {
          // Calculate current mouse position relative to the document
          var mouseX = event.clientX + window.pageXOffset;
          var mouseY = event.clientY + window.pageYOffset;
      
          updateImagePosition(mouseX, mouseY);
        });
      
        // Update image position
        function updateImagePosition(mouseX, mouseY) {
          image.style.left = mouseX + 'px';
          image.style.top = mouseY + 'px';
        }
 
     
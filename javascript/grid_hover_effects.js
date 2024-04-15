//GRID HOVER EFFECTS
//MODIFIED COPLIOT CODE
      // Get all grid items
      var gridItems = document.querySelectorAll('.grid-item');
    
      // Add click event listener to each grid item
      gridItems.forEach(function(gridItem) {
          gridItem.addEventListener('click', function() {
              // Remove any existing popped-out item
              var poppedOutItem = document.querySelector('.grid-item.popped-out');
              if (poppedOutItem) {
                  document.body.removeChild(poppedOutItem);
              }
    
              // Clone the clicked grid item
              var clone = this.cloneNode(true);
    
              // Add 'popped-out' class to the clone
              clone.classList.add('popped-out');
    
              // Add click event listener to the clone
              clone.addEventListener('click', function() {
                  document.body.removeChild(this);
              });
    
              // Append the clone to the body
              document.body.appendChild(clone);
          });
      });
// TOGGLE FLASHLIGHT WITH T KEY, WITH SOUND
// MODIFIED COPILOT CODE

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyT') {
    event.preventDefault();  // Prevent the default action
    var flashlight = document.getElementById('followFlashlight');
    var torchSound = document.getElementById('torchSound');
    var toggleLightsText = document.getElementById('toggleLightsText');
    var returnHomeBottomRight = document.getElementById('returnHomeBottomRight');

    torchSound.play();
    if (flashlight.style.opacity === '0') {
      flashlight.style.opacity = '1';
      toggleLightsText.style.color = '#f0f0f0';
      returnHomeBottomRight.style.color = '#f0f0f0';
    } else {
      flashlight.style.opacity = '0';
      toggleLightsText.style.color = 'black';
      returnHomeBottomRight.style.color = 'black';
      
    }
    
  }
});
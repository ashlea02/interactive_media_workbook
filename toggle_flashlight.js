// TOGGLE FLASHLIGHT WITH F KEY, WITH SOUND
// MODIFIED COPILOT CODE

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyF') {
    event.preventDefault();  // Prevent the default action
    var flashlight = document.getElementById('followImage');
    var torchSound = document.getElementById('torchSound');
    torchSound.play();
    if (flashlight.style.opacity === '0') {
      flashlight.style.opacity = '1';
    } else {
      flashlight.style.opacity = '0';
    }
  }
});
// Add an event listener for the "click" event on the button
var openButton = document.getElementsByClassName('.open-button');
openButton.addEventListener('click', function() {
  // Get the game container element
  var gameContainer = document.querySelector('.game-container');

  // Add the "show" class to the game container element to make it visible
  gameContainer.classList.add('show');
});

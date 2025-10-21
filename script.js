//your JS code here. If required.
// List of sound files (must match files in the 'sounds' folder)
const sounds = ['sound1.mp3', 'sound2.mp3', 'sound3.mp3', 'sound4.mp3'];

// Reference to the buttons container
const buttonsContainer = document.getElementById('buttons');

// Store created audio objects
const audioElements = [];

// Create a button for each sound
sounds.forEach((sound, index) => {
  const button = document.createElement('button');
  button.className = 'btn';
  button.innerText = `Play ${sound.split('.')[0]}`;
  buttonsContainer.appendChild(button);

  const audio = new Audio(`sounds/${sound}`);
  audioElements.push(audio);

  button.addEventListener('click', () => {
    stopAll();   // Stop any other playing sounds
    audio.play();
  });
});

// Stop button
const stopButton = document.createElement('button');
stopButton.className = 'stop';
stopButton.innerText = 'Stop';
buttonsContainer.appendChild(stopButton);

stopButton.addEventListener('click', stopAll);

// Function to stop all audio
function stopAll() {
  audioElements.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

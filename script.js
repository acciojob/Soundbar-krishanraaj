// Ensure audio files exist in the 'sounds' folder
const sounds = [
  'sound1.mp3',
  'sound2.mp3',
  'sound3.mp3',
  'sound4.mp3',
  'sound5.mp3'
];

const container = document.getElementById('buttons');
const audioElements = [];

// Dynamically create buttons for each audio
sounds.forEach((sound, index) => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = `Play ${index + 1}`;
  container.appendChild(btn);

  const audio = new Audio(`sounds/${sound}`);
  audioElements.push(audio);

  btn.addEventListener('click', () => {
    stopAll();
    audio.play();
  });
});

// Stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
container.appendChild(stopBtn);

stopBtn.addEventListener('click', stopAll);

// Stop all audio
function stopAll() {
  audioElements.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

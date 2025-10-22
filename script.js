const sounds = [
  'sound1.mp3',
  'sound2.mp3',
  'sound3.mp3',
  'sound4.mp3',
  'sound5.mp3',
  'sound6.mp3'
];

const container = document.getElementById('buttons');
const audios = [];

// Create audio objects and buttons
sounds.forEach((file, index) => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = `Audio ${index + 1}`;
  container.appendChild(btn);

  const audio = new Audio(`sounds/${file}`);
  audios.push(audio);

  btn.addEventListener('click', () => {
    stopAll();
    audio.play();
  });
});

// Stop all audio
function stopAll() {
  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}

// Optional: Stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
container.appendChild(stopBtn);
stopBtn.addEventListener('click', stopAll);

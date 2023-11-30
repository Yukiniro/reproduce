import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <input type="file" id="file" />
    <div>
      <button id="element" disabled>Play with audio element</button>
      <button id="ctx" disabled>Play with audio ctx</button>
    </div>
  </div>
`

let file = null;
const fileInput = document.querySelector('#file');
const elementButton = document.querySelector('#element');
const ctxButton = document.querySelector('#ctx');

fileInput.addEventListener('change', (e) => {
  elementButton.disabled = false;
  ctxButton.disabled = false;
  file = e.target.files[0];
});

elementButton.addEventListener('click', () => {
  const audio = document.createElement('audio');
  audio.src = URL.createObjectURL(file);
  audio.play();
  console.log(audio);
});

ctxButton.addEventListener('click', () => {
  file.arrayBuffer().then((buffer) => {
    const audioContext = new AudioContext({
      // latencyHint: "playback",
      sampleRate: 44089,
    });
    audioContext.decodeAudioData(buffer).then((audioBuffer) => {
      console.log(audioBuffer);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
    });
  });
});

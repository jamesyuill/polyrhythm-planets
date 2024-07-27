import Planet from './planet.js';

const board = document.getElementById('board');
let boxCount = 0;
let boxes = [];

document.getElementById('playbtn')?.addEventListener('click', async () => {
  await Tone.start();
  Tone.getTransport().start();
  console.log('playing loop');
});

document.getElementById('stopbtn')?.addEventListener('click', () => {
  Tone.getTransport().stop();
});

document.getElementById('plus5bpmbtn')?.addEventListener('click', () => {
  let currentBPM = Math.round(Tone.Transport.bpm.value);
  Tone.Transport.bpm.value = Math.round((currentBPM += 5));
  console.log(Tone.Transport.bpm.value);
});

document.getElementById('minus5bpmbtn')?.addEventListener('click', () => {
  Tone.Transport.bpm.value -= 5;
  console.log(Tone.Transport.bpm.value);
});

document.getElementById('plus1bpmbtn')?.addEventListener('click', () => {
  Tone.Transport.bpm.value += 1;
  console.log(Tone.Transport.bpm.value);
});

document.getElementById('minus1bpmbtn')?.addEventListener('click', () => {
  Tone.Transport.bpm.value -= 1;
  console.log(Tone.Transport.bpm.value);
});

document.getElementById('addBox')?.addEventListener('click', (e) => {
  if (boxCount < 10) {
    let box = new Planet();
    board.appendChild(box.show());
    boxCount += 1;
    boxes.push(box);
  }
});

function step() {
  window.requestAnimationFrame(step);
}

step();

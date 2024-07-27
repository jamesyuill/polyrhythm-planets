import notes from './notes.js';

class Planet {
  constructor() {
    this.note = 'C3';

    this.synthA = new Tone.FMSynth().toDestination();
    this.loopA = new Tone.Loop((time) => {
      this.synthA.triggerAttackRelease(this.note, '16n', time);
    }, '4n');
  }

  show = () => {
    const box = document.createElement('div');
    box.setAttribute('id', 'box');
    box.setAttribute('class', 'box');

    //Play Button
    const playbtn = document.createElement('button');
    playbtn.innerText = 'Play';
    playbtn.setAttribute('id', 'boxPlayBtn');
    playbtn.addEventListener('click', (e) => {
      this.play();
    });

    //Stop Button
    const stopbtn = document.createElement('button');
    stopbtn.innerText = 'Stop';
    stopbtn.setAttribute('id', 'boxStopBtn');
    stopbtn.addEventListener('click', (e) => {
      console.log('stop');
      this.stop();
    });

    //Change Note
    const changeNote = document.createElement('select');

    changeNote.setAttribute('id', 'changeNote');
    changeNote.setAttribute('name', 'changeNote');

    changeNote.addEventListener('change', (e) => {
      this.note = e.target.value;
    });

    for (let i = 0; i < notes.length; i++) {
      let option = document.createElement('option');
      option.value = notes[i];
      option.text = notes[i];
      changeNote.appendChild(option);
    }

    box.append(playbtn, stopbtn, changeNote);
    return box;
  };

  play = () => {
    this.loopA.start(0);
  };

  stop = () => {
    this.loopA.stop(0);
  };

  noteLength = () => {};
}

export default Planet;

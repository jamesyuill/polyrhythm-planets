import { notes, timings } from './notes.js';
import { player } from './player.js';

class Planet {
  constructor() {
    this.note = 'C3';
    this.timing = '4n';

    this.loopA = new Tone.Loop((time) => {
      player.start();
    }, '4n');
    // this.synthA = new Tone.MonoSynth().toDestination();
    // this.loopA = new Tone.Loop((time) => {
    //   this.synthA.triggerAttackRelease(this.note, '32n', time);
    // }, this.timing);
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

    //Note Timing
    const changeTiming = document.createElement('select');
    changeTiming.setAttribute('id', 'changeTiming');
    changeTiming.setAttribute('name', 'changeTiming');
    changeTiming.addEventListener('change', (e) => {
      this.loopA.interval = e.target.value;
    });

    for (let i = 0; i < timings.length; i++) {
      let option = document.createElement('option');
      option.value = timings[i];
      option.text = timings[i];
      changeTiming.appendChild(option);
    }

    box.append(playbtn, stopbtn, changeNote, changeTiming);
    return box;
  };

  play = () => {
    this.loopA.start(0);
  };

  stop = () => {
    this.loopA.stop(0);
  };
}

export default Planet;

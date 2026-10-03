import * as sketch from './sketch.js';
import * as sound from './sound.js';
import * as piece from './piece.js';

const pencil = (selector, size = 25) => sketch.create('pencil', selector, p => {
  p.ambientLight(192);

  p.scale(size);
  p.rotateY(Math.PI / 2);

  p.rotateX(Math.PI / 60 * Math.sin(2 * Math.PI * p.frameCount / 202));
  p.rotateY(Math.PI / 60 * Math.sin(2 * Math.PI * p.frameCount / 194));
  p.rotateZ(Math.PI / 3 * Math.sin(2 * Math.PI * p.frameCount / 203));
});

const coin = (selector, size = 25) => sketch.create('coin', selector, p => {
  p.ambientLight(160);
  p.scale(size);
  p.rotateX(5 * Math.PI / 4);
  p.rotateY(5 * Math.PI / 4);

  p.rotateX(Math.PI / 6 * Math.sin(2 * Math.PI * p.frameCount / 202));
  p.rotateY(Math.PI / 6 * Math.sin(2 * Math.PI * p.frameCount / 194));
  p.rotateZ(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 203));
});

const stick = (selector, size = 1000) => sketch.create('stick', selector, p => {
  p.scale(size);
  p.rotateX(Math.PI);
  p.rotateY(- Math.PI / 2);

  p.rotateX(Math.PI / 60 * Math.sin(2 * Math.PI * p.frameCount / 202));
  p.rotateY(Math.PI / 60 * Math.sin(2 * Math.PI * p.frameCount / 194));
  p.rotateZ(Math.PI / 10 * Math.sin(2 * Math.PI * p.frameCount / 203));
});

const rock = (selector, size = 75) => sketch.create('rock', selector, p => {
  p.ambientLight(-128);

  p.scale(size);
  p.rotateY(Math.PI / 2);

  p.rotateX(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 202));
  p.rotateY(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 194));
  p.rotateZ(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 203));
});

const bell = (selector, size = 700) => sketch.create('bell', selector, p => {
  p.ambientLight(160);

  p.scale(size);
  p.rotateZ(Math.PI);

  p.rotateX(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 202));
  p.rotateY(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 194));
  p.rotateZ(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 203));
});

const paper = (selector, size = 700) => sketch.create('paper', selector, p => {
  p.scale(size);
  p.rotateX(7 * Math.PI / 4);
  p.rotateY(3 * Math.PI / 2);
  p.rotateZ(Math.PI);

  p.rotateX(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 202));
  p.rotateY(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 194));
  p.rotateZ(Math.PI / 30 * Math.sin(2 * Math.PI * p.frameCount / 203));
});

pencil('pencil');
coin('coin');
stick('stick');
rock('rock');
bell('bell');
paper('paper');

const SAMPLE = document.querySelectorAll('.sample');
SAMPLE.forEach(button => {
  button.addEventListener('click', () => {
    button.disabled = true;
  });
});

const PENCIL = document.getElementById('pencil');
const TPENCIL = document.getElementById('tpencil');
PENCIL.addEventListener('click', () => {
  sound.play(sound.ASSETS.PENCIL);
  TPENCIL.style.left = (piece.getProgress() * 100) + '%';
  pencil('tpencil', 7.5);
});

const COIN = document.getElementById('coin');
const TCOIN = document.getElementById('tcoin');
COIN.addEventListener('click', () => {
  sound.play(sound.ASSETS.COIN);
  TCOIN.style.left = (piece.getProgress() * 100) + '%';
  coin('tcoin', 7.5);
});

const STICK = document.getElementById('stick');
const TSTICK = document.getElementById('tstick');
STICK.addEventListener('click', () => {
  sound.play(sound.ASSETS.STICK);
  TSTICK.style.left = (piece.getProgress() * 100) + '%';
  TSTICK.style.transform = 'translate(-100%, -50%)';
  stick('tstick', 400);
  piece.pause();
});

const ROCK = document.getElementById('rock');
const TROCK = document.getElementById('trock');
ROCK.addEventListener('click', () => {
  sound.play(sound.ASSETS.ROCK);
  TROCK.style.left = (piece.getProgress() * 100) + '%';
  TROCK.style.transform = 'translate(0%, -50%)';
  rock('trock', 50);
  piece.start();
});

const BELL = document.getElementById('bell');
const TBELL = document.getElementById('tbell');
BELL.addEventListener('click', () => {
  sound.play(sound.ASSETS.BELL);
  TBELL.style.left = (piece.getProgress() * 100) + '%';
  bell('tbell', 400);
});

const PAPER = document.getElementById('paper');
const TPAPER = document.getElementById('tpaper');
PAPER.addEventListener('click', () => {
  sound.play(sound.ASSETS.PAPER);
  TPAPER.style.left = (piece.getProgress() * 100) + '%';
  paper('tpaper', 400);
});

const RESET = document.getElementById('reset');
const TICON = document.querySelectorAll('.ticon');
RESET.addEventListener('click', () => {
  piece.stop();
  SAMPLE.forEach(button => {
    button.disabled = false;
  });
  TICON.forEach(icon => icon.innerHTML = '');
});

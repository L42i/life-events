export const ASSETS = Object.freeze({
  PENCIL: ['pencil', 3],
  COIN: ['coin', 5],
  STICK: ['stick', 3],
  PAPER: ['paper', 3],
  BELL: ['bell', 5],
  ROCK: ['rock', 3]
});

export const play = sound =>
  new Audio(`./assets/${ sound[0] }/${ Math.floor(Math.random() * sound[1]) + 1 }.wav`).play();

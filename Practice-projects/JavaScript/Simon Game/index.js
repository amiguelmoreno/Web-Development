"use strict";

//selecting colors buttons and audios
const yellowEl = document.querySelector(".yellow-box");
const yellowAudio = new Audio("./audios/simonSound1.mp3");
const blueEl = document.querySelector(".blue-box");
const blueAudio = new Audio("./audios/simonSound2.mp3");
const redEl = document.querySelector(".red-box");
const redAudio = new Audio("./audios/simonSound3.mp3");
const greenEl = document.querySelector(".green-box");
const greenAudio = new Audio("./audios/simonSound4.mp3");
const errorAudio = new Audio("./audios/errorSound.mp3");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const audiosEl = document.querySelectorAll(".clip");
const scoreValueEl = document.querySelector(".score-value");
const bestScoreValueEl = document.querySelector(".best-score-value");

let lightsOrder = [];
let playerLightsOrder = [];
let flash;
let turn;
let on = true;
let good;
let compTurn;
let intervalId;

startBtn.addEventListener("click", (event) => {
    play();
});

function play() {
    lightsOrder = [];
    playerLightsOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    scoreValueEl.innerHTML = 1;
    lightsOrder.push(Math.floor(Math.random() * 4) + 1);
    compTurn = true;
}

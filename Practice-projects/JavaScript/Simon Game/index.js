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

const colorsArr = [yellowEl, blueEl, redEl, greenEl];
const audioArr = [yellowAudio, blueAudio, redAudio, greenAudio];
const colorsAnimation = ["yellow", "blue", "red", "green"];
const colorsOriginal = ["#fdff8bcc", "#8f8fffcc", "#e88585cc", "#559555cc"];

let lightsOrder = [];
let playerLightsOrder = [];
let flashNumber;
let turn;
let good;
let compTurn;
let intervalId;

startBtn.addEventListener("click", play);

function play() {
    resetGame();
    startBtn.removeEventListener("click", play);

    compGame();
}

function resetGame() {
    lightsOrder = [];
    playerLightsOrder = [];
    flashNumber = 0;
    intervalId = 0;
    turn = 1;
    scoreValueEl.innerHTML = turn;
    compTurn = true;
}

function compGame() {
    const timeBtwColors = 500;
    //lightsOrder.push(Math.floor(Math.random() * 4) + 1);
    lightsOrder = [3, 1, 0, 2, 3, 0, 2];
    lightsOrder.forEach(function (color, i) {
        setTimeout(function () {
            colorsArr[el].style.backgroundColor = colorsAnimation[el];
            audioArr[el].play();
        }, i * timeBtwColors);
    });
}

function btnAnimation(el) {}

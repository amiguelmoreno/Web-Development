"use strict";

/* //selecting colors buttons and audios
const yellowEl = document.querySelector(".yellow-box");
const yellowAudio = new Audio("./audios/simonSound1.mp3");
const blueEl = document.querySelector(".blue-box");
const blueAudio = new Audio("./audios/simonSound2.mp3");
const redEl = document.querySelector(".red-box");
const redAudio = new Audio("./audios/simonSound3.mp3");
const greenEl = document.querySelector(".green-box");
const greenAudio = new Audio("./audios/simonSound4.mp3");
const errorAudio = new Audio("./audios/errorSound.mp3");

const audiosEl = document.querySelectorAll(".clip");

const bestScoreValueEl = document.querySelector(".best-score-value");

const colorsArr = [yellowEl, blueEl, redEl, greenEl];
const audioArr = [yellowAudio, blueAudio, redAudio, greenAudio];

const colorsOriginal = ["#fdff8bcc", "#8f8fffcc", "#e88585cc", "#559555cc"]; */

const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const scoreValueEl = document.querySelector(".score-value");
const soundError = new Audio(`./audios/errorSound.mp3`);
const tilesContainer = document.querySelector(".tiles-container");
const colors = ["yellow", "blue", "red", "green"];

let sequence = [];
let humanSequence = [];
let level = 0;

function resetGame() {
    sequence = [];
    humanSequence = [];
    level = 0;
    startBtn.classList.remove("hidden");
    scoreValueEl.textContent = level;
    tilesContainer.classList.add("unclickable");
}

//allow to click colors and change score
function humanTurn(level) {
    tilesContainer.classList.remove("unclickable");
    scoreValueEl.textContent = level;
}

//activate the button color and sound
function activateButton(color) {
    const button = document.querySelector(`#${color}`);
    const sound = new Audio(
        `./audios/simonSound${colors.indexOf(color) + 1}.mp3`
    );

    button.classList.add("activated");
    sound.play();

    setTimeout(() => {
        button.classList.remove("activated");
    }, 300);
}

//run over the sequence and apply the function to each button
function playRound(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateButton(color);
        }, (index + 1) * 600);
    });
}

//generate random color
function nextStep() {
    const random = colors[Math.floor(Math.random() * colors.length)];

    return random;
}

function nextRound() {
    level += 1;

    //disable buttons and updating score
    tilesContainer.classList.add("unclickable");
    scoreValueEl.textContent = level;

    //copy the old sequence and adding the new random color
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);

    //adding delay to notice the turn change and updating sequence
    sequence = [...nextSequence];
    setTimeout(() => {
        humanTurn(level);
    }, level * 600 + 1000);
}

//Disable the start button when clicked
startBtn.addEventListener("click", startGame);
tilesContainer.addEventListener("click", (event) => {
    const tile = event.target.id;
    event.target.classList.add("activated");

    setTimeout(() => {
        event.target.classList.remove("activated");
    }, 300);
    if (tile) handleClick(tile);
});

function handleClick(tile) {
    const index = humanSequence.push(tile) - 1;
    const sound = new Audio(
        `./audios/simonSound${colors.indexOf(tile) + 1}.mp3`
    );
    sound.play();

    if (humanSequence[index] !== sequence[index]) {
        soundError.play();
        resetGame();
        return;
    }

    if (humanSequence.length === sequence.length) {
        humanSequence = [];
        setTimeout(() => {
            nextRound();
        }, 1000);
        return;
    }
}

function startGame() {
    startBtn.classList.add("hidden");
    nextRound();
}

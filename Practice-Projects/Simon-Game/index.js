"use strict";

const startBtn = document.querySelector(".start");
const scoreValueEl = document.querySelector(".score-value");
const bestScoreValueEl = document.querySelector(".best-score-value");
const soundError = new Audio(`./audios/errorSound.mp3`);
const soundCorrect = new Audio(`./audios/correctSound.mp3`);
const tilesContainer = document.querySelector(".tiles-container");
const colors = ["yellow", "blue", "red", "green"];
//localStorage.setItem("Best Score", 0);

let sequence = [];
let humanSequence = [];
let level = 0;

const bestScore = localStorage.getItem("Best Score");
bestScoreValueEl.textContent = bestScore || 0;

function correctAnimation() {
    soundCorrect.play();
    document.body.style.transitionDuration = "1s";
    document.body.classList.add("correct");
    setTimeout(() => {
        document.body.classList.remove("correct");
    }, 600);
}

function errorAnimation() {
    soundError.play();
    document.body.style.transitionDuration = "1s";
    document.body.classList.add("error");
    setTimeout(() => {
        document.body.classList.remove("error");
    }, 600);
}

//checks the score and update if is bigger
function checkBestScore(level) {
    if (level > bestScore) {
        localStorage.setItem("Best Score", level);
    }
    bestScoreValueEl.textContent = localStorage.getItem("Best Score");
}

function resetGame() {
    checkBestScore(level);
    humanSequence = [];
    sequence = [];
    level = 0;
    startBtn.classList.remove("hidden");
    scoreValueEl.textContent = level;
    tilesContainer.classList.add("unclickable");
    return;
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
    }, 400);
}

//run over the sequence and apply the function to each button
function playRound(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            activateButton(color);
        }, (index + 1) * 700);
    });
}

//generate random color
function nextStep() {
    const random = colors[Math.floor(Math.random() * colors.length)];

    return random;
}

function nextRound() {
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
    }, level * 700 + 1000);
}

//Disable the start button when clicked
startBtn.addEventListener("click", startGame);
tilesContainer.addEventListener("click", (event) => {
    const tile = event.target.id;
    event.target.classList.add("activated");

    setTimeout(() => {
        event.target.classList.remove("activated");
    }, 400);
    if (tile) handleClick(tile);
});

function handleClick(tile) {
    const index = humanSequence.push(tile) - 1;
    const sound = new Audio(
        `./audios/simonSound${colors.indexOf(tile) + 1}.mp3`
    );
    sound.play();

    if (humanSequence[index] !== sequence[index]) {
        setTimeout(() => {
            errorAnimation();
            checkBestScore(level);
            resetGame();
        }, 400);
    } else if (humanSequence.length === sequence.length) {
        humanSequence = [];
        setTimeout(() => {
            correctAnimation();
        }, 400);
        setTimeout(() => {
            nextRound();
        }, 1000);
        level += 1;
        return;
    }
}

function startGame() {
    startBtn.classList.add("hidden");
    nextRound();
}

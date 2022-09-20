let score = 0;

const pickUserHand = (hand) => {
    //hide current page
    let handsEl = document.querySelector(".hands");
    handsEl.style.display = "none";

    //show the next page with the choosed option
    let contestEl = document.querySelector(".contest");

    if (window.innerWidth > 912) {
        contestEl.style.display = "flex";
    } else {
        contestEl.style.display = "grid";
    }

    //set the user pick
    document.getElementById("userPickImg").src = `./assets/${hand}.png`;

    let computerPick = pickComputerHand();

    dediceWinner(hand, computerPick);
};

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];

    let computerPick = hands[Math.floor(Math.random() * 3)];

    //set the user pick
    document.getElementById("userCompImg").src = `./assets/${computerPick}.png`;

    return computerPick;
};

const dediceWinner = (userPick, compPick) => {
    const decisions = ["YOU WIN!", "YOU LOSE!", "DRAW!"];

    if (userPick === compPick) {
        setResult(decisions[2]);
        setScore(score);
    } else if (userPick == "rock" && compPick == "paper") {
        setResult(decisions[1]);
        setScore(score);
    } else if (userPick == "rock" && compPick == "scissors") {
        setResult(decisions[0]);
        setScore(score + 1);
    } else if (userPick == "paper" && compPick == "rock") {
        setResult(decisions[0]);
        setScore(score + 1);
    } else if (userPick == "paper" && compPick == "scissors") {
        setResult(decisions[1]);
        setScore(score);
    } else if (userPick == "scissors" && compPick == "rock") {
        setResult(decisions[1]);
        setScore(score);
    } else if (userPick == "scissors" && compPick == "paper") {
        setResult(decisions[0]);
        setScore(score + 1);
    }
};

const restartGame = () => {
    let handsEl = document.querySelector(".hands");
    let contestEl = document.querySelector(".contest");

    handsEl.style.display = "flex";

    contestEl.style.display = "none";
};

const resetGame = () => {
    setScore(0);

    let handsEl = document.querySelector(".hands");

    handsEl.style.display = "flex";

    //show the next page with the choosed option
    let contestEl = document.querySelector(".contest");
    contestEl.style.display = "none";
};

const setResult = (result) => {
    let resultEl = document.querySelector(".result-title");

    resultEl.innerHTML = `${result}`;
};

const setScore = (scoreUpdated) => {
    let scoreEl = document.querySelector(".score-value");

    score = scoreUpdated;

    scoreEl.innerHTML = `${scoreUpdated}`;
};

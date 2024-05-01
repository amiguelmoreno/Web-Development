const playBtn = document.querySelector(".btn-play");
const pauseBtn = document.querySelector(".btn-pause");

// TOGGLE PLAY AND PAUSE BTN
[pauseBtn, playBtn].forEach((el) =>
    el.addEventListener("click", () => {
        playBtn.classList.toggle("hide");
        pauseBtn.classList.toggle("hide");
    })
);

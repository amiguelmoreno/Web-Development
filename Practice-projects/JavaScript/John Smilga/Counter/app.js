//Set initial counter
let count = 0;

//select buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("btn-decrease")) {
            count--;
        } else if (styles.contains("btn-increase")) {
            count++;
        } else count = 0;
        value.textContent = count;
        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else value.style.color = "black";
    });
});

"use strict";

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");

const randomFunction = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

generateBtn.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generatePassword(
        length,
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol
    );
});

clipboardBtn.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    const password = resultEl.innerText;

    if (!password) return;

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("Password copied to clipboard!");
});

function generatePassword(length, upper, lower, number, symbol) {
    let generatedPassword = "";

    const checksArr = [{ upper }, { lower }, { number }, { symbol }].filter(
        (item) => Object.values(item)[0]
    );

    if (checksArr.length === 0) return "";

    for (let i = 0; i < length; i += checksArr.length) {
        checksArr.forEach((type) => {
            const functionName = Object.keys(type)[0];
            generatedPassword += randomFunction[functionName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

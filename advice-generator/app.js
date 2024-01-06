const adiviceEL = document.getElementById("advice");
const generateBtn = document.getElementById("generate");
const adviceSpan = document.getElementById("advice-span");

function generateAdivce() {
    fetch("https://api.adviceslip.com/advice", {  cache: "no-cache"  })
        .then((response) => response.json())
        .then((response) => {
            let data = response.slip;
            let id = data.id;
            let dataAdvice = data.advice;

            adviceSpan.innerHTML = `advice # ${id}`
            adiviceEL.innerHTML = dataAdvice
        })
}

generateBtn.addEventListener("click", () => {
    generateAdivce();
})
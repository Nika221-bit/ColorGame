let score = 0;
let colors = ["red", "green", "blue", "aqua", "yellow", "pink"];

function start() {
    const colorPicker = Math.floor(Math.random() * colors.length);
    const pickedColor = colors[colorPicker];

    const mainColor = document.querySelector(".Main");
    mainColor.style.backgroundColor = pickedColor;

    const scoreBoard = document.querySelector("#score");
    const display = document.createElement("h2");
    document.querySelector(".down").appendChild(display);

    const answerButtons = document.querySelectorAll(".Answers span");
    answerButtons.forEach(function(button) {
        button.onclick = function () {
            const chosenColor = button.textContent; // ან button.style.backgroundColor
            if (chosenColor === pickedColor) {
                score++;
            } else {
                score--;
            }
            scoreBoard.textContent = "score : " + score;

            if (score > 10) {
                display.textContent = "გილოცავ შენ გაიმარჯვე!";
            } else if (score < -3) {
                display.textContent = "სამწუხაროდ შენ დამარცხდი!";
                score = 0;
                scoreBoard.textContent = "score : " + score;
            }

            start(); // თავიდან იწყებს თამაშს
        };
    });
}

document.getElementById("startBtn").addEventListener("click", function () {
    score = 0;
    document.getElementById("score").textContent = "score : 0";
    start(); // აქ უნდა იყოს start(), არა startGame()
});

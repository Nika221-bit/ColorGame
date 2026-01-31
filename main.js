

let score = 0;
let timer;

// const levelTime = 1500; 
const colors = ["red",, "green", "blue"];

function startGame() {
  clearTimeout(timer);

  const colorIndex = Math.floor(Math.random() * colors.length);
  const targetColor = colors[colorIndex];

  const colorBigBox = document.querySelector(".Main");
  colorBigBox.style.backgroundColor = targetColor;

  const scoreDisplay = document.getElementById("score");
  const messageDisplay = document.createElement("h2");
  document.querySelector(".down").appendChild(messageDisplay);

  const answerButtons = document.querySelectorAll(".Answers span");
  answerButtons.forEach(function (button) {
    button.onclick = function () {
      
      const chosenColor = this.style.backgroundColor;
      if (chosenColor === targetColor) {
        score++;
      } else {
        score--;
      }
      scoreDisplay.textContent = "score : " + score;

     
      if (score >= 4) {
        messageDisplay.textContent = "გილოცავ, მოიგე!";
      } else if (score <= -4) {
        messageDisplay.textContent = "სამწუხაროდ დამარცხდი, სცადე თავიდან";
        score = 0;
        scoreDisplay.textContent = "score : " + score;
      } else {
        startGame(); 
      }
    };
  });

  
  timer = setTimeout(function () {
    score = 0;
    
  }, levelTime);
}

// Start ღილაკი
document.getElementById("startBtn").addEventListener("click", function () {
  score = 0;
  document.getElementById("score").textContent = "score : 0";
  startGame();
});

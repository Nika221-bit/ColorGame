//index
document.getElementById("easy").addEventListener("click", function() {
  window.location.href = "easy.html";
});
document.getElementById("hardBtn").addEventListener("click", function() {
 
  window.location.href = "hard.html";
});

//easy
const maincolor = document.querySelector(".Main")
const startBtn = document.getElementById("startBtn");

function randomColor() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// მაგალითი: 5 შემთხვევითი ფერის მასივი
function generateColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}





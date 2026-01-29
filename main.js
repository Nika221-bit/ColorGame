//index
document.getElementById("easy").addEventListener("click", function() {
  
  window.location.href = "easy.html";
});
document.getElementById("hardBtn").addEventListener("click", function() {
 
  window.location.href = "hard.html";
});

//easy

const colors = ['red', 'blue', 'green']; 

function pickcolor(){
    const random = Math.floor(Math.round() * colors.length);
    return colors[random]; 
};

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

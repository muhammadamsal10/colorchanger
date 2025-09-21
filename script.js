const btn = document.getElementById("button");


// Function to generate random color
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change background color
btn.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.background = newColor;
  textContent = newColor;
});



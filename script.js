const img = document.getElementById("floating-img");
let angle = 0;

function floatImage() {
  const y = Math.sin(angle) * 10; // amplitude = 20px
  img.style.transform = `translateY(${y}px)`;
  angle += 0.03; // speed of the float
  requestAnimationFrame(floatImage);
}

floatImage();

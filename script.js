const imgs = document.querySelectorAll(".orbit img");
const radius = 170;
let angle = 0;

function animate() {
  angle += 0.003;

  imgs.forEach((img, i) => {
    const a = angle + (i / imgs.length) * Math.PI * 2;
    img.style.left = 200 + radius * Math.cos(a) - 30 + "px";
    img.style.top  = 200 + radius * Math.sin(a) - 30 + "px";
  });

  requestAnimationFrame(animate);
}

animate();

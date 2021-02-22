document.addEventListener("DOMContentLoaded", function () {
  const myCanvas = document.getElementById("mycanvas");

  myCanvas.height = 500;
  myCanvas.width = 500;
  const ctx = myCanvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.fillRect(100, 200, 400, 300);

  ctx.beginPath();
  ctx.arc(100, 200, 20, (Math.PI / 180) * 0, (Math.PI / 180) * 180, true);
  ctx.strokeStyle = "pink";
  ctx.lineWidth = 30;
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
});

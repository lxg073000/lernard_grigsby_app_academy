document.addEventListener("DOMContentLoaded", function () {
  function randomColor() {
    const colors = ["red", "pink", "orange"];
    return colors[i];
  }

  const myCanvas = document.getElementById("mycanvas");

  myCanvas.height = 500;
  myCanvas.width = 500;
  const ctx = myCanvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 500, 500);

  for (let pos = 220; pos < 500; pos += 70) {
    // ctx.fillStyle = "blue";
    // ctx.fillRect(100, pos, 300, 20);

    ctx.fillStyle = "orange";
    ctx.fillRect(500 - pos, -230 + pos, 300, 20);

    ctx.fillStyle = "pink";
    ctx.fillRect((500 % pos) / -1, -130 + pos, 300, 20);

    ctx.fillStyle = "blue";
    ctx.fillRect(pos, -40 + pos, 300, 20);
  }
  ctx.arc(250, 500, 200, (Math.PI / 180) * 0, (Math.PI / 180) * 180, true);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 50;
  ctx.stroke();
  ctx.fillStyle = "pink";
  ctx.fill();

  // for (let index = 100; index < 400; index += 50) {
  //   ctx.beginPath();
  //   ctx.arc(index, 200, 20, (Math.PI / 180) * 0, (Math.PI / 180) * 180, true);
  //   ctx.strokeStyle = "pink";
  //   ctx.lineWidth = 100;
  //   ctx.stroke();
  //   ctx.fillStyle = "red";
  //   ctx.fill();
  // }
});

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

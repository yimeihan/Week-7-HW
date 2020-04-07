const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
ctx.moveTo(centerX, centerY);
ctx.lineTo(centerX-100, centerY+100);
ctx.lineTo(centerX-100, centerY-100);
ctx.fill();
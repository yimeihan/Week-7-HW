const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.stroke();

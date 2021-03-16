
document.write ('hi there');
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var c = canvas.getContext ('2d');
c.fillStyle = 'pink';
c.fillRect (10, 10, 10, 10);





var radius = 30;
var dr = 0.3;
var x=200;
var dx=4;
var y=100;
var dy = 4;
c.strokeStyle = 'red';
function animate (){
    requestAnimationFrame (animate);
//c.clearRect(0, 0,  window.innerWidth - 100, window.innerHeight - 100);
c.beginPath();
c.arc(x, y, radius, 0, Math.PI*2, false);

c.stroke();
if (x +  radius > window.innerWidth - 100){dx = -dx; 
    c.strokeStyle = 'white';};
if (x -  radius < 0){dx = -dx; c.strokeStyle = 'blue';};
if (y +  radius > window.innerHeight - 100){dy = -dy; 
    c.strokeStyle = 'purple';};
if (y -  radius < 0){dy = -dy; c.strokeStyle = 'yellow';};
if (radius>60){dr= -dr; c.strokeStyle = 'red';};
if (radius<5){dr= -dr; c.strokeStyle = 'orange';};
x+=dx;
y+= dy;
radius += dr;
}

c.fillRect (100, 100, 100, 100);
c.stroke();

animate();
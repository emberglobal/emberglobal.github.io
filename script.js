const ball = document.getElementById('ball');

// Set initial ball position and velocity
let x = 250;
let y = 250;
let vx = 2;
let vy = 2;

// Animate the ball
function animate() {
  requestAnimationFrame(animate);

  // Update ball position
  x += vx;
  y += vy;

  // Bounce off walls
  if (x + 25 > 500 || x - 25 < 0) {
    vx = -vx;
  }
  if (y + 25 > 500 || y - 25 < 0) {
    vy = -vy;
  }

  // Update ball position
  ball.style.top = `${y}px`;
  ball.style.left = `${x}px`;
}

// Start animation
animate();

// Add event listeners for user input
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    vy = -5;
  } else if (e.key === 'ArrowDown') {
    vy = 5;
  } else if (e.key === 'ArrowLeft') {
    vx = -5;
  } else if (e.key === 'ArrowRight') {
    vx = 5;
  }
});

document.addEventListener('keyup', () => {
  vx = 2;
  vy = 2;
});
const ball = document.getElementById('ball');
const animationContainer = document.getElementById('animation-container');

// Set initial ball position and velocity
let x = animationContainer.offsetWidth / 2;
let y = animationContainer.offsetHeight / 2;
let vx = 2;
let vy = 2;

// Animate the ball
function animate() {
  requestAnimationFrame(animate);

  // Update ball position
  x += vx;
  y += vy;

  // Bounce off walls
  if (x + 25 > animationContainer.offsetWidth || x - 25 < 0) {
    vx = -vx;
  }
  if (y + 25 > animationContainer.offsetHeight || y - 25 < 0) {
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
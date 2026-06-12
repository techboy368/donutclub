/**
 * Sprinkle rain animation on the hero canvas.
 * Expects a <canvas id="sprinkles-canvas"> inside .hero.
 */
(function() {
  const canvas = document.getElementById('sprinkles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  const sprinkles = [];
  const maxSprinkles = 100;

  const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6C5CE7', '#FF9FF3', '#54A0FF', '#5F27CD'];

  class Sprinkle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.size = Math.random() * 4 + 2;
      this.speed = Math.random() * 2 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.angle = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.05;
    }
    update() {
      this.y += this.speed;
      this.angle += this.rotationSpeed;
      if (this.y > height + 10) {
        this.reset();
        this.y = -10;
      }
    }
    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  function resize() {
    width = canvas.parentElement.clientWidth;
    height = canvas.parentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;
    while (sprinkles.length < maxSprinkles) {
      sprinkles.push(new Sprinkle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    sprinkles.forEach(s => {
      s.update();
      s.draw(ctx);
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
})();

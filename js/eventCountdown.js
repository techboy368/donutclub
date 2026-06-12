/**
 * Countdown to the next event (May 15, 2025 18:00 Mountain Time).
 * Displays inside #countdown element.
 */
(function() {
  const container = document.getElementById('countdown');
  if (!container) return;

  // Target: May 15, 2025 18:00:00 Mountain Time (UTC-6)
  const targetDate = new Date('2025-05-15T18:00:00-06:00');

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      container.textContent = '🍩 The event is live now!';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    container.textContent = `⏳ Next event in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

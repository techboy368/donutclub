/**
 * Simple audio player for the donut jingle (if an <audio> element exists).
 * Creates a play/pause button if not already present.
 */
(function() {
  const audio = document.querySelector('audio');
  if (!audio) return;

  // If there's already a button with class 'audio-toggle', use it.
  const btn = document.querySelector('.audio-toggle');
  if (!btn) {
    // Create one dynamically if needed.
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn', 'btn--small', 'audio-toggle');
    newBtn.textContent = '🔊 Jingle';
    newBtn.setAttribute('aria-label', 'Play jingle');
    audio.parentNode.insertBefore(newBtn, audio);
    initButton(newBtn);
  } else {
    initButton(btn);
  }

  function initButton(button) {
    button.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        button.textContent = '🔊 Pause Jingle';
      } else {
        audio.pause();
        button.textContent = '🔊 Jingle';
      }
    });
  }
})();

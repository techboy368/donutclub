/**
 * Donut flavour gallery filtering.
 * Requires an element with id "donut-grid" and filter buttons with class "filter-btn".
 */
(function() {
  const grid = document.getElementById('donut-grid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.donut-card');
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
          return;
        }

        const glaze = card.dataset.glaze;
        const filling = card.dataset.filling;

        const match =
          glaze.includes(filter) ||
          filling.includes(filter);

        card.style.display = match ? '' : 'none';
      });
    });
  });
})();

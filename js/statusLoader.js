/**
 * Loads service statuses from /data/statuses.json and populates the status table.
 * If the table already has rows, it replaces them.
 */
(function() {
  const container = document.getElementById('status-container');
  if (!container) return;

  const table = container.querySelector('table tbody');
  if (!table) return;

  fetch('/data/statuses.json')
    .then(res => res.json())
    .then(statuses => {
      table.innerHTML = '';
      statuses.forEach(s => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${s.name}</td>
          <td><span class="status-dot ${s.status === 'Good' ? 'good' : 'down'}"></span> ${s.status}</td>
          <td><a href="${s.url}" target="_blank" rel="noopener">Open</a></td>
        `;
        table.appendChild(row);
      });
    })
    .catch(err => {
      console.warn('Could not load statuses.json – using static content.', err);
    });
})();

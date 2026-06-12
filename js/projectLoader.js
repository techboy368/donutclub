/**
 * Dynamically loads projects from /data/projects.json and renders them into #dynamic-projects.
 * Falls back gracefully if the element doesn't exist.
 */
(function() {
  const container = document.getElementById('dynamic-projects');
  if (!container) return;

  fetch('/data/projects.json')
    .then(res => res.json())
    .then(projects => {
      container.innerHTML = '';
      projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-item');

        const thumb = document.createElement('div');
        thumb.classList.add('project-item__thumb');
        thumb.style.background = project.color || '#e91e63';
        thumb.textContent = project.name.split(' ')[0]; // first word as fallback text

        const title = document.createElement('h3');
        title.textContent = project.name;

        const desc = document.createElement('p');
        desc.textContent = project.description;

        const btn = document.createElement('a');
        btn.classList.add('btn');
        btn.href = project.url;
        btn.target = '_blank';
        btn.rel = 'noopener';
        btn.textContent = 'Visit Project →';

        card.appendChild(thumb);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(btn);
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.warn('Could not load projects.json – using static content.', err);
    });
})();

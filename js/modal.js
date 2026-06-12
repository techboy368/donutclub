/**
 * Lightbox for gallery images.
 * Requires a #lightbox element and gallery-item images.
 */
(function() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
})();

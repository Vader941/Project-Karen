// Minimal JS for Karen's Photography Portfolio
// TODO: Replace with real lightbox implementation

document.addEventListener('DOMContentLoaded', function () {
  // Simple lightbox proof of concept
  document.querySelectorAll('.lightbox').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const imgSrc = el.getAttribute('href');
      const lightboxOverlay = document.createElement('div');
      lightboxOverlay.style.position = 'fixed';
      lightboxOverlay.style.top = 0;
      lightboxOverlay.style.left = 0;
      lightboxOverlay.style.width = '100vw';
      lightboxOverlay.style.height = '100vh';
      lightboxOverlay.style.background = 'rgba(0,0,0,0.8)';
      lightboxOverlay.style.display = 'flex';
      lightboxOverlay.style.alignItems = 'center';
      lightboxOverlay.style.justifyContent = 'center';
      lightboxOverlay.style.zIndex = 1000;
      lightboxOverlay.innerHTML = `<img src='${imgSrc}' alt='' style='max-width:90vw;max-height:90vh;border-radius:8px;'>`;
      document.body.appendChild(lightboxOverlay);
      lightboxOverlay.addEventListener('click', function () {
        document.body.removeChild(lightboxOverlay);
      });
      // Keyboard navigation
      document.addEventListener('keydown', function handler(e) {
        if (e.key === 'Escape') {
          document.body.removeChild(lightboxOverlay);
          document.removeEventListener('keydown', handler);
        }
      });
    });
  });
  // TODO: Add mobile nav toggle if needed
});

// Small helper for AI-dev Sunlit Editorial theme
// Provides a non-destructive shuffle for gallery items
document.addEventListener('DOMContentLoaded', () => {
  const shuffleBtn = document.getElementById('shuffleBtn');
  const grid = document.getElementById('eventsGrid');
  if (!shuffleBtn || !grid) return;
  shuffleBtn.addEventListener('click', () => {
    const items = Array.from(grid.children);
    // Fisher-Yates shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      grid.insertBefore(items[j], items[i]);
      // refresh array
      items.splice(i, 1);
    }
  });
});

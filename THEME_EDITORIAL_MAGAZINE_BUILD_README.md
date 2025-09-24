# Theme Build Guide — Editorial / Magazine

**Goal:** Apply an editorial, magazine-inspired style with a strong emphasis on typography and storytelling.  
**Branch:** `theme/editorial-magazine`  
**Scope:** Typography (serif for headings), monochrome palette with accent, larger margins, editorial card style.

---

## Design Direction

- **Vibe:** Modern magazine, stylish and narrative-driven.
- **Fonts:** Playfair Display (serif) for headings, Inter (sans-serif) for body.
- **Colors:** White/ivory background, dark charcoal text, muted gold accent.
- **Layout:** More whitespace, wider margins, card-style galleries with captions.
- **Motion:** Subtle fade/slide for gallery hovers.

---

## Tokens & Rules

```css
:root {
  --bg: #fafafa;
  --text: #111111;
  --muted-text: #555555;
  --accent: #b58900;          /* muted gold */
  --accent-600: #936000;
  --border: #e0e0e0;
  --card: #ffffff;

  --font-sans: "Inter", system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;
}
h1, h2, h3 { font-family: var(--font-serif); letter-spacing: .3px; }
p { font-size: 1.05rem; line-height: 1.7; }

.button, button, input[type="submit"] {
  background: var(--accent);
  border-color: var(--accent);
  border-radius: 6px;
}
```

### Gallery style
- Gallery thumbnails in cards with subtle shadows.  
- Captions underneath images.  

```css
.gallery a {
  display: block;
  text-align: center;
}
.gallery figcaption {
  margin-top: .5rem;
  font-size: .9rem;
  color: var(--muted-text);
}
```

---

## Acceptance Criteria

- Serif headings, sans body text.  
- Gallery shows captions.  
- Accent color applied consistently.  
- Layout breathes with whitespace.  

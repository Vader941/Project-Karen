# Scaffold Instructions for `main` Branch 🏗️

This document provides step-by-step instructions for building the **base scaffold** of Karen’s Photography Portfolio site.  
The goal is to create a lightweight, professional starting point that all theme branches can build on.  
Keep it clean, modular, and minimal — no bells and whistles yet.

---

## Requirements ✅
- Static, responsive site (no backend).
- HTML5 + CSS (lightweight framework OK, e.g., Pico.css or similar).
- Vanilla JavaScript only for gallery interactivity (lightbox).
- Directory structure that supports multiple gallery categories.
- Accessible, semantic markup (alt text, labels, keyboard navigation).
- Easy to host on GitHub Pages or Netlify.

---

## Directory Structure 📂
Create the following scaffold:

```
/ (root)
│── index.html
│── about.html
│── contact.html
│── /galleries
│    ├── weddings.html
│    ├── portraits.html
│    ├── family.html
│    └── events.html
│── /css
│    └── style.css        # custom styles (extend framework if needed)
│── /js
│    └── main.js          # basic scripts
│── /images
│    ├── weddings/
│    ├── portraits/
│    ├── family/
│    └── events/
│── /assets
│    └── logo-placeholder.png
```

---

## Page Scaffolding 📝

### `index.html`
- Hero section with placeholder image/logo + tagline.
- Navigation bar linking to Home, Galleries, About, Contact.
- “Featured Work” grid linking to each gallery category.
- Footer with placeholder social links.

### `about.html`
- Placeholder headshot image.
- Biography text block (2–3 paragraphs lorem ipsum).
- Section for testimonials (placeholder cards).

### `contact.html`
- Contact form (Name, Email, Message).
- Placeholder for future form backend (e.g., Formspree/Netlify).
- Basic contact info block (email/phone placeholders).

### `galleries/*.html`
- Grid of placeholder thumbnails (6–12).
- Lightbox/PhotoSwipe setup for enlarged viewing.
- Category title + short description.

---

## Styling 🎨
- Import Pico.css (via CDN) for baseline styling.
- Add `/css/style.css` for overrides (colors, spacing, fonts).
- Keep layout mobile-first and responsive.
- Use clean typography: system fonts or simple Google Fonts (e.g., Inter, Playfair Display).

---

## JavaScript ⚡
- `/js/main.js` should:
  - Initialize the lightbox/gallery library.
  - Handle mobile nav toggle (if needed).
- Keep JS minimal — no frameworks.

---

## Footer (shared across all pages) 🔗
- Placeholder copyright text.
- Social link placeholders (Instagram, Facebook, Email).
- Consistent across all pages.

---

## Deliverables 🎯
1. Generate all HTML pages with semantic scaffolding and placeholder content.
2. Link navigation across all pages.
3. Add placeholder images in `/images/{category}`.
4. Include a working lightbox gallery on at least one category page as proof of concept.
5. Ensure mobile responsiveness.

---

## Notes for Copilot 🤖
- Use semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`).
- Keep classes minimal — leverage Pico.css defaults.
- Insert TODO comments where real text/images will go.
- Maintain consistent nav/footer across all pages.
- Provide clean, commented code for easy theme swapping later.

# Momo — A Minimal Hugo Theme for Tech Blogs

A clean, fast, and opinionated Hugo theme built for developers who want a beautiful blog without the bloat. Light/dark mode, syntax highlighting, callout shortcodes, and responsive design — all out of the box.

---

## Features

- **Light & Dark Mode** — automatic system preference detection with manual toggle, persisted via `localStorage`
- **Syntax Highlighting** — dual-theme Chroma CSS with automatic light/dark switching
- **4 Callout Shortcodes** — `info`, `warning`, `danger`, `tip` with Markdown support inside
- **Responsive Design** — looks great on phones, tablets, and desktops
- **Blog Section** — list and single post templates with tags, categories, and dates
- **Home Page** — bio, profile image, and social links
- **CSS Custom Properties** — easy color customization without touching theme internals
- **Zero JavaScript Frameworks** — vanilla JS, fast page loads

---

## Quick Start

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) **v0.110.0** or later

Verify your installation:

```bash
hugo version
```

### Installation

Clone this repository:

```bash
git clone https://github.com/yourusername/momo-new-v2.git my-blog
cd my-blog
```

The theme is already set up in `themes/momo/` and configured in `hugo.toml`. No submodule or separate install needed.

### Configuration

Open `hugo.toml` and customize these fields:

```toml
baseURL = "https://yourdomain.com/"
title = "My Tech Blog"

[params]
  author = "Your Name"
  description = "A tech blog about programming and software development"
  bio = "Software developer passionate about building things with code."
  profileImage = "/images/profile.jpg"

  [params.social]
    github = "https://github.com/yourusername"
    twitter = "https://twitter.com/yourusername"
    linkedin = "https://linkedin.com/in/yourusername"
    email = "your@email.com"
```

### Running Locally

```bash
hugo server --buildDrafts
```

Visit [http://localhost:1313](http://localhost:1313) to see your site. Hugo will live-reload on every change.

---

## Creating Content

### New Blog Post

```bash
hugo new content blog/my-new-post.md
```

This creates `content/blog/my-new-post.md` using the archetype template with frontmatter pre-filled.

### Frontmatter Reference

Every blog post starts with YAML frontmatter:

```yaml
---
title: "My New Post"
date: 2025-01-15
description: "A short summary for SEO and post previews"
tags: ["go", "tutorial"]
categories: ["programming"]
draft: false
---
```

| Field         | Type       | Required | Description                                      |
|---------------|------------|----------|--------------------------------------------------|
| `title`       | string     | yes      | The post title                                   |
| `date`        | date       | yes      | Publication date (`YYYY-MM-DD`)                  |
| `description` | string     | no       | Short summary for previews and meta tags         |
| `tags`        | list       | no       | Tags for the post (e.g., `["go", "docker"]`)     |
| `categories`  | list       | no       | Categories (e.g., `["programming"]`)             |
| `draft`       | boolean    | no       | Set to `true` to hide from production builds     |

> **Tip:** Posts with `draft: true` only appear when running `hugo server --buildDrafts`.

---

## Shortcodes

Momo includes four callout shortcodes for highlighting content. All support **full Markdown** inside.

### Info

```markdown
{{</* info */>}}
This function requires Go 1.21 or later.
{{</* /info */>}}
```

### Warning

```markdown
{{</* warning */>}}
This will overwrite your existing configuration. **Back up first.**
{{</* /warning */>}}
```

### Danger

```markdown
{{</* danger */>}}
Never commit API keys to version control.
{{</* /danger */>}}
```

### Tip

```markdown
{{</* tip */>}}
Use `go run .` instead of building a binary during development.
{{</* /tip */>}}
```

---

## Customization

### Profile & Social Links

Edit the `[params]` and `[params.social]` sections in `hugo.toml`:

```toml
[params]
  author = "Jane Doe"
  bio = "Backend engineer. Open source contributor. Coffee enthusiast."
  profileImage = "/images/profile.jpg"

  [params.social]
    github = "https://github.com/janedoe"
    twitter = "https://twitter.com/janedoe"
    linkedin = "https://linkedin.com/in/janedoe"
    email = "jane@example.com"
```

Remove any social line you don't need — the theme only renders links that are set.

### Profile Image

The default profile image is at `static/images/profile.svg`. To use your own:

1. Place your image in `static/images/` (e.g., `static/images/profile.jpg`)
2. Update `hugo.toml`:

```toml
[params]
  profileImage = "/images/profile.jpg"
```

### Light/Dark Mode

Works automatically:

- **Default:** matches the visitor's system preference (`prefers-color-scheme`)
- **Manual toggle:** click the sun/moon icon in the header
- **Persisted:** the chosen theme is saved in `localStorage` and restored on every visit

No configuration needed.

### Syntax Highlighting

Fenced code blocks work out of the box:

````markdown
```python
def hello():
    print("Hello, world!")
```
````

The theme uses Hugo's Chroma highlighter with **CSS classes** (`noClasses = false`), which means syntax colors automatically switch between light and dark themes. The dual-theme styles live in `themes/momo/static/css/syntax.css`.

### Custom CSS — Color Overrides

All colors are defined as CSS custom properties. To customize the look, override the variables in your own stylesheet or edit `themes/momo/static/css/style.css` directly:

```css
/* Light theme overrides */
:root,
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #1a1a2e;
  --accent: #0066cc;
  --accent-hover: #0052a3;
  --border: #dee2e6;
}

/* Dark theme overrides */
[data-theme="dark"] {
  --bg-primary: #1a1a2e;
  --bg-secondary: #16213e;
  --text-primary: #e6e6e6;
  --accent: #4dabf7;
  --accent-hover: #74c0fc;
  --border: #2c2c54;
}
```

The full list of available custom properties is at the top of `themes/momo/static/css/style.css`.

---

## Building for Production

```bash
hugo --minify
```

The generated site is output to the `public/` directory, ready to deploy to any static hosting provider (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

---

## Project Structure

```
.
├── archetypes/
│   └── default.md              # Template for new posts
├── content/
│   └── blog/                   # Blog posts go here
│       ├── _index.md
│       └── *.md
├── static/
│   └── images/
│       └── profile.svg         # Default profile image
├── hugo.toml                   # Site configuration
└── themes/
    └── momo/
        ├── layouts/
        │   ├── index.html              # Home page
        │   ├── _default/
        │   │   └── baseof.html         # Base template
        │   ├── blog/
        │   │   ├── list.html           # Blog listing page
        │   │   └── single.html         # Individual blog post
        │   ├── partials/
        │   │   ├── head.html           # <head> meta & styles
        │   │   ├── header.html         # Site header & nav
        │   │   └── footer.html         # Site footer
        │   └── shortcodes/
        │       ├── info.html
        │       ├── warning.html
        │       ├── danger.html
        │       └── tip.html
        ├── static/
        │   ├── css/
        │   │   ├── style.css           # Main stylesheet (CSS vars)
        │   │   └── syntax.css          # Dual-theme syntax highlighting
        │   ├── js/
        │   │   └── theme.js            # Dark/light mode toggle
        │   └── images/
        └── theme.toml                  # Theme metadata
```

---

## License

[MIT](LICENSE)

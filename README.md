# artificery.io

Website for artificery.io - tools for Foundry VTT and tabletop gaming.

## Development

```bash
npm install
npm run dev     # Start dev server at localhost:5173
npm run build   # Production build to /dist
```

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── Layout.tsx    # Header, footer, navigation
│   ├── BrandName.tsx # Styled "artificery.io" text
│   ├── GuideLayout.tsx
│   └── mdx/          # MDX component overrides
├── pages/            # Route pages
│   ├── Home.tsx
│   ├── Guides.tsx    # Guide index
│   ├── Guide.tsx     # Single guide renderer
│   └── ...
└── utils/

content/
└── guides/           # MDX guide files
    ├── foundry/      # Foundry VTT guides
    └── infrastructure/

public/               # Static assets (logos)
```

## Writing Guides

Guides are written in MDX (Markdown + React components) and automatically appear on the site.

### 1. Create a file

```
content/guides/<category>/<slug>.mdx
```

Categories: `foundry`, `infrastructure` (add more in `src/utils/guides.ts`)

### 2. Add frontmatter

```mdx
---
title: "Your Guide Title"
description: "Short description for the index"
category: "foundry"
date: "2024-12-05"
---

Your content here...
```

### 3. Write content

Standard Markdown plus:

**Code blocks with syntax highlighting:**
```bash
ssh root@server
```

**Callouts:**
```mdx
<Callout type="info">
  Helpful information
</Callout>

<Callout type="warning">
  Be careful!
</Callout>

<Callout type="success">
  You did it!
</Callout>

<Callout type="error">
  Something went wrong
</Callout>
```

### 4. Build & deploy

```bash
npm run build
```

Guides are compiled at build time - no runtime content loading.

# Medspa Serenity Shopify Theme

A customizable, neutral-toned Shopify theme designed for medspa, aesthetic, and wellness brands. The layout emphasizes calm typography, soft palettes, and flexible content sections tailored to service-focused storefronts.

## Key features

- **Neutral visual system** &mdash; adjustable color tokens for backgrounds, borders, and accents keep the experience soothing and on-brand.
- **Typography controls** &mdash; choose heading and body fonts directly from the theme editor.
- **Booking-forward header** &mdash; configurable CTA button, tagline, search, and quick access to account/cart links.
- **Homepage sections** &mdash; hero banner, feature tiles, featured collection, testimonials, and newsletter capture ready for drag-and-drop ordering.
- **Rich templates** &mdash; dedicated layouts for collections, products, pages, blog posts, and search results.
- **Mobile navigation** &mdash; responsive menu drawer with accessible controls.

## File structure

```
assets/          Theme CSS and JavaScript
config/          Theme settings and defaults
layout/          Global HTML wrappers
locales/         Theme copy and translations
sections/        Modular sections used across templates
snippets/        Reusable fragments (icons, cards, pagination)
templates/       JSON templates for Online Store 2.0
```

## Getting started

1. Install the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) and log in to your store.
2. From the repository root, run `shopify theme serve` to start a local dev server.
3. Customize the theme within the Shopify editor:
   - Update brand fonts and colors in **Theme settings**.
   - Swap imagery, copy, and CTAs in the homepage sections.
   - Connect collections to the featured product grid.

Deploy the theme with `shopify theme push` once you're satisfied with the configuration.

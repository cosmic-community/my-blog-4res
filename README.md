# Savor Restaurant

![App Preview](https://imgix.cosmicjs.com/14f8f310-4e6c-11f1-8004-49554e815733-autopilot-photo-1414235077428-338989a2e8c0-1778636154040.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive restaurant website built with Next.js 16 and Cosmic CMS. Showcases your menu by category, location details with hours, and reservation information.

## Features

- 🍽️ Dynamic menu with items grouped by category
- 📍 Multi-location support with maps, hours, and contact info
- 📅 Reservation information page with booking integration
- 🎨 Beautiful, modern responsive design
- ⚡ Server-side rendering for fast page loads
- 🖼️ Optimized images via imgix
- 🏷️ Dietary tags (Vegan, GF, etc.) for menu items
- 📱 Mobile-first responsive layouts

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a03d52bb4bc78a77bbd9079&clone_repository=6a03d614b4bc78a77bbd90c0)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A restaurant site with menu items grouped by category, hours, locations, and reservation info"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: menu-categories, menu-items, locations, reservation-info. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A restaurant site with menu items grouped by category, hours, locations, and reservation info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Headless CMS integration
- **Bun** - Fast package manager and runtime

## Getting Started

### Prerequisites
- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- A Cosmic account with the required content model

### Installation

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Cosmic SDK Examples

```typescript
// Fetch menu categories with items
const categories = await cosmic.objects
  .find({ type: 'menu-categories' })
  .depth(1)

// Fetch menu items by category
const items = await cosmic.objects
  .find({ type: 'menu-items', 'metadata.category': categoryId })
  .depth(1)
```

## Cosmic CMS Integration

This app uses the following object types from your Cosmic bucket:
- **menu-categories** - Categories for organizing menu items
- **menu-items** - Individual dishes with prices and images
- **locations** - Restaurant locations with hours and contact info
- **reservation-info** - Reservation details and booking links

## Deployment Options

Deploy easily to Vercel or Netlify. Set the following environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->
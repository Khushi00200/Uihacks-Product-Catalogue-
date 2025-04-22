# ETHEREAL COLLECTION - Premium Product Catalog

A sleek, modern e-commerce product catalog built with Next.js, featuring smooth horizontal scrolling, atmospheric effects, and seamless page transitions.

## Features

- **Horizontal Scrolling Carousel**: Smooth product browsing with Swiper.js
- **Atmospheric Effects**: Premium visual experience with CSS-based lighting and smoke effects
- **Seamless Page Transitions**: Fluid navigation using Framer Motion
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Smooth animations and transitions
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS

## Character Models

The catalog features a collection of unique character models:

- Tralalero Tralala
- Bombardiro Crocodilo
- Brr Brr Patapim
- Lirili Ralila
- Bobrinni Cococosinni
- Boneca Ambalabu
- Cappucino Assasino
- Spaghetti Tualetti

## Tech Stack

- **Framework**: Next.js 15.3.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Carousel**: Swiper.js
- **State Management**: Zustand
- **Analytics**: Vercel Analytics
- **Fonts**: Google Fonts (Geist, Orbitron)

## Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Khushi00200/Uihacks-Product-Catalogue-.git
cd Uihacks-Product-Catalogue-

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/            # Static assets
│   └── images/        # Product images and textures
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   │   ├── home/      # Homepage components
│   │   ├── layout/    # Layout components
│   │   ├── product/   # Product detail components
│   │   └── ui/        # Reusable UI components
│   ├── lib/           # Utilities and data
│   └── styles/        # Global styles
├── next.config.js     # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Key Features Implementation

### Atmospheric Effects

The project uses CSS-based lighting and smoke effects to create a premium atmosphere:

- Top-down lighting with radial gradients
- Animated smoke/fog textures
- Proper z-index layering (Background → Effect → Image → Text)

### Smooth Transitions

Page transitions are implemented using Framer Motion's AnimatePresence:

- Seamless navigation between pages
- Smooth opacity transitions
- No visible page reloads

### Horizontal Scrolling

The product carousel is built with Swiper.js:

- Smooth horizontal scrolling
- Touch/swipe support
- Keyboard navigation
- Focus on active slide with scale/opacity transitions

## Deployment

This project is ready to be deployed on Vercel:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from premium fashion websites
- Next.js team for the amazing framework
- Vercel for hosting and deployment

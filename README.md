# High International Standard School Website

This is the official website for High International Standard School (HISS), a private educational institution in Accra, Ghana dedicated to providing transformational educational opportunities for all students.

## 🚀 Features

- Highly animated and responsive website built with modern web technologies
- Interactive UI components showcasing the school's facilities, programs, and values
- Comprehensive information about admissions, academics, and school policies
- Mobile-friendly design that works across all devices

## 🛠️ Technologies Used

- **React 18** with **TypeScript** for type safety
- **Vite** for fast development and optimized builds
- **React Router** for navigation
- **Framer Motion** for sophisticated animations
- **TailwindCSS** for styling
- **React Icons** for iconography
- **React Intersection Observer** for scroll-based animations
- **React Hook Form** for form handling

## 📂 Project Structure

The project follows a modular architecture with the following structure:

```
src/
├── assets/              # Static assets like images, fonts, etc.
│   ├── images/         
│   ├── fonts/
│   └── videos/
├── components/          # Reusable UI components
│   ├── common/          # Common components used across pages
│   ├── home/           # Components specific to the home page
│   ├── about/          # Components for the about page
│   ├── academics/      # Components for the academics page
│   ├── admissions/     # Components for the admissions page
│   ├── gallery/        # Components for the gallery page
│   └── contact/        # Components for the contact page
├── pages/              # Route components (page containers)
├── layouts/            # Layout components for different sections
├── hooks/              # Custom React hooks
├── context/           # React context for shared state
├── animations/        # Animation utilities and configurations
├── utils/             # Utility functions
├── styles/            # Global styles and themes
├── types/             # TypeScript type definitions
├── constants/         # Constants and configuration
├── App.tsx           # Main App component
├── index.tsx         # Application entry point
└── routes.tsx        # Application routes
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hiss-school/website.git
cd hiss-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔨 Build for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## 🧪 Testing

```bash
npm run test
# or
yarn test
```

## 🌐 Deployment

The site can be deployed on any static hosting service like Netlify, Vercel, or GitHub Pages.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect Netlify to your GitHub repository
3. Configure the build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `dist`

## 📋 Content Management

Website content can be updated by modifying the files in the following directories:

- `src/constants/content.ts` - For textual content and configuration
- `src/assets/images/` - For images and media

## 🧠 Animation Framework

The website uses a custom animation framework built on top of Framer Motion. Key animation components include:

- `AnimatedSection` - For animating sections as they enter the viewport
- `StaggeredAnimation` - For creating staggered animations for lists of items
- Custom page transitions using React Router and Framer Motion

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and owned by High International Standard School.

## 📧 Contact

For any inquiries, please contact:
- Email: high_international@yahoo.com
- Phone: 024-234-3408
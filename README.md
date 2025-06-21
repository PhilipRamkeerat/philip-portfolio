# 🚀 Philip Ramkeerat - Senior Angular Developer Portfolio

A modern, professional portfolio built with Angular 20, showcasing Philip Ramkeerat's experience and skills as a Senior Angular Developer. Features a responsive design with dark/light theme support and internationalization.

## ✨ Features

- **Modern Angular 20**: Built with the latest Angular framework and standalone components
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Theme Switching**: Dark and light theme support with persistent preferences
- **Internationalization**: Full English and Portuguese language support
- **SSR Ready**: Server-side rendering configuration for better SEO
- **Performance Optimized**: Fast loading with optimized assets and code splitting
- **Accessibility**: Following WCAG guidelines and best practices
- **Smooth Animations**: AOS (Animate On Scroll) integration for engaging interactions
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 📸 Screenshots

### Dark Theme
![Portfolio Dark Theme](public/1.png)

### Light Theme
![Portfolio Light Theme](public/1-light-mode.png)

## 🛠️ Technology Stack

### Core Framework
- **Angular 20**: Latest version with standalone components
- **TypeScript**: Type-safe development
- **SCSS**: Advanced styling with CSS custom properties
- **RxJS**: Reactive programming patterns

### Libraries & Tools
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **Font Awesome**: Icon library
- **Express**: Server-side rendering support

### Design System
- **Custom CSS Variables**: Consistent theming system
- **Inter & Source Code Pro**: Modern typography
- **Neumorphic Design**: Soft UI elements with shadows
- **Grid & Flexbox**: Modern layout techniques

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/          # Hero section with code showcase
│   │   ├── about/         # Personal information and education
│   │   ├── skills/        # Technical skills and expertise
│   │   ├── experience/    # Professional experience timeline
│   │   ├── contact/       # Contact form and information
│   │   └── mobile-menu/   # Mobile navigation component
│   ├── services/
│   │   ├── language.service.ts    # Internationalization service
│   │   └── theme.service.ts       # Theme management service
│   ├── app.component.ts   # Main application component
│   ├── app.routes.ts      # Angular routing configuration
│   ├── app.config.ts      # Application configuration
│   └── app.scss          # Global styles and design system
├── index.html            # Main HTML template with SEO meta tags
├── main.ts              # Application entry point
├── main.server.ts       # SSR entry point
└── server.ts            # Express server for SSR
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Package manager

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/your-username/philip-portfolio.git

# Navigate to project directory
cd philip-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:4200`

### Build Commands

```bash
# Development build
npm run build

# Production build
npm run build --configuration production

# Watch mode for development
npm run watch

# Run tests
npm test

# SSR development server
npm run serve:ssr:philip-portfolio
```

## 🎨 Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#f59e0b` (Amber)
- **Success**: `#10b981` (Emerald)
- **Error**: `#ef4444` (Red)

### Typography
- **Primary Font**: Inter (UI elements)
- **Code Font**: Source Code Pro (code snippets)
- **Display Font**: Inter (headings)

### Spacing System
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **XXL**: 3rem (48px)

## 🌐 Internationalization

The portfolio supports multiple languages:
- **English (en)**: Default language
- **Portuguese (pt)**: Brazilian Portuguese

Language switching is available through the navigation menu and persists across sessions.

## 🎯 Key Features

### Home Section
- Hero section with animated code showcase
- Professional introduction with statistics
- Interactive TypeScript interface display
- Call-to-action buttons

### About Section
- Personal background and education
- Professional values and principles
- Educational timeline (Uninorte, UFPA)
- Core competencies overview

### Skills Section
- Comprehensive technical skill categories:
  - Frontend Core (Angular, TypeScript, JavaScript)
  - Styling & UI (SCSS, Material Design, Bootstrap)
  - State Management (RxJS, NgRx, Angular Signals)
  - Testing (Jest, Karma, Cypress, Storybook)
  - Performance & SEO (SSR, optimization, analytics)
  - Tools & DevOps (Git, CI/CD, cloud platforms)

### Experience Section
- Professional timeline with detailed roles
- Technology stack for each position
- Key responsibilities and achievements

### Contact Section
- Multiple contact methods (email, LinkedIn, GitHub)
- Professional availability status
- Location information
- Direct action buttons

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Up to 767px

## 🔧 Configuration

### Environment Setup
The application uses Angular's built-in configuration system with:
- Development and production configurations
- SSR support for better SEO
- Asset optimization and bundling

### Theme Configuration
Themes are managed through CSS custom properties and can be easily extended by modifying the `app.scss` file.

## 📊 Performance Features

- **Lazy Loading**: Route-based code splitting
- **Optimized Assets**: Compressed images and fonts
- **CSS Optimization**: Purged unused styles in production
- **Bundle Analysis**: Built-in webpack bundle analyzer
- **Caching Strategy**: Optimized for CDN delivery

## 🔍 SEO & Accessibility

### SEO Features
- Meta tags for all major search engines
- Open Graph tags for social media
- Twitter Card support
- Structured data (Schema.org)
- Sitemap generation ready

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management

## 🧪 Testing

```bash
# Unit tests
npm test

# E2E tests (if configured)
npm run e2e

# Test coverage
npm run test:coverage
```

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build for production
npm run build

# Deploy dist/ folder
```

### Other Platforms
The application is compatible with any static hosting service that supports Angular applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Philip Ramkeerat** is a Senior Angular Developer with over 8 years of experience in frontend development. Currently working at GFT Brazil on strategic projects for major retail chains.

### Contact Information
- **Email**: philip.ramkeerat@example.com
- **LinkedIn**: [linkedin.com/in/philip-ramkeerat](https://linkedin.com/in/philip-ramkeerat)
- **GitHub**: [github.com/philip-ramkeerat](https://github.com/philip-ramkeerat)
- **Portfolio**: [philip-ramkeerat.dev](https://philip-ramkeerat.dev)

---

⭐ If you find this project helpful, please consider giving it a star!

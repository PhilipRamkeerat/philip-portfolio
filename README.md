# 🚀 Philip Ramkeerat - Senior Angular Developer Portfolio

A modern, professional portfolio built with **Angular 20** and **standalone components**, showcasing Philip Ramkeerat's experience and skills as a Senior Angular Developer. Features a responsive design with dark/light theme support, internationalization (English/Portuguese), and server-side rendering capabilities.

## 📸 Screenshots

### Dark Theme
![Portfolio Dark Theme](public/1.png)

### Light Theme
![Portfolio Light Theme](public/1-light-mode.png)

## ✨ Features

- **Modern Angular 20**: Built with the latest Angular framework using standalone components
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Theme Switching**: Dark and light theme support with persistent preferences using Angular Signals
- **Internationalization**: Full English and Portuguese language support with reactive translations
- **SSR Ready**: Server-side rendering configuration for better SEO and performance
- **Performance Optimized**: Fast loading with optimized assets and code splitting
- **Accessibility**: WCAG 2.1 AA compliance with keyboard navigation and screen reader support
- **Smooth Animations**: AOS (Animate On Scroll) integration for engaging interactions
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **Modern UI/UX**: Neumorphic design with soft shadows and modern typography

## 🛠️ Technology Stack

### Core Framework
- **Angular 20**: Latest version with standalone components and modern APIs
- **TypeScript 5.8**: Type-safe development with strict configuration
- **SCSS**: Advanced styling with CSS custom properties and design system
- **RxJS 7.8**: Reactive programming patterns and state management

### Libraries & Tools
- **AOS (Animate On Scroll)**: Scroll-triggered animations for enhanced UX
- **Font Awesome 6.5**: Comprehensive icon library
- **Express 5.1**: Server-side rendering support
- **Angular SSR**: Built-in server-side rendering capabilities

### Design System
- **CSS Custom Properties**: Dynamic theming system with dark/light mode support
- **Inter & Source Code Pro**: Modern typography for UI and code elements
- **Neumorphic Design**: Soft UI elements with sophisticated shadow system
- **Grid & Flexbox**: Modern layout techniques with responsive breakpoints

## 🏗️ Architecture

### Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── home/          # Hero section with interactive code showcase
│   │   ├── about/         # Personal information and education timeline
│   │   ├── skills/        # Technical skills with proficiency indicators
│   │   ├── experience/    # Professional experience timeline
│   │   ├── contact/       # Contact information and availability
│   │   ├── mobile-menu/   # Mobile navigation with language switcher
│   │   └── theme-toggle/  # Theme switching component
│   ├── services/
│   │   ├── language.service.ts    # Internationalization with reactive translations
│   │   └── theme.service.ts       # Theme management using Angular Signals
│   ├── app.component.ts   # Main application component with navigation
│   ├── app.routes.ts      # Angular routing configuration
│   ├── app.config.ts      # Application configuration and providers
│   └── app.scss          # Global styles and design system
├── index.html            # Main HTML template with comprehensive SEO meta tags
├── main.ts              # Application entry point
├── main.server.ts       # SSR entry point
└── server.ts            # Express server for SSR
```

### Component Architecture
- **Standalone Components**: All components use Angular's standalone architecture
- **Reactive Services**: Language and theme services use RxJS and Angular Signals
- **Template-Driven**: Components use inline templates for better performance
- **Scoped Styles**: Component-specific styles with global design system integration

### State Management
- **Angular Signals**: Modern reactive state management for theme switching
- **RxJS Observables**: Language service with BehaviorSubject for translations
- **Local Storage**: Persistent theme and language preferences
- **Service Pattern**: Centralized state management through injectable services

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

# Production build with SSR
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
- **Primary**: `#6366f1` (Indigo) - Main brand color
- **Secondary**: `#8b5cf6` (Purple) - Accent color
- **Accent**: `#f59e0b` (Amber) - Highlight color
- **Success**: `#10b981` (Emerald) - Success states
- **Error**: `#ef4444` (Red) - Error states

### Typography
- **Primary Font**: Inter (UI elements and headings)
- **Code Font**: Source Code Pro (code snippets and technical content)
- **Display Font**: Inter (hero sections and large text)

### Spacing System
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **XXL**: 3rem (48px)

### Theme System
- **Dark Theme**: Default theme with dark backgrounds and light text
- **Light Theme**: Alternative theme with light backgrounds and dark text
- **CSS Custom Properties**: Dynamic theming with smooth transitions
- **Persistent Preferences**: Theme choice saved in localStorage

## 🌐 Internationalization

The portfolio supports multiple languages with a comprehensive translation system:

### Supported Languages
- **English (en)**: Default language
- **Portuguese (pt)**: Brazilian Portuguese

### Translation Features
- **Reactive Updates**: Instant language switching without page reload
- **Persistent Preferences**: Language choice saved across sessions
- **Comprehensive Coverage**: All UI elements, content, and metadata translated
- **Mobile Support**: Language switcher in mobile menu

### Translation Structure
```typescript
interface Translations {
  nav: NavigationTranslations;
  home: HomeTranslations;
  about: AboutTranslations;
  skills: SkillsTranslations;
  experience: ExperienceTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
}
```

## 🎯 Key Features

### Home Section
- **Hero Section**: Animated introduction with professional statistics
- **Interactive Code Showcase**: TypeScript interface display with syntax highlighting
- **Professional Introduction**: 8+ years experience highlight
- **Call-to-Action**: Direct navigation to about section

### About Section
- **Personal Background**: Professional journey and values
- **Education Timeline**: Academic background (Uninorte, UFPA)
- **Core Values**: Innovation, Quality, Collaboration, Growth
- **Professional Statistics**: Years, projects, and satisfaction metrics

### Skills Section
- **Categorized Skills**: Organized by expertise level and technology type
- **Proficiency Indicators**: Visual skill level bars
- **Comprehensive Coverage**:
  - Frontend Core (Angular, TypeScript, JavaScript, HTML/CSS)
  - Styling & UI (SCSS, Material Design, Bootstrap, CSS Frameworks)
  - State Management (RxJS, NgRx, Angular Signals)
  - Testing (Jest, Karma, Cypress, Storybook)
  - Performance & SEO (SSR, optimization, analytics)
  - Tools & DevOps (Git, CI/CD, cloud platforms)

### Experience Section
- **Professional Timeline**: Chronological work experience
- **Detailed Roles**: Responsibilities and achievements for each position
- **Technology Stack**: Tech stack used in each role
- **Company Information**: Current position at GFT Brazil

### Contact Section
- **Multiple Contact Methods**: Email, LinkedIn, GitHub, Location
- **Availability Status**: Current availability for new projects
- **Professional Information**: Remote work availability
- **Direct Action Buttons**: Email and LinkedIn integration

## 📱 Responsive Design

The portfolio is fully responsive with comprehensive breakpoint system:

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Up to 767px

### Mobile Features
- **Mobile Menu**: Slide-out navigation with language switcher
- **Touch Optimized**: Touch-friendly interactions and gestures
- **Performance Optimized**: Optimized for mobile performance
- **Accessibility**: Mobile accessibility compliance

## 🔧 Configuration

### Angular Configuration
- **Standalone Components**: Modern Angular architecture
- **SSR Support**: Server-side rendering for better SEO
- **Asset Optimization**: Optimized images and fonts
- **Bundle Analysis**: Built-in webpack bundle analyzer

### Environment Setup
The application uses Angular's built-in configuration system with:
- Development and production configurations
- SSR support for better SEO
- Asset optimization and bundling
- TypeScript strict mode

### Theme Configuration
Themes are managed through CSS custom properties and can be easily extended by modifying the `app.scss` file. The theme system supports:
- Dynamic theme switching
- Persistent preferences
- Smooth transitions
- Comprehensive color system

## 📊 Performance Features

- **Lazy Loading**: Route-based code splitting for optimal performance
- **Optimized Assets**: Compressed images and optimized fonts
- **CSS Optimization**: Purged unused styles in production builds
- **Bundle Analysis**: Built-in webpack bundle analyzer
- **Caching Strategy**: Optimized for CDN delivery and browser caching
- **SSR Performance**: Server-side rendering for faster initial load

## 🔍 SEO & Accessibility

### SEO Features
- **Meta Tags**: Comprehensive meta tags for all major search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: Schema.org markup for rich snippets
- **Sitemap Ready**: Configuration for sitemap generation

### Accessibility Features
- **WCAG 2.1 AA Compliance**: Full accessibility compliance
- **Keyboard Navigation**: Complete keyboard navigation support
- **Screen Reader Compatibility**: ARIA labels and semantic HTML
- **High Contrast Mode**: Support for high contrast themes
- **Focus Management**: Proper focus indicators and management

## 🧪 Testing

```bash
# Unit tests
npm test

# Test coverage
npm run test:coverage

# E2E tests (if configured)
npm run e2e
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
The application is compatible with any static hosting service that supports Angular applications with SSR capabilities.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Philip Ramkeerat** is a Senior Angular Developer with over 8 years of experience in frontend development. Currently working at **GFT Brazil** on strategic projects for major retail chains.

### Professional Background
- **8+ Years Experience**: Extensive experience in Angular ecosystem
- **Enterprise Focus**: Specialized in large-scale applications
- **Performance Expert**: Focus on high-performance web applications
- **Team Leadership**: Experience leading development teams

### Contact Information
- **Email**: philip_ramkeerat@hotmail.com
- **LinkedIn**: [linkedin.com/in/philip-ramkeerat](https://linkedin.com/in/philip-ramkeerat)
- **GitHub**: [github.com/philip-ramkeerat](https://github.com/philip-ramkeerat)
- **Portfolio**: [philip-ramkeerat.dev](https://philip-ramkeerat.dev)

---

⭐ If you find this project helpful, please consider giving it a star!

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="home" class="hero-section" [class.light-theme]="isLightTheme" data-aos="fade-up">
      <div class="hero-container">
        <div class="hero-content" data-aos="fade-up">
          <div class="hero-badge">
            <span class="badge-text">{{ translations?.home?.greeting || '👋 Hello, I am' }}</span>
          </div>
          
          <h1 class="hero-title">
            <span class="text-gradient">{{ translations?.home?.title || 'Philip Ramkeerat' }}</span>
          </h1>
          
          <h2 class="hero-subtitle">
            {{ translations?.home?.subtitle || 'Senior Angular Developer' }}
          </h2>
          
          <p class="hero-description">
            {{ translations?.home?.description || 'With over 8 years of experience in frontend development, specialized in Angular and high-performance web applications. Currently working at a leading tech company on strategic projects for one of the largest retail chains in the country.' }}
          </p>
          
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">8+</span>
              <span class="stat-label">{{ translations?.home?.stats?.experience || 'Years of Experience' }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">{{ translations?.home?.stats?.quality || 'Quality Focus' }}</span>
            </div>
          </div>
          
          <div class="hero-actions">
            <a [routerLink]="['/about']" class="btn btn-primary">
              <i class="fas fa-arrow-right"></i>
              {{ translations?.home?.actions?.learnMore || 'Learn More' }}
            </a>
          </div>
        </div>
        
        <div class="hero-visual" data-aos="fade-left">
          <div class="code-window">
            <div class="window-header">
              <div class="window-controls">
                <span class="control red"></span>
                <span class="control yellow"></span>
                <span class="control green"></span>
              </div>
              <span class="window-title">portfolio.ts</span>
            </div>
            <div class="window-content">
              <pre class="code-block"><code><span class="keyword">{{ translations?.home?.codeSnippet?.interface || 'interface' }}</span> <span class="interface-name">{{ translations?.home?.codeSnippet?.developer || 'Developer' }}</span> {{ '{' }}
  <span class="property">{{ translations?.home?.codeSnippet?.name || 'name' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.nameValue || "'Philip Ramkeerat'" }}</span>;
  <span class="property">{{ translations?.home?.codeSnippet?.role || 'role' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.roleValue || "'Senior Angular Developer'" }}</span>;
  <span class="property">{{ translations?.home?.codeSnippet?.experience || 'experience' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.experienceValue || "'8+ years'" }}</span>;
  <span class="property">{{ translations?.home?.codeSnippet?.expertise || 'expertise' }}</span>: {{ '{' }}
    <span class="property">{{ translations?.home?.codeSnippet?.expertiseValue?.frontend || 'frontend' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.expertiseValue?.frontendValue || "'Angular & TypeScript'" }}</span>,
    <span class="property">{{ translations?.home?.codeSnippet?.expertiseValue?.architecture || 'architecture' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.expertiseValue?.architectureValue || "'Enterprise Applications'" }}</span>,
    <span class="property">{{ translations?.home?.codeSnippet?.expertiseValue?.performance || 'performance' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.expertiseValue?.performanceValue || "'High-Scale Solutions'" }}</span>
  {{ '}' }};
  <span class="property">{{ translations?.home?.codeSnippet?.skills || 'skills' }}</span>: [
    <span class="string">'Angular'</span>, <span class="string">'TypeScript'</span>, 
    <span class="string">'RxJS'</span>, <span class="string">'NgRx'</span>,
    <span class="string">'Material Design'</span>, <span class="string">'SCSS'</span>
  ];
  <span class="property">{{ translations?.home?.codeSnippet?.focus || 'focus' }}</span>: {{ '{' }}
    <span class="property">{{ translations?.home?.codeSnippet?.focusValue?.quality || 'quality' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.focusValue?.qualityValue || "'Clean Code & Best Practices'" }}</span>,
    <span class="property">{{ translations?.home?.codeSnippet?.focusValue?.innovation || 'innovation' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.focusValue?.innovationValue || "'Modern Solutions'" }}</span>,
    <span class="property">{{ translations?.home?.codeSnippet?.focusValue?.delivery || 'delivery' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.focusValue?.deliveryValue || "'Efficient & Scalable'" }}</span>
  {{ '}' }};
{{ '}' }}

<span class="keyword">{{ translations?.home?.codeSnippet?.const || 'const' }}</span> <span class="variable">{{ translations?.home?.codeSnippet?.philip || 'philip' }}</span>: <span class="type">{{ translations?.home?.codeSnippet?.developer || 'Developer' }}</span> = {{ '{' }}
  <span class="property">{{ translations?.home?.codeSnippet?.name || 'name' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.nameValue || "'Philip Ramkeerat'" }}</span>,
  <span class="property">{{ translations?.home?.codeSnippet?.role || 'role' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.roleValue || "'Senior Angular Developer'" }}</span>,
  <span class="property">{{ translations?.home?.codeSnippet?.experience || 'experience' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.experienceValue || "'8+ years'" }}</span>,
  <span class="property">{{ translations?.home?.codeSnippet?.expertise || 'expertise' }}</span>: {{ '{' }}
    <span class="property">{{ translations?.home?.codeSnippet?.expertiseValue?.frontend || 'frontend' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.expertiseValue?.frontendValue || "'Angular & TypeScript'" }}</span>,
    <span class="property">{{ translations?.home?.codeSnippet?.expertiseValue?.architecture || 'architecture' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.expertiseValue?.architectureValue || "'Enterprise Applications'" }}</span>,
    <span class="property">{{ translations?.home?.codeSnippet?.expertiseValue?.performance || 'performance' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.expertiseValue?.performanceValue || "'High-Scale Solutions'" }}</span>
  {{ '}' }},
  <span class="property">{{ translations?.home?.codeSnippet?.skills || 'skills' }}</span>: [
    <span class="string">'Angular'</span>, <span class="string">'TypeScript'</span>, 
    <span class="string">'RxJS'</span>, <span class="string">'NgRx'</span>,
    <span class="string">'Material Design'</span>, <span class="string">'SCSS'</span>
  ],
  <span class="property">{{ translations?.home?.codeSnippet?.focus || 'focus' }}</span>: {{ '{' }}
    <span class="property">{{ translations?.home?.codeSnippet?.focusValue?.quality || 'quality' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.focusValue?.qualityValue || "'Clean Code & Best Practices'" }}</span>,
    <span class="property">{{ translations?.home?.codeSnippet?.focusValue?.innovation || 'innovation' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.focusValue?.innovationValue || "'Modern Solutions'" }}</span>,
    <span class="property">{{ translations?.home?.codeSnippet?.focusValue?.delivery || 'delivery' }}</span>: <span class="string">{{ translations?.home?.codeSnippet?.focusValue?.deliveryValue || "'Efficient & Scalable'" }}</span>
  {{ '}' }}
{{ '}' }};

<span class="comment">{{ translations?.home?.codeSnippet?.comment || '// Ready to build amazing web experiences! 🚀' }}</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-xxl) var(--spacing-lg);
      position: relative;
      overflow: hidden;
      background: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)),
        url('https://images.unsplash.com/photo-1527689368864-3a821dbbbb34?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
    }
    
    .hero-container {
      max-width: 1200px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-xxl);
      align-items: center;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
    
    .hero-content {
      z-index: 2;
      
      @media (max-width: 1024px) {
        order: 2;
      }
    }
    
    .hero-badge {
      margin-bottom: var(--spacing-lg);
      
      @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
      }
    }
    
    .badge-text {
      background: rgba(99, 102, 241, 0.1);
      color: var(--primary-color);
      padding: var(--spacing-sm) var(--spacing-md);
      border-radius: var(--border-radius-xl);
      font-size: 0.9rem;
      font-weight: 500;
      border: 1px solid rgba(99, 102, 241, 0.3);
      box-shadow: var(--shadow-soft-inset);
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: var(--spacing-md);
      line-height: 1.1;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--text-secondary);
      margin-bottom: var(--spacing-lg);
      font-weight: 400;
      
      @media (max-width: 768px) {
        font-size: 1.25rem;
      }
    }
    
    .hero-description {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-bottom: var(--spacing-xl);
      line-height: 1.7;
      max-width: 500px;
      
      @media (max-width: 1024px) {
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    
    .hero-stats {
      display: flex;
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xl);
      
      @media (max-width: 1024px) {
        justify-content: center;
      }
      
      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-lg);
      }
    }
    
    .stat-item {
      text-align: center;
      padding: var(--spacing-md);
      background: var(--bg-card);
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-soft);
      transition: var(--transition-normal);
      
      @media (max-width: 480px) {
        width: 100%;
        max-width: 200px;
      }
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-medium);
      }
    }
    
    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
      font-family: var(--font-mono);
    }
    
    .stat-label {
      font-size: 0.9rem;
      color: var(--text-muted);
      font-weight: 500;
    }
    
    .hero-actions {
      display: flex;
      gap: var(--spacing-md);
      
      @media (max-width: 1024px) {
        justify-content: center;
      }
    }
    
    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      
      @media (max-width: 1024px) {
        order: 1;
        margin-bottom: var(--spacing-xl);
      }
    }
    
    .code-window {
      background: var(--bg-code);
      border: 1px solid var(--border-code);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-medium);
      transition: var(--transition-normal);
      width: 100%;
      max-width: 600px;
      text-align: left;
      
      @media (max-width: 1024px) {
        margin: 0 auto;
      }
      
      @media (max-width: 768px) {
        max-width: 100%;
        margin: 0 var(--spacing-sm);
      }
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-large);
        border-color: var(--primary-color);
      }
    }
    
    .window-header {
      background: var(--bg-code-header);
      padding: var(--spacing-sm) var(--spacing-md);
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      border-bottom: 1px solid var(--border-code);
    }
    
    .window-controls {
      display: flex;
      gap: var(--spacing-xs);
    }
    
    .control {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      
      &.red { background: #ff5f56; }
      &.yellow { background: #ffbd2e; }
      &.green { background: #27c93f; }
    }
    
    .window-title {
      font-size: 0.9rem;
      color: var(--text-code-muted);
      margin-left: var(--spacing-md);
      font-family: var(--font-mono);
      
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
    
    .window-content {
      padding: var(--spacing-lg);
      overflow-x: auto;
      background: var(--bg-code);
      
      @media (max-width: 768px) {
        padding: var(--spacing-md);
      }
      
      &::-webkit-scrollbar {
        height: 8px;
        background-color: var(--bg-code);
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-thumb);
        border-radius: 4px;
        
        &:hover {
          background-color: var(--scrollbar-thumb-hover);
        }
      }
    }
    
    .code-block {
      margin: 0;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      line-height: 1.6;
      tab-size: 2;
      
      @media (max-width: 768px) {
        font-size: 0.75rem;
        line-height: 1.5;
        white-space: pre;
      }
      
      code {
        display: block;
        
        .keyword {
          color: var(--code-keyword);
          font-weight: 600;
        }
        
        .interface-name {
          color: var(--code-class);
          font-weight: 600;
        }
        
        .type {
          color: var(--code-type);
        }
        
        .variable {
          color: var(--code-variable);
        }
        
        .property {
          color: var(--code-property);
          margin-left: var(--spacing-md);
          
          @media (max-width: 768px) {
            margin-left: var(--spacing-sm);
          }
        }
        
        .string {
          color: var(--code-string);
        }
        
        .comment {
          color: var(--code-comment);
          font-style: italic;
        }
      }
    }

    .hero-section.light-theme {
      background: yellow !important;
      background-image: none !important;
    }
    
    [data-theme="light"] .hero-title {
      color: var(--text-primary);
    }
    
    [data-theme="light"] .hero-subtitle {
      color: #64748b;
      font-weight: 500;
    }
    
    [data-theme="light"] .hero-description {
      color: #475569;
      font-weight: 400;
    }
    
    [data-theme="light"] .stat-label {
      color: var(--text-primary);
      opacity: 0.6;
    }
  `]
})
export class HomeComponent implements OnInit {
  translations: any;
  isLightTheme = false;
  
  constructor(private languageService: LanguageService, private themeService: ThemeService) {}
  
  ngOnInit() {
    this.translations = this.languageService.getTranslations();
    this.languageService.currentLanguage$.subscribe(() => {
      this.translations = this.languageService.getTranslations();
    });
    
    // Check current theme
    this.isLightTheme = this.themeService.current === 'light';
  }
} 
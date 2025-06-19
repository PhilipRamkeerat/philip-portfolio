import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="home" class="hero-section">
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
              <pre class="code-block"><code>interface Developer {{ '{' }}
  name: 'Philip Ramkeerat';
  role: 'Senior Angular Developer';
  experience: '8+ years';
  skills: [
    'Angular', 'TypeScript', 'JavaScript',
    'RxJS', 'NgRx', 'Material Design',
    'Testing', 'Performance', 'Architecture'
  ];
  current: 'a leading tech company';
  passion: 'Building amazing web experiences';
{{ '}' }}

const philip: Developer = {{ '{' }}
  name: 'Philip Ramkeerat',
  role: 'Senior Angular Developer',
  experience: '8+ years',
  skills: [
    'Angular', 'TypeScript', 'JavaScript',
    'RxJS', 'NgRx', 'Material Design',
    'Testing', 'Performance', 'Architecture'
  ],
  current: 'a leading tech company',
  passion: 'Building amazing web experiences'
{{ '}' }};

console.log('🚀 Ready to build something amazing!');</code></pre>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="1000">
        <div class="scroll-arrow"></div>
        <span>{{ translations?.home?.scrollDown || 'Scroll down' }}</span>
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
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-medium);
      transition: var(--transition-normal);
      width: 100%;
      max-width: 500px;
      
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-large);
      }
    }
    
    .window-header {
      background: var(--bg-secondary);
      padding: var(--spacing-sm) var(--spacing-md);
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      border-bottom: 1px solid var(--border-light);
    }
    
    .window-controls {
      display: flex;
      gap: var(--spacing-xs);
    }
    
    .control {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      
      &.red { background: #ef4444; }
      &.yellow { background: #f59e0b; }
      &.green { background: #10b981; }
    }
    
    .window-title {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin-left: var(--spacing-md);
    }
    
    .window-content {
      padding: var(--spacing-lg);
      overflow-x: auto;
    }
    
    .code-block {
      margin: 0;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--text-primary);
      
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: var(--spacing-xl);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-sm);
      color: var(--text-muted);
      font-size: 0.9rem;
      opacity: 0.8;
      transition: var(--transition-normal);
      cursor: pointer;
      
      &:hover {
        opacity: 1;
        transform: translateX(-50%) translateY(-5px);
      }
      
      @media (max-width: 768px) {
        display: none;
      }
    }
    
    .scroll-arrow {
      width: 20px;
      height: 20px;
      border-right: 2px solid var(--text-muted);
      border-bottom: 2px solid var(--text-muted);
      transform: rotate(45deg);
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: rotate(45deg) translateY(0);
      }
      40% {
        transform: rotate(45deg) translateY(-10px);
      }
      60% {
        transform: rotate(45deg) translateY(-5px);
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  translations: any;
  
  constructor(private languageService: LanguageService) {}
  
  ngOnInit() {
    this.translations = this.languageService.getTranslations();
    this.languageService.currentLanguage$.subscribe(() => {
      this.translations = this.languageService.getTranslations();
    });
  }
} 
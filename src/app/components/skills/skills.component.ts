import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="text-gradient">{{ translations?.skills?.title || 'Skills & Tecnologias' }}</span>
          </h2>
          <p class="section-subtitle">
            {{ translations?.skills?.subtitle || 'Stack completa de um desenvolvedor Angular senior' }}
          </p>
        </div>
        
        <div class="skills-grid">
          <!-- Frontend Core -->
          <div class="skill-category" data-aos="fade-up">
            <h3 class="category-title">
              <i class="fas fa-code"></i>
              {{ translations?.skills?.categories?.frontendCore || 'Frontend Core' }}
            </h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon">🅰️</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.angular || 'Angular' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.angular || 'v2 até latest (v17+)' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 95%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">📘</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.typescript || 'TypeScript' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.typescript || 'ES6+, Interfaces, Generics' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 90%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">⚡</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.javascript || 'JavaScript' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.javascript || 'ES6+, Async/Await, Promises' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🎨</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.htmlCss || 'HTML5 & CSS3' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.htmlCss || 'Semântica, Flexbox, Grid' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 90%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Styling & UI -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
            <h3 class="category-title">
              <i class="fas fa-palette"></i>
              {{ translations?.skills?.categories?.stylingUI || 'Styling & UI' }}
            </h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon">🎯</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.sass || 'SASS/SCSS' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.sass || 'Mixins, Variables, Nesting' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 88%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🎨</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.materialDesign || 'Material Design' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.materialDesign || 'Angular Material, Theming' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🎪</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.bootstrap || 'Bootstrap' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.bootstrap || 'Responsive Design, Components' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🎭</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.cssFrameworks || 'CSS Frameworks' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.cssFrameworks || 'Tailwind, Bulma, Foundation' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 75%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- State Management -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
            <h3 class="category-title">
              <i class="fas fa-database"></i>
              {{ translations?.skills?.categories?.stateManagement || 'State Management' }}
            </h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon">🔄</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.rxjs || 'RxJS' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.rxjs || 'Observables, Operators, Subjects' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 92%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">📦</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.ngrx || 'NgRx' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.ngrx || 'Store, Effects, Selectors' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">📡</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.angularSignals || 'Angular Signals' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.angularSignals || 'Reactive Programming' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 88%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🏪</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.stateManagement || 'State Management' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.stateManagement || 'Redux, MobX, Zustand' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Testing -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="300">
            <h3 class="category-title">
              <i class="fas fa-vial"></i>
              {{ translations?.skills?.categories?.testing || 'Testing' }}
            </h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon">🧪</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.jest || 'Jest' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.jest || 'Unit Testing, Mocking' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🎭</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.karma || 'Karma' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.karma || 'Test Runner, Coverage' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🌲</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.cypress || 'Cypress' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.cypress || 'E2E Testing, Component Testing' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 82%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">📖</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.storybook || 'Storybook' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.storybook || 'Component Documentation' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 78%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Performance & Optimization -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="400">
            <h3 class="category-title">
              <i class="fas fa-tachometer-alt"></i>
              {{ translations?.skills?.categories?.performanceSEO || 'Performance & SEO' }}
            </h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon">⚡</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.ssr || 'SSR (Server-Side Rendering)' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.ssr || 'Angular Universal' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🚀</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.performanceOptimization || 'Performance Optimization' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.performanceOptimization || 'Lazy Loading, Tree Shaking' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 88%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🔍</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.seo || 'SEO' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.seo || 'Meta Tags, Structured Data' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">📊</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.analytics || 'Analytics' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.analytics || 'Google Analytics, Performance Monitoring' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 75%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Tools & DevOps -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="500">
            <h3 class="category-title">
              <i class="fas fa-tools"></i>
              {{ translations?.skills?.categories?.toolsDevOps || 'Tools & DevOps' }}
            </h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-icon">📦</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.nxMonorepo || 'Nx Monorepo' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.nxMonorepo || 'Workspace Management' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🐙</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.gitGithub || 'Git & GitHub' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.gitGithub || 'Version Control, CI/CD' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 90%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">🏗️</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.cicd || 'CI/CD' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.cicd || 'Jenkins, GitHub Actions, Azure DevOps' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 80%"></div>
                  </div>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-icon">☁️</div>
                <div class="skill-info">
                  <h4>{{ translations?.skills?.skills?.cloudPlatforms || 'Cloud Platforms' }}</h4>
                  <p>{{ translations?.skills?.descriptions?.cloudPlatforms || 'AWS, Azure, Google Cloud' }}</p>
                  <div class="skill-level">
                    <div class="skill-bar" style="width: 70%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      padding: var(--spacing-xxl) 0;
      background: var(--darker-bg);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--spacing-lg);
    }
    
    .section-header {
      text-align: center;
      margin-bottom: var(--spacing-xxl);
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--spacing-md);
    }
    
    .section-subtitle {
      font-size: 1.2rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-xl);
    }
    
    .skill-category {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: var(--spacing-xl);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        border-color: var(--primary-color);
        box-shadow: var(--shadow-lg);
      }
    }
    
    .category-title {
      color: var(--primary-color);
      font-size: 1.3rem;
      margin-bottom: var(--spacing-lg);
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      
      i {
        font-size: 1.2rem;
      }
    }
    
    .skills-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }
    
    .skill-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }
    
    .skill-icon {
      font-size: 1.5rem;
      width: 40px;
      text-align: center;
    }
    
    .skill-info {
      flex: 1;
      
      h4 {
        color: var(--text-primary);
        font-size: 1rem;
        margin-bottom: var(--spacing-xs);
        font-weight: 600;
      }
      
      p {
        color: var(--text-muted);
        font-size: 0.85rem;
        margin-bottom: var(--spacing-sm);
      }
    }
    
    .skill-level {
      width: 100%;
      height: 6px;
      background: var(--border-color);
      border-radius: var(--border-radius-sm);
      overflow: hidden;
    }
    
    .skill-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      border-radius: var(--border-radius-sm);
      transition: width 1s ease;
    }
    
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .skill-category {
        padding: var(--spacing-lg);
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  translations: any;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.translations = this.languageService.getTranslations();
    });
  }
} 
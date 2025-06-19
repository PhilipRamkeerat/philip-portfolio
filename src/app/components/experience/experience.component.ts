import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="text-gradient">{{ translations?.experience?.title || 'Experiência Profissional' }}</span>
          </h2>
          <p class="section-subtitle">
            {{ translations?.experience?.subtitle || 'Jornada de 8+ anos em desenvolvimento frontend' }}
          </p>
        </div>
        
        <div class="timeline" data-aos="fade-up">
          <ng-container *ngFor="let item of experiences; let i = index">
            <div class="timeline-item" [attr.data-aos]="i % 2 === 0 ? 'fade-right' : 'fade-left'">
              <div class="timeline-marker">
              </div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <h3>{{ item.title }}</h3>
                  <span class="company">{{ item.company }}</span>
                  <span class="period">{{ item.period }}</span>
                </div>
                <div class="timeline-body">
                  <p>{{ item.description }}</p>

                  <div class="responsibilities" *ngIf="item.responsibilities?.length">
                    <h4>{{ translations?.experience?.responsibilitiesTitle || 'Principais Responsabilidades:' }}</h4>
                    <ul>
                      <li *ngFor="let resp of item.responsibilities">{{ resp }}</li>
                    </ul>
                  </div>

                  <div class="tech-stack" *ngIf="item.techStack?.length">
                    <h4>{{ translations?.experience?.techStackTitle || 'Stack Tecnológica:' }}</h4>
                    <div class="tech-tags">
                      <span class="tech-tag" *ngFor="let tech of item.techStack">{{ tech }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      padding: var(--spacing-xxl) 0;
      background: var(--dark-bg);
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
    
    .timeline {
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: 30px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--border-color);
      }
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: var(--spacing-xxl);
      padding-left: 80px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .timeline-marker {
      position: absolute;
      left: 0;
      top: 0;
      width: 60px;
      height: 60px;
      background: var(--card-bg);
      border: 2px solid var(--border-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .timeline-content {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: var(--spacing-xl);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateX(10px);
        border-color: var(--primary-color);
        box-shadow: var(--shadow-lg);
      }
    }
    
    .timeline-header {
      margin-bottom: var(--spacing-lg);
      padding-bottom: var(--spacing-md);
      border-bottom: 1px solid var(--border-color);
      
      h3 {
        color: var(--text-primary);
        font-size: 1.4rem;
        margin-bottom: var(--spacing-xs);
        font-weight: 600;
      }
      
      .company {
        color: var(--primary-color);
        font-weight: 500;
        font-size: 1.1rem;
        display: block;
        margin-bottom: var(--spacing-xs);
      }
      
      .period {
        color: var(--text-muted);
        font-size: 0.9rem;
        font-family: var(--font-mono);
      }
    }
    
    .timeline-body {
      p {
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: var(--spacing-lg);
      }
    }
    
    .responsibilities {
      margin-bottom: var(--spacing-lg);
      
      h4 {
        color: var(--text-primary);
        font-size: 1.1rem;
        margin-bottom: var(--spacing-md);
        font-weight: 600;
      }
      
      ul {
        list-style: none;
        padding: 0;
      }
      
      li {
        color: var(--text-secondary);
        font-size: 0.95rem;
        margin-bottom: var(--spacing-sm);
        padding-left: var(--spacing-md);
        position: relative;
      }
    }
    
    .tech-stack {
      h4 {
        color: var(--text-primary);
        font-size: 1.1rem;
        margin-bottom: var(--spacing-md);
        font-weight: 600;
      }
    }
    
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
    }
    
    .tech-tag {
      background: rgba(0, 212, 170, 0.1);
      color: var(--primary-color);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--border-radius-sm);
      font-size: 0.85rem;
      font-weight: 500;
      border: 1px solid rgba(0, 212, 170, 0.3);
      font-family: var(--font-mono);
    }
    
    @media (max-width: 768px) {
      .timeline {
        &::before {
          left: 20px;
        }
      }
      
      .timeline-item {
        padding-left: 60px;
      }
      
      .timeline-marker {
        width: 40px;
        height: 40px;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .tech-tags {
        justify-content: center;
      }
    }
  `]
})
export class ExperienceComponent implements OnInit {
  translations: any;
  experiences: any[] = [];

  private experiencesPt = [
    {
      title: 'Senior Frontend Developer | Angular',
      company: 'GFT',
      period: 'ago de 2021 - presente',
      description: 'Atuo como Senior Frontend Developer na GFT, prestando serviços para uma das maiores empresas do Brasil, referência nacional no setor varejista, com milhões de transações anuais. Meu foco é o desenvolvimento e evolução de aplicações web de alto tráfego usando Angular em uma arquitetura de Micro Frontends, aproveitando Module Federation para entregas modulares e escaláveis.',
      responsibilities: [
        'Desenvolver e evoluir aplicações de alto tráfego em Angular dentro de uma arquitetura de Micro Frontends',
        'Aproveitar Module Federation para entregas escaláveis e modulares',
        'Garantir performance, escalabilidade e manutenibilidade',
        'Escrever e manter testes unitários com Jest',
        'Aplicar SCSS com metodologia BEM',
        'Colaborar com equipes de design e backend',
        'Aplicar princípios de Clean Code e SOLID'
      ],
      techStack: ['Angular 17+', 'TypeScript', 'RxJS', 'Module Federation', 'SCSS', 'Jest']
    },
    {
      title: 'Software Developer II',
      company: 'INDT',
      period: 'nov de 2019 - ago de 2021',
      description: 'Contribuí ativamente em diversos projetos com foco em frontend utilizando Angular em ambientes ágeis com SCRUM.',
      responsibilities: [
        'Desenvolvimento com JavaScript e TypeScript aplicando Clean Code e SOLID',
        'Integração de APIs REST usando Node.js',
        'Implementação de design responsivo com CSS, SCSS, LESS e HTML5',
        'Experiência com Git, GitLab, Docker e pipelines CI/CD',
        'Participação em projetos com Express, Spring Boot, JHipster, PostgreSQL, MongoDB e Java 8'
      ],
      techStack: ['Angular', 'TypeScript', 'Node.js', 'SCSS', 'Docker', 'GitLab', 'CI/CD']
    },
    {
      title: 'Software Developer',
      company: 'INDT',
      period: 'mai de 2017 - nov de 2019',
      description: 'Desenvolvimento e manutenção de aplicações web utilizando JavaScript, jQuery e Angular.',
      responsibilities: [
        'Implementação de novas funcionalidades e manutenção de código legado',
        'Melhorias de performance e compatibilidade entre navegadores',
        'Colaboração em equipes ágeis com SCRUM'
      ],
      techStack: ['Angular', 'JavaScript', 'jQuery', 'HTML5', 'CSS3']
    }
  ];

  private experiencesEn = [
    {
      title: 'Senior Frontend Developer | Angular',
      company: 'GFT',
      period: 'Aug 2021 - Present',
      description: 'I work as a Senior Frontend Developer at GFT, providing services for one of the largest companies in Brazil, a national reference in the retail sector, with millions of transactions conducted annually. My role focuses on the development and evolution of high-traffic web applications using the Angular framework within a Micro Frontend architecture, leveraging Module Federation for scalable and modular delivery.',
      responsibilities: [
        'Develop and evolve high-traffic web applications using Angular within a Micro Frontend architecture',
        'Leverage Module Federation for scalable and modular delivery',
        'Ensure performance, scalability and maintainability',
        'Write and maintain unit tests with Jest',
        'Style components using SCSS and BEM methodology',
        'Collaborate with design and backend teams',
        'Apply Clean Code and SOLID principles'
      ],
      techStack: ['Angular 17+', 'TypeScript', 'RxJS', 'Module Federation', 'SCSS', 'Jest']
    },
    {
      title: 'Software Developer II',
      company: 'INDT',
      period: 'Nov 2019 - Aug 2021',
      description: 'Actively contributed to various projects with a focus on frontend development using Angular in agile environments with SCRUM.',
      responsibilities: [
        'Developed web applications with JavaScript and TypeScript applying Clean Code and SOLID principles',
        'Collaborated on the development and integration of REST APIs using Node.js',
        'Implemented responsive design using CSS, SCSS, LESS and HTML5',
        'Worked with Git, GitLab, Docker and CI/CD pipelines',
        'Participated in projects involving Express, Spring Boot, JHipster, PostgreSQL, MongoDB and Java 8'
      ],
      techStack: ['Angular', 'TypeScript', 'Node.js', 'SCSS', 'Docker', 'GitLab', 'CI/CD']
    },
    {
      title: 'Software Developer',
      company: 'INDT',
      period: 'May 2017 - Nov 2019',
      description: 'Developed and maintained web applications using JavaScript, jQuery and Angular, focusing on delivering robust user interfaces and improving performance.',
      responsibilities: [
        'Developed new features and maintained existing Angular and jQuery codebases',
        'Improved performance and cross-browser compatibility',
        'Collaborated in agile teams adopting SCRUM methodology'
      ],
      techStack: ['Angular', 'JavaScript', 'jQuery', 'HTML5', 'CSS3']
    }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.translations = this.languageService.getTranslations();
      this.experiences = lang === 'pt' ? this.experiencesPt : this.experiencesEn;
    });
  }
} 
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="text-gradient">{{ translations?.about?.title || 'About Me' }}</span>
          </h2>
          <p class="section-subtitle">{{ translations?.about?.subtitle || 'Get to know me better' }}</p>
        </div>
        
        <div class="about-content">
          <div class="about-text" data-aos="fade-right">
            <div class="about-card">
              <h3>{{ translations?.about?.heading || 'Who I Am' }}</h3>
              <p>{{ translations?.about?.description || 'I am a passionate Senior Angular Developer with over 8 years of experience in creating exceptional web applications. My journey in software development has been driven by a deep curiosity for technology and a commitment to delivering high-quality solutions.' }}</p>
              
              <div class="about-features">
                <div class="feature-item">
                  <i class="fas fa-code"></i>
                  <span>{{ translations?.about?.features?.code || 'Clean Code' }}</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-rocket"></i>
                  <span>{{ translations?.about?.features?.performance || 'Performance' }}</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-users"></i>
                  <span>{{ translations?.about?.features?.teamwork || 'Teamwork' }}</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-lightbulb"></i>
                  <span>{{ translations?.about?.features?.innovation || 'Innovation' }}</span>
                </div>
              </div>
            </div>
            
            <div class="about-card">
              <h3>Formação Acadêmica</h3>
              <div class="education-item">
                <div class="education-icon">🎓</div>
                <div class="education-content">
                  <h4>Mestrado em Engenharia de Processos</h4>
                  <p>Especialização em otimização e melhoria de processos</p>
                </div>
              </div>
              <div class="education-item">
                <div class="education-icon">📚</div>
                <div class="education-content">
                  <h4>Bacharelado em Ciência da Computação</h4>
                  <p>Base sólida em fundamentos da computação e programação</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-visual" data-aos="fade-left">
            <div class="profile-card">
              <div class="profile-image">
                <i class="fas fa-user-circle"></i>
              </div>
              <div class="profile-info">
                <h4>Philip Ramkeerat</h4>
                <p>{{ translations?.about?.role || 'Senior Angular Developer' }}</p>
                <div class="profile-stats">
                  <div class="stat">
                    <span class="stat-value">8+</span>
                    <span class="stat-label">{{ translations?.about?.stats?.years || 'Years' }}</span>
                  </div>
                  <div class="stat">
                    <span class="stat-value">50+</span>
                    <span class="stat-label">{{ translations?.about?.stats?.projects || 'Projects' }}</span>
                  </div>
                  <div class="stat">
                    <span class="stat-value">100%</span>
                    <span class="stat-label">{{ translations?.about?.stats?.satisfaction || 'Satisfaction' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="values-section" data-aos="fade-up">
          <h3>Meus Valores</h3>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🚀</div>
              <h4>Inovação</h4>
              <p>Sempre buscando as melhores práticas e tecnologias emergentes</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h4>Qualidade</h4>
              <p>Comprometido com código limpo, testável e manutenível</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h4>Colaboração</h4>
              <p>Trabalho em equipe e compartilhamento de conhecimento</p>
            </div>
            <div class="value-card">
              <div class="value-icon">📈</div>
              <h4>Crescimento</h4>
              <p>Aprendizado contínuo e evolução profissional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: var(--spacing-xxl) var(--spacing-lg);
      background: var(--bg-primary);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
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
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-xxl);
      align-items: center;
    }
    
    .about-text {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xl);
    }
    
    .about-card {
      background: var(--bg-card);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-soft);
      transition: var(--transition-normal);
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-medium);
      }
      
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: var(--spacing-lg);
        color: var(--text-primary);
      }
      
      p {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--text-secondary);
        margin-bottom: var(--spacing-lg);
      }
    }
    
    .about-features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-md);
    }
    
    .feature-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      padding: var(--spacing-md);
      background: var(--bg-secondary);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-soft-inset);
      transition: var(--transition-normal);
      
      &:hover {
        box-shadow: var(--shadow-soft);
        transform: translateY(-2px);
      }
      
      i {
        color: var(--primary-color);
        font-size: 1.2rem;
      }
      
      span {
        font-weight: 500;
        color: var(--text-primary);
      }
    }
    
    .education-item {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-lg);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    .education-icon {
      font-size: 1.5rem;
      margin-top: var(--spacing-xs);
    }
    
    .education-content {
      h4 {
        color: var(--text-primary);
        font-size: 1.1rem;
        margin-bottom: var(--spacing-xs);
        font-weight: 600;
      }
      
      p {
        color: var(--text-muted);
        font-size: 0.9rem;
        margin: 0;
      }
    }
    
    .profile-card {
      background: var(--bg-card);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-soft);
      text-align: center;
      transition: var(--transition-normal);
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-medium);
      }
    }
    
    .profile-image {
      margin-bottom: var(--spacing-lg);
      
      i {
        font-size: 4rem;
        color: var(--primary-color);
      }
    }
    
    .profile-info h4 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
      color: var(--text-primary);
    }
    
    .profile-info p {
      color: var(--text-secondary);
      margin-bottom: var(--spacing-lg);
    }
    
    .profile-stats {
      display: flex;
      justify-content: space-around;
      gap: var(--spacing-md);
    }
    
    .stat {
      text-align: center;
      
      .stat-value {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-color);
        font-family: var(--font-mono);
      }
      
      .stat-label {
        font-size: 0.9rem;
        color: var(--text-muted);
        font-weight: 500;
      }
    }
    
    .values-section {
      h3 {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: var(--spacing-xl);
        color: var(--text-primary);
      }
    }
    
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .value-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: var(--spacing-xl);
      text-align: center;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        border-color: var(--primary-color);
        box-shadow: var(--shadow-lg);
      }
      
      .value-icon {
        font-size: 2.5rem;
        margin-bottom: var(--spacing-md);
      }
      
      h4 {
        color: var(--text-primary);
        font-size: 1.2rem;
        margin-bottom: var(--spacing-md);
        font-weight: 600;
      }
      
      p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
    
    @media (max-width: 1024px) {
      .about-content {
        gap: var(--spacing-lg);
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .about-features {
        grid-template-columns: 1fr;
      }
      
      .profile-stats {
        flex-direction: column;
        gap: var(--spacing-md);
      }
    }
    
    @media (max-width: 480px) {
      .about-section {
        padding: var(--spacing-xl) var(--spacing-md);
      }
      
      .section-title {
        font-size: 1.5rem;
      }
      
      .about-card,
      .profile-card {
        padding: var(--spacing-lg);
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  translations: any;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(() => {
      this.translations = this.languageService.getTranslations();
    });
  }
} 
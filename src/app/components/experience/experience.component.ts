import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="text-gradient">Experiência Profissional</span>
          </h2>
          <p class="section-subtitle">
            Jornada de 8+ anos em desenvolvimento frontend
          </p>
        </div>
        
        <div class="timeline" data-aos="fade-up">
          <!-- Current Position -->
          <div class="timeline-item current" data-aos="fade-right">
            <div class="timeline-marker current">
              <i class="fas fa-star"></i>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>Senior Angular Developer</h3>
                <span class="company">GFT Brazil</span>
                <span class="period">2023 - Presente</span>
              </div>
              <div class="timeline-body">
                <p>
                  Atualmente trabalhando em um projeto estratégico para uma das maiores 
                  redes varejistas do Brasil, gerenciando milhões de acessos e transações diárias.
                </p>
                <div class="responsibilities">
                  <h4>Principais Responsabilidades:</h4>
                  <ul>
                    <li>Desenvolvimento e manutenção de aplicações Angular de alta performance</li>
                    <li>Implementação de arquiteturas escaláveis usando Nx Monorepo</li>
                    <li>Otimização de performance com SSR e Angular Signals</li>
                    <li>Implementação de testes automatizados (Cypress, Jest, Karma)</li>
                    <li>Documentação técnica com Storybook</li>
                    <li>Mentoria técnica para desenvolvedores júnior e pleno</li>
                  </ul>
                </div>
                <div class="tech-stack">
                  <h4>Stack Tecnológica:</h4>
                  <div class="tech-tags">
                    <span class="tech-tag">Angular 17+</span>
                    <span class="tech-tag">TypeScript</span>
                    <span class="tech-tag">RxJS</span>
                    <span class="tech-tag">NgRx</span>
                    <span class="tech-tag">Nx</span>
                    <span class="tech-tag">Cypress</span>
                    <span class="tech-tag">Jest</span>
                    <span class="tech-tag">Storybook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Previous Position -->
          <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-marker">
              <i class="fas fa-briefcase"></i>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>Angular Developer Senior</h3>
                <span class="company">Tech Solutions Inc.</span>
                <span class="period">2020 - 2023</span>
              </div>
              <div class="timeline-body">
                <p>
                  Desenvolvimento de aplicações web empresariais complexas, 
                  focando em escalabilidade e experiência do usuário.
                </p>
                <div class="responsibilities">
                  <h4>Principais Responsabilidades:</h4>
                  <ul>
                    <li>Liderança técnica em projetos Angular de grande escala</li>
                    <li>Implementação de padrões de arquitetura (SCAM, Standalone Components)</li>
                    <li>Desenvolvimento de bibliotecas de componentes reutilizáveis</li>
                    <li>Otimização de performance e SEO</li>
                    <li>Implementação de CI/CD pipelines</li>
                    <li>Code review e mentoria técnica</li>
                  </ul>
                </div>
                <div class="tech-stack">
                  <h4>Stack Tecnológica:</h4>
                  <div class="tech-tags">
                    <span class="tech-tag">Angular 13-16</span>
                    <span class="tech-tag">TypeScript</span>
                    <span class="tech-tag">Material Design</span>
                    <span class="tech-tag">RxJS</span>
                    <span class="tech-tag">NgRx</span>
                    <span class="tech-tag">SASS</span>
                    <span class="tech-tag">Jest</span>
                    <span class="tech-tag">Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Earlier Position -->
          <div class="timeline-item" data-aos="fade-right">
            <div class="timeline-marker">
              <i class="fas fa-code"></i>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>Frontend Developer</h3>
                <span class="company">Digital Innovations</span>
                <span class="period">2018 - 2020</span>
              </div>
              <div class="timeline-body">
                <p>
                  Desenvolvimento de aplicações web modernas e responsivas, 
                  trabalhando com tecnologias frontend emergentes.
                </p>
                <div class="responsibilities">
                  <h4>Principais Responsabilidades:</h4>
                  <ul>
                    <li>Desenvolvimento de interfaces de usuário responsivas</li>
                    <li>Implementação de animações e interações complexas</li>
                    <li>Integração com APIs RESTful</li>
                    <li>Otimização de performance frontend</li>
                    <li>Testes unitários e de integração</li>
                    <li>Colaboração com designers e backend developers</li>
                  </ul>
                </div>
                <div class="tech-stack">
                  <h4>Stack Tecnológica:</h4>
                  <div class="tech-tags">
                    <span class="tech-tag">Angular 8-12</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">HTML5</span>
                    <span class="tech-tag">CSS3</span>
                    <span class="tech-tag">SASS</span>
                    <span class="tech-tag">Bootstrap</span>
                    <span class="tech-tag">Karma</span>
                    <span class="tech-tag">Protractor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- First Position -->
          <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-marker">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>Junior Frontend Developer</h3>
                <span class="company">StartupTech</span>
                <span class="period">2016 - 2018</span>
              </div>
              <div class="timeline-body">
                <p>
                  Primeira experiência profissional em desenvolvimento web, 
                  aprendendo as melhores práticas e fundamentos do desenvolvimento frontend.
                </p>
                <div class="responsibilities">
                  <h4>Principais Responsabilidades:</h4>
                  <ul>
                    <li>Desenvolvimento de páginas web estáticas e dinâmicas</li>
                    <li>Implementação de layouts responsivos</li>
                    <li>Manutenção de código legado</li>
                    <li>Participação em code reviews</li>
                    <li>Aprendizado de frameworks JavaScript</li>
                    <li>Colaboração em projetos ágeis</li>
                  </ul>
                </div>
                <div class="tech-stack">
                  <h4>Stack Tecnológica:</h4>
                  <div class="tech-tags">
                    <span class="tech-tag">Angular 2-7</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">HTML</span>
                    <span class="tech-tag">CSS</span>
                    <span class="tech-tag">jQuery</span>
                    <span class="tech-tag">Bootstrap</span>
                    <span class="tech-tag">Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="achievements-section" data-aos="fade-up">
          <h3>Conquistas e Certificações</h3>
          <div class="achievements-grid">
            <div class="achievement-card">
              <div class="achievement-icon">🏆</div>
              <h4>Angular Expert</h4>
              <p>Certificação oficial Angular Developer</p>
            </div>
            <div class="achievement-card">
              <div class="achievement-icon">📈</div>
              <h4>Performance Champion</h4>
              <p>Otimização de aplicações com 50%+ de melhoria</p>
            </div>
            <div class="achievement-card">
              <div class="achievement-icon">👥</div>
              <h4>Team Leader</h4>
              <p>Liderança de equipes de até 8 desenvolvedores</p>
            </div>
            <div class="achievement-card">
              <div class="achievement-icon">🚀</div>
              <h4>Innovation Award</h4>
              <p>Prêmio por implementação de novas tecnologias</p>
            </div>
          </div>
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
      margin-bottom: var(--spacing-xxl);
      
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
      font-size: 1.2rem;
      color: var(--text-secondary);
      transition: all 0.3s ease;
      
      &.current {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--dark-bg);
        box-shadow: var(--shadow-glow);
      }
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
        
        &::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }
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
    
    .achievements-section {
      h3 {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: var(--spacing-xl);
        color: var(--text-primary);
      }
    }
    
    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-lg);
    }
    
    .achievement-card {
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
      
      .achievement-icon {
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
        font-size: 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .achievements-grid {
        grid-template-columns: 1fr;
      }
      
      .tech-tags {
        justify-content: center;
      }
    }
  `]
})
export class ExperienceComponent {} 
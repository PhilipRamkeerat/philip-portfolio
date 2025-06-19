import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="text-gradient">Entre em Contato</span>
          </h2>
          <p class="section-subtitle">
            Vamos trabalhar juntos no seu próximo projeto
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info" data-aos="fade-up">
            <div class="info-card">
              <h3>Vamos Conversar!</h3>
              <p>
                Estou sempre interessado em novos desafios e oportunidades 
                de colaboração. Se você tem um projeto em mente ou gostaria 
                de discutir possibilidades, não hesite em entrar em contato.
              </p>
              
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="method-content">
                    <h4>Email</h4>
                    <p>philip_ramkeerat&#64;hotmail.com</p>
                    <span class="method-note">Resposta em até 24h</span>
                  </div>
                </div>
                
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fab fa-linkedin"></i>
                  </div>
                  <div class="method-content">
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/philip-ramkeerat</p>
                    <span class="method-note">Conecte-se profissionalmente</span>
                  </div>
                </div>
                
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fab fa-github"></i>
                  </div>
                  <div class="method-content">
                    <h4>GitHub</h4>
                    <p>github.com/philip-ramkeerat</p>
                    <span class="method-note">Veja meus projetos</span>
                  </div>
                </div>
                
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="method-content">
                    <h4>Localização</h4>
                    <p>Brasil</p>
                    <span class="method-note">Disponível para projetos remotos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="availability-card">
              <h4>Disponibilidade</h4>
              <div class="availability-status">
                <div class="status-indicator available"></div>
                <span>Disponível para novos projetos</span>
              </div>
              <p>
                Atualmente trabalhando em projetos freelance e 
                aberto a novas oportunidades interessantes.
              </p>
            </div>
          </div>
        </div>
        
        <div class="cta-section" data-aos="fade-up">
          <div class="cta-card">
            <h3>Pronto para começar?</h3>
            <p>
              Vamos transformar suas ideias em realidade. 
              Entre em contato e vamos discutir como posso ajudar 
              no seu próximo projeto.
            </p>
            <div class="cta-actions">
              <a href="mailto:philip_ramkeerat@hotmail.com" class="btn btn-primary">
                <i class="fas fa-envelope"></i>
                Enviar Email
              </a>
              <a href="https://linkedin.com/in/philip-ramkeerat" target="_blank" class="btn btn-outline">
                <i class="fab fa-linkedin"></i>
                Conectar no LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
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
    
    .contact-content {
      margin-bottom: var(--spacing-xxl);
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xl);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .info-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: var(--spacing-xl);
      
      h3 {
        color: var(--primary-color);
        font-size: 1.5rem;
        margin-bottom: var(--spacing-md);
        font-weight: 600;
      }
      
      p {
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: var(--spacing-xl);
      }
    }
    
    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }
    
    .contact-method {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-md);
    }
    
    .method-icon {
      width: 50px;
      height: 50px;
      background: rgba(0, 212, 170, 0.1);
      border: 1px solid rgba(0, 212, 170, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: var(--primary-color);
      flex-shrink: 0;
    }
    
    .method-content {
      h4 {
        color: var(--text-primary);
        font-size: 1.1rem;
        margin-bottom: var(--spacing-xs);
        font-weight: 600;
      }
      
      p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        margin-bottom: var(--spacing-xs);
      }
      
      .method-note {
        color: var(--text-muted);
        font-size: 0.85rem;
        font-style: italic;
      }
    }
    
    .availability-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: var(--spacing-xl);
      
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
        margin-top: var(--spacing-md);
      }
    }
    
    .availability-status {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      
      span {
        color: var(--text-secondary);
        font-size: 0.95rem;
      }
    }
    
    .status-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      
      &.available {
        background: var(--success-color);
        box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
      }
    }
    
    .cta-section {
      .cta-card {
        background: linear-gradient(135deg, var(--card-bg), var(--darker-bg));
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-xxl);
        text-align: center;
        
        h3 {
          color: var(--text-primary);
          font-size: 2rem;
          margin-bottom: var(--spacing-md);
          font-weight: 700;
        }
        
        p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: var(--spacing-xl);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    
    .cta-actions {
      display: flex;
      gap: var(--spacing-md);
      justify-content: center;
      flex-wrap: wrap;
      
      .btn {
        min-width: 200px;
        
        i {
          margin-right: var(--spacing-sm);
        }
      }
    }
    
    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }
      
      .cta-actions {
        flex-direction: column;
        align-items: center;
        
        .btn {
          width: 100%;
          max-width: 300px;
        }
      }
      
      .contact-method {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-sm);
      }
    }
  `]
})
export class ContactComponent {
} 
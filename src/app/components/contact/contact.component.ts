import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
          <div class="contact-info" data-aos="fade-right">
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
                    <p>philip.ramkeerat&#64;example.com</p>
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
          
          <div class="contact-form" data-aos="fade-left">
            <div class="form-card">
              <h3>Envie uma Mensagem</h3>
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="form-group">
                  <label for="name">Nome *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="formData.name" 
                    required
                    class="form-input"
                    placeholder="Seu nome completo"
                  >
                </div>
                
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="formData.email" 
                    required
                    class="form-input"
                    placeholder="seu.email@exemplo.com"
                  >
                </div>
                
                <div class="form-group">
                  <label for="subject">Assunto *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    [(ngModel)]="formData.subject" 
                    required
                    class="form-input"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="projeto">Projeto Freelance</option>
                    <option value="colaboracao">Colaboração</option>
                    <option value="mentoria">Mentoria</option>
                    <option value="consulta">Consulta Técnica</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="message">Mensagem *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    [(ngModel)]="formData.message" 
                    required
                    rows="6"
                    class="form-input"
                    placeholder="Conte-me sobre seu projeto ou proposta..."
                  ></textarea>
                </div>
                
                <div class="form-group">
                  <label class="checkbox-label">
                    <input 
                      type="checkbox" 
                      [(ngModel)]="formData.newsletter" 
                      name="newsletter"
                    >
                    <span class="checkmark"></span>
                    Quero receber novidades sobre desenvolvimento Angular
                  </label>
                </div>
                
                <button type="submit" class="btn btn-primary submit-btn" [disabled]="!contactForm.form.valid || isSubmitting">
                  <span *ngIf="!isSubmitting">
                    <i class="fas fa-paper-plane"></i>
                    Enviar Mensagem
                  </span>
                  <span *ngIf="isSubmitting">
                    <i class="fas fa-spinner fa-spin"></i>
                    Enviando...
                  </span>
                </button>
              </form>
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
              <a href="mailto:philip.ramkeerat&#64;example.com" class="btn btn-primary">
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-xxl);
      margin-bottom: var(--spacing-xxl);
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xl);
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
    
    .form-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-lg);
      padding: var(--spacing-xl);
      
      h3 {
        color: var(--primary-color);
        font-size: 1.5rem;
        margin-bottom: var(--spacing-xl);
        font-weight: 600;
      }
    }
    
    .form-group {
      margin-bottom: var(--spacing-lg);
      
      label {
        display: block;
        color: var(--text-primary);
        font-weight: 500;
        margin-bottom: var(--spacing-sm);
      }
    }
    
    .form-input {
      width: 100%;
      padding: var(--spacing-md);
      background: var(--darker-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-md);
      color: var(--text-primary);
      font-family: var(--font-sans);
      font-size: 0.95rem;
      transition: all 0.3s ease;
      
      &:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.1);
      }
      
      &::placeholder {
        color: var(--text-muted);
      }
    }
    
    textarea.form-input {
      resize: vertical;
      min-height: 120px;
    }
    
    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-sm);
      cursor: pointer;
      color: var(--text-secondary);
      font-size: 0.9rem;
      line-height: 1.5;
      
      input[type="checkbox"] {
        display: none;
      }
      
      .checkmark {
        width: 18px;
        height: 18px;
        border: 2px solid var(--border-color);
        border-radius: var(--border-radius-sm);
        position: relative;
        flex-shrink: 0;
        margin-top: 2px;
        transition: all 0.3s ease;
      }
      
      input[type="checkbox"]:checked + .checkmark {
        background: var(--primary-color);
        border-color: var(--primary-color);
        
        &::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--dark-bg);
          font-size: 0.8rem;
          font-weight: bold;
        }
      }
    }
    
    .submit-btn {
      width: 100%;
      padding: var(--spacing-md) var(--spacing-xl);
      font-size: 1rem;
      font-weight: 600;
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      
      i {
        margin-right: var(--spacing-sm);
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
      .contact-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
      }
      
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
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  };
  
  isSubmitting = false;
  
  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simular envio do formulário
    setTimeout(() => {
      console.log('Formulário enviado:', this.formData);
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      
      // Reset do formulário
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      };
      
      this.isSubmitting = false;
    }, 2000);
  }
} 
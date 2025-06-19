import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="mobile-menu-toggle" (click)="toggleMenu()">
      <div class="hamburger" [class.active]="isOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    <div class="mobile-menu-overlay" [class.active]="isOpen" (click)="closeMenu()"></div>
    
    <div class="mobile-menu" [class.active]="isOpen">
      <div class="mobile-menu-header">
        <span class="brand-text">&lt;Philip/&gt;</span>
        <button class="close-btn" (click)="closeMenu()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <nav class="mobile-nav">
        <ul class="mobile-nav-list">
          <li><a routerLink="/home" routerLinkActive="active" class="mobile-nav-link" (click)="closeMenu()">{{ translations?.nav?.home || 'Home' }}</a></li>
          <li><a routerLink="/about" routerLinkActive="active" class="mobile-nav-link" (click)="closeMenu()">{{ translations?.nav?.about || 'About' }}</a></li>
          <li><a routerLink="/skills" routerLinkActive="active" class="mobile-nav-link" (click)="closeMenu()">{{ translations?.nav?.skills || 'Skills' }}</a></li>
          <li><a routerLink="/experience" routerLinkActive="active" class="mobile-nav-link" (click)="closeMenu()">{{ translations?.nav?.experience || 'Experience' }}</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" class="mobile-nav-link" (click)="closeMenu()">{{ translations?.nav?.contact || 'Contact' }}</a></li>
        </ul>
      </nav>
      
      <div class="mobile-language-switcher">
        <button 
          class="mobile-language-btn" 
          [class.active]="currentLanguage === 'en'"
          (click)="switchLanguage('en')">
          EN
        </button>
        <button 
          class="mobile-language-btn" 
          [class.active]="currentLanguage === 'pt'"
          (click)="switchLanguage('pt')">
          PT
        </button>
      </div>
    </div>
  `,
  styles: [`
    .mobile-menu-toggle {
      display: none;
      cursor: pointer;
      padding: var(--spacing-sm);
      border-radius: var(--border-radius-md);
      background: var(--bg-secondary);
      box-shadow: var(--shadow-soft-inset);
    }
    
    .hamburger {
      width: 24px;
      height: 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      span {
        width: 100%;
        height: 2px;
        background: var(--text-primary);
        border-radius: 1px;
        transition: var(--transition-normal);
        transform-origin: center;
      }
      
      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        span:nth-child(2) {
          opacity: 0;
        }
        
        span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
      }
    }
    
    .mobile-menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: var(--transition-normal);
      
      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
    
    .mobile-menu {
      position: fixed;
      top: 0;
      right: -300px;
      width: 300px;
      height: 100vh;
      background: var(--bg-card);
      z-index: 1000;
      transition: var(--transition-normal);
      box-shadow: var(--shadow-large);
      display: flex;
      flex-direction: column;
      
      &.active {
        right: 0;
      }
    }
    
    .mobile-menu-header {
      padding: var(--spacing-lg);
      border-bottom: 1px solid var(--border-light);
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .brand-text {
        font-family: var(--font-mono);
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--primary-color);
      }
      
      .close-btn {
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 1.2rem;
        cursor: pointer;
        padding: var(--spacing-sm);
        border-radius: var(--border-radius-md);
        transition: var(--transition-normal);
        
        &:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }
      }
    }
    
    .mobile-nav {
      flex: 1;
      padding: var(--spacing-lg);
    }
    
    .mobile-nav-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }
    
    .mobile-nav-link {
      display: block;
      padding: var(--spacing-md);
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      border-radius: var(--border-radius-md);
      transition: var(--transition-normal);
      background: var(--bg-secondary);
      box-shadow: var(--shadow-soft-inset);
      
      &:hover {
        color: var(--primary-color);
        background: var(--bg-tertiary);
        box-shadow: var(--shadow-soft);
      }
    }
    
    .mobile-language-switcher {
      padding: var(--spacing-lg);
      border-top: 1px solid var(--border-light);
      display: flex;
      gap: var(--spacing-sm);
      
      .mobile-language-btn {
        flex: 1;
        background: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-md);
        color: var(--text-secondary);
        font-weight: 500;
        cursor: pointer;
        transition: var(--transition-normal);
        box-shadow: var(--shadow-soft-inset);
        
        &.active {
          background: var(--primary-color);
          color: var(--text-inverse);
          box-shadow: var(--shadow-soft);
        }
        
        &:hover:not(.active) {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
      }
    }
    
    @media (max-width: 768px) {
      .mobile-menu-toggle {
        display: block;
      }
    }
  `]
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Input() currentLanguage = 'en';
  @Input() translations: any;
  @Output() menuToggle = new EventEmitter<void>();
  @Output() languageChange = new EventEmitter<string>();

  toggleMenu(): void {
    this.menuToggle.emit();
  }

  closeMenu(): void {
    this.menuToggle.emit();
  }

  switchLanguage(language: string): void {
    this.languageChange.emit(language);
  }
} 
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'pt';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    contact: string;
  };
  home: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      quality: string;
    };
    actions: {
      learnMore: string;
      contact: string;
    };
    scrollDown: string;
  };
  about: {
    title: string;
    subtitle: string;
    heading: string;
    description: string;
    role: string;
    features: {
      code: string;
      performance: string;
      teamwork: string;
      innovation: string;
    };
    stats: {
      years: string;
      projects: string;
      satisfaction: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    responsibilitiesTitle: string;
    techStackTitle: string;
  };
  footer: {
    copyright: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<Language>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  private translations: Record<Language, Translations> = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        contact: 'Contact'
      },
      home: {
        greeting: '👋 Hello, I am',
        title: 'Philip Ramkeerat',
        subtitle: 'Senior Angular Developer',
        description: 'With over 8 years of experience in frontend development, specialized in Angular and high-performance web applications. Currently working at a leading tech company on strategic projects for one of the largest retail chains in the country.',
        stats: {
          experience: 'Years of Experience',
          projects: 'Projects Delivered',
          quality: 'Quality Focus'
        },
        actions: {
          learnMore: 'Learn More',
          contact: 'Get in Touch'
        },
        scrollDown: 'Scroll down'
      },
      about: {
        title: 'About Me',
        subtitle: 'Get to know me better',
        heading: 'Who I Am',
        description: 'I am a passionate Senior Angular Developer with over 8 years of experience in creating exceptional web applications. My journey in software development has been driven by a deep curiosity for technology and a commitment to delivering high-quality solutions.',
        role: 'Senior Angular Developer',
        features: {
          code: 'Clean Code',
          performance: 'Performance',
          teamwork: 'Teamwork',
          innovation: 'Innovation'
        },
        stats: {
          years: 'Years',
          projects: 'Projects',
          satisfaction: 'Satisfaction'
        }
      },
      experience: {
        title: 'Professional Experience',
        subtitle: '8+ years journey in frontend development',
        responsibilitiesTitle: 'Main Responsibilities:',
        techStackTitle: 'Tech Stack:'
      },
      footer: {
        copyright: '© 2024 Philip Ramkeerat. All rights reserved.'
      }
    },
    pt: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        experience: 'Experiência',
        contact: 'Contato'
      },
      home: {
        greeting: '👋 Olá, eu sou',
        title: 'Philip Ramkeerat',
        subtitle: 'Desenvolvedor Angular Senior',
        description: 'Com mais de 8 anos de experiência em desenvolvimento frontend, especializado em Angular e aplicações web de alta performance. Atualmente trabalhando em uma empresa de tecnologia líder em projetos estratégicos para uma das maiores redes varejistas do país.',
        stats: {
          experience: 'Anos de Experiência',
          projects: 'Projetos Entregues',
          quality: 'Foco em Qualidade'
        },
        actions: {
          learnMore: 'Conheça Mais',
          contact: 'Entre em Contato'
        },
        scrollDown: 'Role para baixo'
      },
      about: {
        title: 'Sobre Mim',
        subtitle: 'Conheça minha jornada e paixão pelo desenvolvimento',
        heading: 'Quem sou eu?',
        description: 'Sou um Desenvolvedor Angular Senior apaixonado com mais de 8 anos de experiência em criar aplicações web excepcionais. Minha jornada no desenvolvimento de software tem sido impulsionada por uma profunda curiosidade pela tecnologia e um compromisso com a entrega de soluções de alta qualidade.',
        role: 'Desenvolvedor Angular Senior',
        features: {
          code: 'Código Limpo',
          performance: 'Performance',
          teamwork: 'Trabalho em Equipe',
          innovation: 'Inovação'
        },
        stats: {
          years: 'Anos',
          projects: 'Projetos',
          satisfaction: 'Satisfação'
        }
      },
      experience: {
        title: 'Experiência Profissional',
        subtitle: 'Jornada de 8+ anos em desenvolvimento frontend',
        responsibilitiesTitle: 'Principais Responsabilidades:',
        techStackTitle: 'Stack Tecnológica:'
      },
      footer: {
        copyright: '© 2024 Philip Ramkeerat. Todos os direitos reservados.'
      }
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Load saved language preference or default to English
    if (isPlatformBrowser(this.platformId)) {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
        this.currentLanguage.next(savedLanguage);
      }
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage.value;
  }

  setLanguage(language: Language): void {
    this.currentLanguage.next(language);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', language);
    }
  }

  getTranslations(): Translations {
    return this.translations[this.currentLanguage.value];
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations[this.currentLanguage.value];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }
} 
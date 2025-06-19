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
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontendCore: string;
      stylingUI: string;
      stateManagement: string;
      testing: string;
      performanceSEO: string;
      toolsDevOps: string;
    };
    skills: {
      angular: string;
      typescript: string;
      javascript: string;
      htmlCss: string;
      sass: string;
      materialDesign: string;
      bootstrap: string;
      cssFrameworks: string;
      rxjs: string;
      ngrx: string;
      angularSignals: string;
      stateManagement: string;
      jest: string;
      karma: string;
      cypress: string;
      storybook: string;
      ssr: string;
      performanceOptimization: string;
      seo: string;
      analytics: string;
      nxMonorepo: string;
      gitGithub: string;
      cicd: string;
      cloudPlatforms: string;
    };
    descriptions: {
      angular: string;
      typescript: string;
      javascript: string;
      htmlCss: string;
      sass: string;
      materialDesign: string;
      bootstrap: string;
      cssFrameworks: string;
      rxjs: string;
      ngrx: string;
      angularSignals: string;
      stateManagement: string;
      jest: string;
      karma: string;
      cypress: string;
      storybook: string;
      ssr: string;
      performanceOptimization: string;
      seo: string;
      analytics: string;
      nxMonorepo: string;
      gitGithub: string;
      cicd: string;
      cloudPlatforms: string;
    };
    summary: {
      title: string;
      expert: string;
      advanced: string;
      intermediate: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    heading: string;
    description: string;
    methods: {
      email: string;
      linkedin: string;
      github: string;
      location: string;
    };
    notes: {
      emailResponse: string;
      linkedinConnect: string;
      githubProjects: string;
      remoteAvailable: string;
    };
    availability: {
      title: string;
      status: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
      sendEmail: string;
      connectLinkedin: string;
    };
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
      skills: {
        title: 'Skills & Technologies',
        subtitle: 'Complete stack of a senior Angular developer',
        categories: {
          frontendCore: 'Frontend Core',
          stylingUI: 'Styling & UI',
          stateManagement: 'State Management',
          testing: 'Testing',
          performanceSEO: 'Performance & SEO',
          toolsDevOps: 'Tools & DevOps'
        },
        skills: {
          angular: 'Angular',
          typescript: 'TypeScript',
          javascript: 'JavaScript',
          htmlCss: 'HTML5 & CSS3',
          sass: 'SASS/SCSS',
          materialDesign: 'Material Design',
          bootstrap: 'Bootstrap',
          cssFrameworks: 'CSS Frameworks',
          rxjs: 'RxJS',
          ngrx: 'NgRx',
          angularSignals: 'Angular Signals',
          stateManagement: 'State Management',
          jest: 'Jest',
          karma: 'Karma',
          cypress: 'Cypress',
          storybook: 'Storybook',
          ssr: 'SSR (Server-Side Rendering)',
          performanceOptimization: 'Performance Optimization',
          seo: 'SEO',
          analytics: 'Analytics',
          nxMonorepo: 'Nx Monorepo',
          gitGithub: 'Git & GitHub',
          cicd: 'CI/CD',
          cloudPlatforms: 'Cloud Platforms'
        },
        descriptions: {
          angular: 'v2 to latest (v17+)',
          typescript: 'ES6+, Interfaces, Generics',
          javascript: 'ES6+, Async/Await, Promises',
          htmlCss: 'Semantics, Flexbox, Grid',
          sass: 'Mixins, Variables, Nesting',
          materialDesign: 'Angular Material, Theming',
          bootstrap: 'Responsive Design, Components',
          cssFrameworks: 'Tailwind, Bulma, Foundation',
          rxjs: 'Observables, Operators, Subjects',
          ngrx: 'Store, Effects, Selectors',
          angularSignals: 'Reactive Programming',
          stateManagement: 'Redux, MobX, Zustand',
          jest: 'Unit Testing, Mocking',
          karma: 'Test Runner, Coverage',
          cypress: 'E2E Testing, Component Testing',
          storybook: 'Component Documentation',
          ssr: 'Angular Universal',
          performanceOptimization: 'Lazy Loading, Tree Shaking',
          seo: 'Meta Tags, Structured Data',
          analytics: 'Google Analytics, Performance Monitoring',
          nxMonorepo: 'Workspace Management',
          gitGithub: 'Version Control, CI/CD',
          cicd: 'Jenkins, GitHub Actions, Azure DevOps',
          cloudPlatforms: 'AWS, Azure, Google Cloud'
        },
        summary: {
          title: 'Expertise Level',
          expert: 'Expert',
          advanced: 'Advanced',
          intermediate: 'Intermediate'
        }
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Let\'s work together on your next project',
        heading: 'Let\'s Talk!',
        description: 'I\'m always interested in new challenges and collaboration opportunities. If you have a project in mind or would like to discuss possibilities, don\'t hesitate to get in touch.',
        methods: {
          email: 'Email',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          location: 'Location'
        },
        notes: {
          emailResponse: 'Response within 24h',
          linkedinConnect: 'Connect professionally',
          githubProjects: 'See my projects',
          remoteAvailable: 'Available for remote projects'
        },
        availability: {
          title: 'Availability',
          status: 'Available for new projects',
          description: 'Currently working on freelance projects and open to interesting new opportunities.'
        },
        cta: {
          title: 'Ready to get started?',
          description: 'Let\'s transform your ideas into reality. Get in touch and let\'s discuss how I can help with your next project.',
          sendEmail: 'Send Email',
          connectLinkedin: 'Connect on LinkedIn'
        }
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
      skills: {
        title: 'Skills & Tecnologias',
        subtitle: 'Stack completa de um desenvolvedor Angular senior',
        categories: {
          frontendCore: 'Frontend Core',
          stylingUI: 'Styling & UI',
          stateManagement: 'State Management',
          testing: 'Testing',
          performanceSEO: 'Performance & SEO',
          toolsDevOps: 'Tools & DevOps'
        },
        skills: {
          angular: 'Angular',
          typescript: 'TypeScript',
          javascript: 'JavaScript',
          htmlCss: 'HTML5 & CSS3',
          sass: 'SASS/SCSS',
          materialDesign: 'Material Design',
          bootstrap: 'Bootstrap',
          cssFrameworks: 'CSS Frameworks',
          rxjs: 'RxJS',
          ngrx: 'NgRx',
          angularSignals: 'Angular Signals',
          stateManagement: 'State Management',
          jest: 'Jest',
          karma: 'Karma',
          cypress: 'Cypress',
          storybook: 'Storybook',
          ssr: 'SSR (Server-Side Rendering)',
          performanceOptimization: 'Performance Optimization',
          seo: 'SEO',
          analytics: 'Analytics',
          nxMonorepo: 'Nx Monorepo',
          gitGithub: 'Git & GitHub',
          cicd: 'CI/CD',
          cloudPlatforms: 'Cloud Platforms'
        },
        descriptions: {
          angular: 'v2 até latest (v17+)',
          typescript: 'ES6+, Interfaces, Generics',
          javascript: 'ES6+, Async/Await, Promises',
          htmlCss: 'Semântica, Flexbox, Grid',
          sass: 'Mixins, Variables, Nesting',
          materialDesign: 'Angular Material, Theming',
          bootstrap: 'Responsive Design, Components',
          cssFrameworks: 'Tailwind, Bulma, Foundation',
          rxjs: 'Observables, Operators, Subjects',
          ngrx: 'Store, Effects, Selectors',
          angularSignals: 'Reactive Programming',
          stateManagement: 'Redux, MobX, Zustand',
          jest: 'Unit Testing, Mocking',
          karma: 'Test Runner, Coverage',
          cypress: 'E2E Testing, Component Testing',
          storybook: 'Component Documentation',
          ssr: 'Angular Universal',
          performanceOptimization: 'Lazy Loading, Tree Shaking',
          seo: 'Meta Tags, Structured Data',
          analytics: 'Google Analytics, Performance Monitoring',
          nxMonorepo: 'Workspace Management',
          gitGithub: 'Version Control, CI/CD',
          cicd: 'Jenkins, GitHub Actions, Azure DevOps',
          cloudPlatforms: 'AWS, Azure, Google Cloud'
        },
        summary: {
          title: 'Nível de Expertise',
          expert: 'Expert',
          advanced: 'Advanced',
          intermediate: 'Intermediate'
        }
      },
      contact: {
        title: 'Entre em Contato',
        subtitle: 'Vamos trabalhar juntos no seu próximo projeto',
        heading: 'Vamos Conversar!',
        description: 'Estou sempre interessado em novos desafios e oportunidades de colaboração. Se você tem um projeto em mente ou gostaria de discutir possibilidades, não hesite em entrar em contato.',
        methods: {
          email: 'Email',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          location: 'Localização'
        },
        notes: {
          emailResponse: 'Resposta em até 24h',
          linkedinConnect: 'Conecte-se profissionalmente',
          githubProjects: 'Veja meus projetos',
          remoteAvailable: 'Disponível para projetos remotos'
        },
        availability: {
          title: 'Disponibilidade',
          status: 'Disponível para novos projetos',
          description: 'Atualmente trabalhando em projetos freelance e aberto a novas oportunidades interessantes.'
        },
        cta: {
          title: 'Pronto para começar?',
          description: 'Vamos transformar suas ideias em realidade. Entre em contato e vamos discutir como posso ajudar no seu próximo projeto.',
          sendEmail: 'Enviar Email',
          connectLinkedin: 'Conectar no LinkedIn'
        }
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
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
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
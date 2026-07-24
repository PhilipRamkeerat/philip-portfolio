export type Language = 'en' | 'pt';

export interface NavItem {
  id: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  impact: string[];
  stack: string[];
  badge: 'client' | 'open-source';
  link?: { label: string; url: string };
}

export interface SkillCategory {
  icon: 'code' | 'layers' | 'flask' | 'gauge';
  title: string;
  skills: string[];
}

export interface PortfolioContent {
  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    languageLabel: string;
    heroAriaLabel: string;
  };
  nav: NavItem[];
  hero: {
    availability: string;
    greeting: string;
    role: string;
    tagline: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    stats: { value: string; label: string }[];
    scrollHint: string;
  };
  about: {
    overline: string;
    title: string;
    paragraphs: string[];
    factsTitle: string;
    facts: { label: string; value: string }[];
    valuesTitle: string;
    values: { title: string; description: string }[];
    educationTitle: string;
    education: { institution: string; degree: string; period: string }[];
  };
  skills: {
    overline: string;
    title: string;
    subtitle: string;
    coreTitle: string;
    core: string[];
    categories: SkillCategory[];
  };
  experience: {
    overline: string;
    title: string;
    subtitle: string;
    currentLabel: string;
    highlightsLabel: string;
    items: ExperienceItem[];
  };
  projects: {
    overline: string;
    title: string;
    subtitle: string;
    clientBadge: string;
    openSourceBadge: string;
    items: ProjectItem[];
  };
  contact: {
    overline: string;
    title: string;
    description: string;
    emailCta: string;
    linkedinCta: string;
    availabilityTitle: string;
    availabilityStatus: string;
    availabilityNote: string;
    channels: { icon: 'mail' | 'linkedin' | 'github' | 'map-pin'; label: string; value: string; note: string; url?: string }[];
  };
  footer: {
    tagline: string;
    builtWith: string;
    rights: string;
    backToTop: string;
  };
}

const currentYear = new Date().getFullYear();

const en: PortfolioContent = {
  ui: {
    skipToContent: 'Skip to content',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    languageLabel: 'Language',
    heroAriaLabel: 'Introduction',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    availability: 'Open to new opportunities',
    greeting: "Hi, I'm Philip —",
    role: 'Senior Angular Developer',
    tagline: 'I build fast, accessible web applications at scale.',
    description:
      'For 8+ years I have been crafting high-performance frontends. Today I build micro-frontend platforms that serve millions of users for one of the largest retailers in Brazil.',
    ctaProjects: 'View my work',
    ctaContact: 'Get in touch',
    stats: [
      { value: '8+', label: 'Years of experience' },
      { value: '2 → 20', label: 'Angular versions mastered' },
      { value: 'Millions', label: 'Of users served' },
    ],
    scrollHint: 'Scroll to explore',
  },
  about: {
    overline: 'About',
    title: 'Engineer with a product mindset',
    paragraphs: [
      'I am a Senior Angular Developer focused on building web applications that are fast, accessible and maintainable. My work sits at the intersection of solid engineering — clean architecture, testing, performance — and the empathy needed to ship products people actually enjoy using.',
      'I have delivered software for industry research institutes and for one of the largest retail operations in Brazil, working on high-traffic platforms where every millisecond and every accessibility detail matters. I care deeply about doing things properly: SOLID principles, meaningful tests and honest code reviews.',
    ],
    factsTitle: 'Quick facts',
    facts: [
      { label: 'Location', value: 'Brazil · Remote-friendly' },
      { label: 'Languages', value: 'Portuguese · English' },
      { label: 'Focus', value: 'Angular · Micro frontends' },
      { label: 'Currently at', value: 'GFT Technologies' },
    ],
    valuesTitle: 'What drives me',
    values: [
      { title: 'Craftsmanship', description: 'Clean, tested code that the next developer will thank you for.' },
      { title: 'Performance', description: 'Fast experiences are a feature — I treat Core Web Vitals as requirements.' },
      { title: 'Collaboration', description: 'The best software is built by teams that communicate openly.' },
      { title: 'Continuous learning', description: 'From Angular 2 to 20 — I evolve with the platform, every release.' },
    ],
    educationTitle: 'Education',
    education: [
      { institution: 'Universidade Federal do Pará', degree: "Master's degree, Process Engineering", period: '2017 – 2018' },
      { institution: 'UniNorte', degree: 'Bachelor in Computer Science', period: '2014 – 2017' },
    ],
  },
  skills: {
    overline: 'Skills',
    title: 'The tools I use to ship',
    subtitle: 'No inflated percentage bars — just the stack I work with every day, grouped by how I actually use it.',
    coreTitle: 'Core stack',
    core: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'NgRx', 'SCSS', 'Jest', 'Nx'],
    categories: [
      {
        icon: 'code',
        title: 'Angular ecosystem',
        skills: ['Angular 2 → 20', 'Standalone APIs', 'Signals & zoneless', 'RxJS', 'NgRx', 'Module Federation', 'Micro frontends', 'Nx monorepos'],
      },
      {
        icon: 'layers',
        title: 'UI engineering',
        skills: ['SCSS · BEM', 'Design systems', 'Angular Material', 'Tailwind CSS', 'Responsive design', 'Accessibility (a11y)', 'Storybook', 'Design tokens'],
      },
      {
        icon: 'flask',
        title: 'Quality & testing',
        skills: ['Jest', 'Jasmine · Karma', 'Cypress', 'Unit & E2E testing', 'Clean Code', 'SOLID', 'Code review', 'Pair programming'],
      },
      {
        icon: 'gauge',
        title: 'Platform & performance',
        skills: ['SSR & hydration', 'Core Web Vitals', 'SEO', 'Lazy loading', 'CI/CD pipelines', 'Azure DevOps', 'Docker', 'Git'],
      },
    ],
  },
  experience: {
    overline: 'Experience',
    title: 'Where I have worked',
    subtitle: 'Eight years shipping frontend software — from research institutes to retail at national scale.',
    currentLabel: 'Current',
    highlightsLabel: 'Highlights',
    items: [
      {
        role: 'Senior Frontend Developer',
        company: 'GFT Technologies',
        period: 'Aug 2021 – Present',
        current: true,
        summary:
          'Building and evolving high-traffic Angular applications for one of the largest retail companies in Brazil — a platform with millions of transactions per year, delivered as micro frontends with Module Federation.',
        highlights: [
          'Develop high-traffic micro frontends consumed by millions of users',
          'Drive scalable, modular delivery with Module Federation',
          'Own performance, maintainability and unit-test coverage (Jest)',
          'Collaborate daily with design and backend teams, applying Clean Code and SOLID',
        ],
        stack: ['Angular 17+', 'TypeScript', 'RxJS', 'Module Federation', 'SCSS', 'Jest'],
      },
      {
        role: 'Software Developer II',
        company: 'INDT — Institute of Technology Development',
        period: 'Nov 2019 – Aug 2021',
        summary:
          'Frontend-focused development across multiple R&D projects in agile teams, from responsive UIs to REST API integrations.',
        highlights: [
          'Built Angular applications applying Clean Code and SOLID principles',
          'Integrated REST APIs with Node.js services',
          'Worked with Docker, GitLab and CI/CD pipelines',
          'Contributed across the stack: Express, Spring Boot, PostgreSQL, MongoDB',
        ],
        stack: ['Angular', 'TypeScript', 'Node.js', 'SCSS', 'Docker', 'CI/CD'],
      },
      {
        role: 'Software Developer',
        company: 'INDT — Institute of Technology Development',
        period: 'May 2017 – Nov 2019',
        summary:
          'Developed and maintained web applications, delivering robust interfaces and steady performance improvements.',
        highlights: [
          'Shipped new features and maintained Angular and jQuery codebases',
          'Improved performance and cross-browser compatibility',
          'Worked in agile SCRUM teams',
        ],
        stack: ['Angular', 'JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      },
    ],
  },
  projects: {
    overline: 'Projects',
    title: 'Selected work',
    subtitle: 'A snapshot of what I have built — client platforms under NDA and open-source work you can inspect.',
    clientBadge: 'Client work',
    openSourceBadge: 'Open source',
    items: [
      {
        title: 'Retail micro-frontend platform',
        category: 'E-commerce at national scale',
        description:
          'High-traffic Angular platform for one of the largest retail chains in Brazil, decomposed into micro frontends with Module Federation for independent, scalable delivery.',
        impact: ['Serves millions of users with sub-second page loads', 'Independent deployments across multiple squads'],
        stack: ['Angular 17+', 'Module Federation', 'RxJS', 'SCSS', 'Jest'],
        badge: 'client',
      },
      {
        title: 'Enterprise Angular monorepo',
        category: 'Fintech tooling',
        description:
          'Nx monorepo with reusable component libraries, shared services and automated CI/CD pipelines on Azure DevOps — a foundation multiple teams build on.',
        impact: ['Shared UI library adopted across teams', 'Automated quality gates on every pull request'],
        stack: ['Nx', 'Angular', 'NgRx', 'TypeScript', 'Azure DevOps'],
        badge: 'client',
      },
      {
        title: 'IoT dashboard & analytics',
        category: 'Industrial R&D',
        description:
          'Real-time monitoring dashboard for industrial IoT devices at INDT, combining REST and WebSocket data streams with a component-driven UI.',
        impact: ['Live device telemetry with WebSocket streaming', 'Deployed with Docker in CI/CD pipelines'],
        stack: ['Angular', 'WebSockets', 'Node.js', 'Angular Material', 'Docker'],
        badge: 'client',
      },
      {
        title: 'This portfolio',
        category: 'Angular 20 · SSR · Signals',
        description:
          'The site you are reading — a zoneless, signal-based Angular 20 application with server-side rendering, custom design system, i18n and scroll-driven animations built from scratch. No UI libraries.',
        impact: ['100% hand-crafted design system in SCSS', 'SSR + hydration with event replay for instant loads'],
        stack: ['Angular 20', 'Signals', 'SSR', 'SCSS', 'TypeScript'],
        badge: 'open-source',
        link: { label: 'View source', url: 'https://github.com/PhilipRamkeerat/philip-portfolio' },
      },
    ],
  },
  contact: {
    overline: 'Contact',
    title: "Let's build something great",
    description:
      "I am always open to discussing new opportunities, interesting projects or just talking shop about Angular. Email is the fastest way to reach me — I usually reply within 24 hours.",
    emailCta: 'Send me an email',
    linkedinCta: 'Connect on LinkedIn',
    availabilityTitle: 'Availability',
    availabilityStatus: 'Open to new opportunities',
    availabilityNote: 'Senior frontend roles · consulting · remote-first',
    channels: [
      { icon: 'mail', label: 'Email', value: 'philip_ramkeerat@hotmail.com', note: 'Replies within 24h', url: 'mailto:philip_ramkeerat@hotmail.com' },
      { icon: 'linkedin', label: 'LinkedIn', value: 'in/philip-ramkeerat', note: 'Professional network', url: 'https://www.linkedin.com/in/philip-ramkeerat/' },
      { icon: 'github', label: 'GitHub', value: 'PhilipRamkeerat', note: 'Code & experiments', url: 'https://github.com/PhilipRamkeerat' },
      { icon: 'map-pin', label: 'Location', value: 'Brazil', note: 'Remote-friendly (UTC−3)' },
    ],
  },
  footer: {
    tagline: 'Designed & built by Philip Ramkeerat',
    builtWith: 'Angular 20 · SSR · Signals · SCSS',
    rights: `© ${currentYear} Philip Ramkeerat. All rights reserved.`,
    backToTop: 'Back to top',
  },
};

const pt: PortfolioContent = {
  ui: {
    skipToContent: 'Pular para o conteúdo',
    openMenu: 'Abrir menu de navegação',
    closeMenu: 'Fechar menu de navegação',
    switchToLight: 'Mudar para tema claro',
    switchToDark: 'Mudar para tema escuro',
    languageLabel: 'Idioma',
    heroAriaLabel: 'Introdução',
  },
  nav: [
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
  ],
  hero: {
    availability: 'Aberto a novas oportunidades',
    greeting: 'Olá, eu sou o Philip —',
    role: 'Desenvolvedor Angular Sênior',
    tagline: 'Construo aplicações web rápidas e acessíveis em grande escala.',
    description:
      'Há mais de 8 anos desenvolvo frontends de alta performance. Hoje construo plataformas de micro frontends que atendem milhões de usuários para uma das maiores varejistas do Brasil.',
    ctaProjects: 'Ver meu trabalho',
    ctaContact: 'Entrar em contato',
    stats: [
      { value: '8+', label: 'Anos de experiência' },
      { value: '2 → 20', label: 'Versões do Angular dominadas' },
      { value: 'Milhões', label: 'De usuários atendidos' },
    ],
    scrollHint: 'Role para explorar',
  },
  about: {
    overline: 'Sobre',
    title: 'Engenheiro com mentalidade de produto',
    paragraphs: [
      'Sou um Desenvolvedor Angular Sênior focado em construir aplicações web rápidas, acessíveis e fáceis de manter. Meu trabalho une engenharia sólida — arquitetura limpa, testes, performance — com a empatia necessária para entregar produtos que as pessoas realmente gostam de usar.',
      'Já entreguei software para institutos de pesquisa e para uma das maiores operações de varejo do Brasil, atuando em plataformas de alto tráfego onde cada milissegundo e cada detalhe de acessibilidade importam. Faço questão de fazer as coisas direito: princípios SOLID, testes que fazem sentido e code reviews honestos.',
    ],
    factsTitle: 'Resumo rápido',
    facts: [
      { label: 'Localização', value: 'Brasil · Remoto' },
      { label: 'Idiomas', value: 'Português · Inglês' },
      { label: 'Foco', value: 'Angular · Micro frontends' },
      { label: 'Atualmente na', value: 'GFT Technologies' },
    ],
    valuesTitle: 'O que me move',
    values: [
      { title: 'Excelência técnica', description: 'Código limpo e testado, pelo qual o próximo dev vai agradecer.' },
      { title: 'Performance', description: 'Velocidade é feature — trato Core Web Vitals como requisito.' },
      { title: 'Colaboração', description: 'O melhor software nasce de times que se comunicam abertamente.' },
      { title: 'Aprendizado contínuo', description: 'Do Angular 2 ao 20 — evoluo junto com a plataforma, a cada release.' },
    ],
    educationTitle: 'Formação',
    education: [
      { institution: 'Universidade Federal do Pará', degree: 'Mestrado, Engenharia de Processos', period: '2017 – 2018' },
      { institution: 'UniNorte', degree: 'Bacharelado em Ciência da Computação', period: '2014 – 2017' },
    ],
  },
  skills: {
    overline: 'Habilidades',
    title: 'As ferramentas com que eu entrego',
    subtitle: 'Sem barras de porcentagem infladas — apenas a stack que uso todos os dias, agrupada por como eu realmente a utilizo.',
    coreTitle: 'Stack principal',
    core: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'NgRx', 'SCSS', 'Jest', 'Nx'],
    categories: [
      {
        icon: 'code',
        title: 'Ecossistema Angular',
        skills: ['Angular 2 → 20', 'Standalone APIs', 'Signals & zoneless', 'RxJS', 'NgRx', 'Module Federation', 'Micro frontends', 'Monorepos Nx'],
      },
      {
        icon: 'layers',
        title: 'Engenharia de UI',
        skills: ['SCSS · BEM', 'Design systems', 'Angular Material', 'Tailwind CSS', 'Design responsivo', 'Acessibilidade (a11y)', 'Storybook', 'Design tokens'],
      },
      {
        icon: 'flask',
        title: 'Qualidade & testes',
        skills: ['Jest', 'Jasmine · Karma', 'Cypress', 'Testes unitários & E2E', 'Clean Code', 'SOLID', 'Code review', 'Pair programming'],
      },
      {
        icon: 'gauge',
        title: 'Plataforma & performance',
        skills: ['SSR & hydration', 'Core Web Vitals', 'SEO', 'Lazy loading', 'Pipelines CI/CD', 'Azure DevOps', 'Docker', 'Git'],
      },
    ],
  },
  experience: {
    overline: 'Experiência',
    title: 'Onde já trabalhei',
    subtitle: 'Oito anos entregando software frontend — de institutos de pesquisa ao varejo em escala nacional.',
    currentLabel: 'Atual',
    highlightsLabel: 'Destaques',
    items: [
      {
        role: 'Desenvolvedor Frontend Sênior',
        company: 'GFT Technologies',
        period: 'Ago 2021 – Presente',
        current: true,
        summary:
          'Construção e evolução de aplicações Angular de alto tráfego para uma das maiores varejistas do Brasil — uma plataforma com milhões de transações por ano, entregue como micro frontends com Module Federation.',
        highlights: [
          'Desenvolvo micro frontends de alto tráfego usados por milhões de usuários',
          'Entrego de forma escalável e modular com Module Federation',
          'Sou responsável por performance, manutenibilidade e cobertura de testes (Jest)',
          'Colaboro diariamente com times de design e backend, aplicando Clean Code e SOLID',
        ],
        stack: ['Angular 17+', 'TypeScript', 'RxJS', 'Module Federation', 'SCSS', 'Jest'],
      },
      {
        role: 'Software Developer II',
        company: 'INDT — Instituto de Desenvolvimento Tecnológico',
        period: 'Nov 2019 – Ago 2021',
        summary:
          'Desenvolvimento com foco em frontend em múltiplos projetos de P&D em times ágeis, de UIs responsivas a integrações com APIs REST.',
        highlights: [
          'Construí aplicações Angular aplicando Clean Code e princípios SOLID',
          'Integrei APIs REST com serviços Node.js',
          'Trabalhei com Docker, GitLab e pipelines CI/CD',
          'Contribuí em toda a stack: Express, Spring Boot, PostgreSQL, MongoDB',
        ],
        stack: ['Angular', 'TypeScript', 'Node.js', 'SCSS', 'Docker', 'CI/CD'],
      },
      {
        role: 'Software Developer',
        company: 'INDT — Instituto de Desenvolvimento Tecnológico',
        period: 'Mai 2017 – Nov 2019',
        summary:
          'Desenvolvimento e manutenção de aplicações web, entregando interfaces robustas e melhorias constantes de performance.',
        highlights: [
          'Entreguei novas funcionalidades e mantive bases de código Angular e jQuery',
          'Melhorei performance e compatibilidade entre navegadores',
          'Atuei em times ágeis com SCRUM',
        ],
        stack: ['Angular', 'JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      },
    ],
  },
  projects: {
    overline: 'Projetos',
    title: 'Trabalhos selecionados',
    subtitle: 'Um recorte do que já construí — plataformas de clientes sob NDA e trabalho open source que você pode inspecionar.',
    clientBadge: 'Projeto de cliente',
    openSourceBadge: 'Open source',
    items: [
      {
        title: 'Plataforma de micro frontends para varejo',
        category: 'E-commerce em escala nacional',
        description:
          'Plataforma Angular de alto tráfego para uma das maiores redes varejistas do Brasil, decomposta em micro frontends com Module Federation para entregas independentes e escaláveis.',
        impact: ['Atende milhões de usuários com carregamento sub-segundo', 'Deploys independentes entre múltiplas squads'],
        stack: ['Angular 17+', 'Module Federation', 'RxJS', 'SCSS', 'Jest'],
        badge: 'client',
      },
      {
        title: 'Monorepo Angular corporativo',
        category: 'Ferramentas para fintech',
        description:
          'Monorepo Nx com bibliotecas de componentes reutilizáveis, serviços compartilhados e pipelines CI/CD automatizados no Azure DevOps — uma fundação sobre a qual vários times constroem.',
        impact: ['Biblioteca de UI compartilhada adotada por vários times', 'Quality gates automatizados em todo pull request'],
        stack: ['Nx', 'Angular', 'NgRx', 'TypeScript', 'Azure DevOps'],
        badge: 'client',
      },
      {
        title: 'Dashboard IoT & analytics',
        category: 'P&D industrial',
        description:
          'Dashboard de monitoramento em tempo real para dispositivos IoT industriais no INDT, combinando fluxos de dados REST e WebSocket em uma UI orientada a componentes.',
        impact: ['Telemetria de dispositivos ao vivo via WebSocket', 'Deploy com Docker em pipelines CI/CD'],
        stack: ['Angular', 'WebSockets', 'Node.js', 'Angular Material', 'Docker'],
        badge: 'client',
      },
      {
        title: 'Este portfólio',
        category: 'Angular 20 · SSR · Signals',
        description:
          'O site que você está lendo — uma aplicação Angular 20 zoneless e baseada em signals, com renderização no servidor, design system próprio, i18n e animações de scroll construídas do zero. Sem bibliotecas de UI.',
        impact: ['Design system 100% artesanal em SCSS', 'SSR + hydration com event replay para carregamento instantâneo'],
        stack: ['Angular 20', 'Signals', 'SSR', 'SCSS', 'TypeScript'],
        badge: 'open-source',
        link: { label: 'Ver código-fonte', url: 'https://github.com/PhilipRamkeerat/philip-portfolio' },
      },
    ],
  },
  contact: {
    overline: 'Contato',
    title: 'Vamos construir algo incrível',
    description:
      'Estou sempre aberto a conversar sobre novas oportunidades, projetos interessantes ou simplesmente trocar ideias sobre Angular. Email é o caminho mais rápido — costumo responder em até 24 horas.',
    emailCta: 'Enviar um email',
    linkedinCta: 'Conectar no LinkedIn',
    availabilityTitle: 'Disponibilidade',
    availabilityStatus: 'Aberto a novas oportunidades',
    availabilityNote: 'Vagas sênior de frontend · consultoria · remote-first',
    channels: [
      { icon: 'mail', label: 'Email', value: 'philip_ramkeerat@hotmail.com', note: 'Resposta em até 24h', url: 'mailto:philip_ramkeerat@hotmail.com' },
      { icon: 'linkedin', label: 'LinkedIn', value: 'in/philip-ramkeerat', note: 'Rede profissional', url: 'https://www.linkedin.com/in/philip-ramkeerat/' },
      { icon: 'github', label: 'GitHub', value: 'PhilipRamkeerat', note: 'Código & experimentos', url: 'https://github.com/PhilipRamkeerat' },
      { icon: 'map-pin', label: 'Localização', value: 'Brasil', note: 'Remoto (UTC−3)' },
    ],
  },
  footer: {
    tagline: 'Projetado & desenvolvido por Philip Ramkeerat',
    builtWith: 'Angular 20 · SSR · Signals · SCSS',
    rights: `© ${currentYear} Philip Ramkeerat. Todos os direitos reservados.`,
    backToTop: 'Voltar ao topo',
  },
};

export const CONTENT: Record<Language, PortfolioContent> = { en, pt };

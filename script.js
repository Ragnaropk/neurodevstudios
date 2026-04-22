const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const html = document.documentElement;

let btnEs = null;
let btnEn = null;
let btnPt = null;

const pageName = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

function setText(selector, text) {
  const nodes = document.querySelectorAll(selector);
  if (!nodes.length) return;
  nodes.forEach(node => {
    node.textContent = text;
  });
}

function setTexts(selector, texts) {
  const nodes = document.querySelectorAll(selector);
  if (!nodes.length) return;
  nodes.forEach((node, index) => {
    if (texts[index] !== undefined) {
      node.textContent = texts[index];
    }
  });
}

function setHtml(selector, htmlValue) {
  const nodes = document.querySelectorAll(selector);
  if (!nodes.length) return;
  nodes.forEach(node => {
    node.innerHTML = htmlValue;
  });
}

function setScopedText(root, selector, text) {
  if (!root) return;
  const nodes = root.querySelectorAll(selector);
  if (!nodes.length) return;
  nodes.forEach(node => {
    node.textContent = text;
  });
}

function setScopedTexts(root, selector, texts) {
  if (!root) return;
  const nodes = root.querySelectorAll(selector);
  if (!nodes.length) return;
  nodes.forEach((node, index) => {
    if (texts[index] !== undefined) {
      node.textContent = texts[index];
    }
  });
}

function setScopedHtml(root, selector, htmlValue) {
  if (!root) return;
  const nodes = root.querySelectorAll(selector);
  if (!nodes.length) return;
  nodes.forEach(node => {
    node.innerHTML = htmlValue;
  });
}

function setMetaDescription(content) {
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", content);
  }
}

function setPageTitle(title) {
  document.title = title;
}

function ensureLanguageSwitch() {
  const langSwitch = document.querySelector(".lang-switch");
  if (!langSwitch) return;

  langSwitch.innerHTML = `
    <button id="btn-es" class="lang-btn" type="button">ES</button>
    <button id="btn-en" class="lang-btn" type="button">EN</button>
    <button id="btn-pt" class="lang-btn" type="button">PT</button>
  `;

  btnEs = document.getElementById("btn-es");
  btnEn = document.getElementById("btn-en");
  btnPt = document.getElementById("btn-pt");

  if (btnEs) {
    btnEs.addEventListener("click", () => setLanguage("es"));
  }

  if (btnEn) {
    btnEn.addEventListener("click", () => setLanguage("en"));
  }

  if (btnPt) {
    btnPt.addEventListener("click", () => setLanguage("pt"));
  }
}

function translateCommon(lang) {
  const nav = {
    es: ["Inicio", "Proyectos", "Servicios", "Productos", "Labs", "Lab Notes", "Sobre", "Contacto"],
    en: ["Home", "Projects", "Services", "Products", "Labs", "Lab Notes", "About", "Contact"],
    pt: ["In\u00edcio", "Projetos", "Servi\u00e7os", "Produtos", "Labs", "Notas", "Sobre", "Contato"],
  };

  const menuLabel = {
    es: "Abrir men\u00fa",
    en: "Open menu",
    pt: "Abrir menu",
  };

  setTexts(".nav-links > a", nav[lang]);
  setText(".menu-toggle", "\u2630");
  if (menuToggle) {
    menuToggle.setAttribute("aria-label", menuLabel[lang]);
  }
}

function translateIndex(lang) {
  const titles = {
    es: {
      title: "NeuroDev Studios | Desarrollo Web y Presencia Digital",
      description:
        "Estudio digital para psicólogos, negocios y profesionales: desarrollo web, presencia digital, productos SaaS y experimentos tecnológicos.",
    },
    en: {
      title: "NeuroDev Studios | Web Development and Digital Presence",
      description:
        "Digital studio for psychologists, businesses and professionals: web development, digital presence, SaaS products and technology experiments.",
    },
    pt: {
      title: "NeuroDev Studios | Desenvolvimento Web e Presença Digital",
      description:
        "Estúdio digital para psicólogos, negócios e profissionais: desenvolvimento web, presença digital, produtos SaaS e experimentos tecnológicos.",
    },
  };

  setPageTitle(titles[lang].title);
  setMetaDescription(titles[lang].description);

  const [hero, build, projects, products, lab, next] = document.querySelectorAll("main > section");

  if (hero) {
    setScopedText(hero, ".hero-copy .eyebrow", {
      es: "Desarrollo web, presencia digital y producto",
      en: "Founder-led digital studio",
      pt: "Estúdio digital liderado pelo fundador",
    }[lang]);

    setScopedHtml(hero, ".hero-copy h1", {
      es: 'Desarrollo web claro, <span>presencia digital</span> y productos con visión de laboratorio.',
      en: 'Building <span>digital systems</span>, online presence and products with a lab-driven vision.',
      pt: 'Construindo <span>sistemas digitais</span>, presença online e produtos com visão de laboratório.',
    }[lang]);

    setScopedText(hero, ".hero-copy > p", {
      es:
        "NeuroDev Studios crea sitios web, presencia digital y productos propios para psicólogos, negocios y profesionales que necesitan verse bien y crecer con una base sólida.",
      en:
        "NeuroDev Studios is a digital studio focused on web development, online presence, SaaS products and technology experiments born from real-world testing.",
      pt:
        "NeuroDev Studios é um estúdio digital focado em desenvolvimento web, presença online, produtos SaaS e experimentos tecnológicos nascidos de testes reais.",
    }[lang]);

    setScopedTexts(hero, ".hero-actions a", {
      es: ["Ver proyectos", "Hablemos"],
      en: ["View projects", "Work with me"],
      pt: ["Ver projetos", "Trabalhar comigo"],
    }[lang]);

    setScopedTexts(hero, ".hero-stats .stat-card span", {
      es: ["sitios web desarrollados", "negocios gestionados en Google", "audiencia en TikTok"],
      en: ["websites built", "businesses managed on Google", "TikTok audience"],
      pt: ["sites desenvolvidos", "negócios gerenciados no Google", "audiência no TikTok"],
    }[lang]);

    setScopedText(hero, ".showcase-main .mini-label", {
      es: "Resumen del estudio",
      en: "Studio Snapshot",
      pt: "Resumo do estúdio",
    }[lang]);

    setScopedText(hero, ".showcase-main h3", "Web · Products · Labs");

    setScopedText(hero, ".showcase-main p", {
      es: "Un estudio pequeño con base en proyectos reales, construcción autodidacta y visión de producto.",
      en: "A small studio built on real projects, self-taught execution and a product-driven mindset.",
      pt: "Um estúdio pequeno baseado em projetos reais, construção autodidata e visão de produto.",
    }[lang]);

    setScopedTexts(hero, ".showcase-mini strong", {
      es: [
        "Psicólogos, negocios y profesionales",
        "Plataforma psicométrica + RR. HH.",
        "Multi-seat, Aster, Minecraft, Thiago",
        "SEO local y contenido digital",
      ],
      en: [
        "Psychologists, businesses and professionals",
        "Psychometric platform + HR",
        "Multi-seat, Aster, Minecraft, Thiago",
        "Local SEO and digital content",
      ],
      pt: [
        "Psicólogos, negócios e profissionais",
        "Plataforma psicométrica + RH",
        "Multi-seat, Aster, Minecraft, Thiago",
        "SEO local e conteúdo digital",
      ],
    }[lang]);
  }

  if (build) {
    setScopedText(build, ".section-head h2", {
      es: "Qué construye el estudio",
      en: "What the studio builds",
      pt: "O que o estúdio constrói",
    }[lang]);
    setScopedText(build, ".section-head p", {
      es: "NeuroDev Studios no gira alrededor de una sola habilidad. Combina ejecución práctica, productos propios y experimentación tecnológica.",
      en: "NeuroDev Studios is not built around a single skill. It combines practical execution, in-house products and technology experimentation.",
      pt: "NeuroDev Studios não gira em torno de uma única habilidade. Combina execução prática, produtos próprios e experimentação tecnológica.",
    }[lang]);

    setScopedTexts(build, ".cards-grid .card h3", {
      es: ["Desarrollo web", "Productos", "Labs"],
      en: ["Web development", "Products", "Labs"],
      pt: ["Desenvolvimento web", "Produtos", "Labs"],
    }[lang]);

    setScopedTexts(build, ".cards-grid .card p", {
      es: [
        "Micro-sitios y páginas profesionales para psicólogos, negocios, profesionales e instituciones.",
        "SaaS y herramientas digitales en construcción a partir de problemas reales detectados en campo.",
        "Pruebas técnicas, sistemas multi-seat, optimización de Minecraft y conceptos como Thiago.",
      ],
      en: [
        "Micro-sites and professional pages for psychologists, businesses, professionals and institutions.",
        "SaaS and digital tools built from real problems detected in the field.",
        "Technical tests, multi-seat systems, Minecraft optimization and concepts like Thiago.",
      ],
      pt: [
        "Micro-sites e páginas profissionais para psicólogos, negócios, profissionais e instituições.",
        "SaaS e ferramentas digitais em construção a partir de problemas reais detectados em campo.",
        "Testes técnicos, sistemas multi-seat, otimização de Minecraft e conceitos como Thiago.",
      ],
    }[lang]);
  }

  if (projects) {
    setScopedText(projects, ".section-head h2", {
      es: "Proyectos reales",
      en: "Real projects",
      pt: "Projetos reais",
    }[lang]);
    setScopedText(projects, ".section-head p", {
      es: "Una muestra rápida de trabajos desarrollados para clientes reales.",
      en: "A quick look at work developed for real clients.",
      pt: "Uma amostra rápida de trabalhos desenvolvidos para clientes reais.",
    }[lang]);

    setScopedTexts(projects, ".project-visual-grid .visual-type", {
      es: ["Psicología", "Psicología", "Psicología"],
      en: ["Psychology", "Psychology", "Psychology"],
      pt: ["Psicologia", "Psicologia", "Psicologia"],
    }[lang]);

    setScopedTexts(projects, ".project-visual-grid .visual-body h3", ["Jorge Wagner", "Jesús García Chávez", "Marcela Miranda"]);

    setScopedTexts(projects, ".project-visual-grid .visual-body p", {
      es: [
        "Sitio profesional con enfoque moderno y presencia clara para consulta psicológica.",
        "Página con estilo institucional, clara y enfocada en información profesional.",
        "Sitio con tono más cálido y cercano, ideal para generar confianza en pacientes.",
      ],
      en: [
        "Professional site with a modern focus and clear presence for psychological practice.",
        "Institutional-style page, clear and focused on professional information.",
        "A warmer, more approachable site, ideal for building trust with patients.",
      ],
      pt: [
        "Site profissional com abordagem moderna e presença clara para consulta psicológica.",
        "Página com estilo institucional, clara e focada em informação profissional.",
        "Site com tom mais acolhedor e próximo, ideal para gerar confiança em pacientes.",
      ],
    }[lang]);

    setScopedTexts(projects, ".project-visual-grid .visual-actions a", {
      es: ["Ver sitio →", "Ver sitio →", "Ver sitio →"],
      en: ["View site →", "View site →", "View site →"],
      pt: ["Ver site →", "Ver site →", "Ver site →"],
    }[lang]);
  }

  if (products) {
    setScopedText(products, ".section-head h2", {
      es: "Productos y visión",
      en: "Products and vision",
      pt: "Produtos e visão",
    }[lang]);
    setScopedText(products, ".section-head p", {
      es: "La meta del estudio no es quedarse solo en servicios. Es convertir experiencia real en propiedad propia.",
      en: "The studio's goal is not to stay in services alone. It is to turn real experience into owned products.",
      pt: "A meta do estúdio não é ficar só em serviços. É transformar experiência real em propriedade própria.",
    }[lang]);

    setScopedTexts(products, ".card h3", {
      es: ["Psychometric Platform", "HR Evaluation Platform", "NeuroDev Studios"],
      en: ["Psychometric Platform", "HR Evaluation Platform", "NeuroDev Studios"],
      pt: ["Plataforma psicométrica", "Plataforma de avaliação de RH", "NeuroDev Studios"],
    }[lang]);

    setScopedTexts(products, ".card p", {
      es: [
        "Sistema para pruebas psicométricas enfocado en psicólogos y procesos digitales más profesionales.",
        "Plataforma para recursos humanos con enfoque en evaluación, flujo y estructura de reclutamiento.",
        "Servicios que hoy financian la construcción de software y sistemas más grandes para mañana.",
      ],
      en: [
        "System for psychometric tests focused on psychologists and more professional digital processes.",
        "Platform for human resources focused on evaluation, flow and recruitment structure.",
        "Services that today fund the building of larger software and systems for tomorrow.",
      ],
      pt: [
        "Sistema para testes psicométricos focado em psicólogos e processos digitais mais profissionais.",
        "Plataforma para recursos humanos com foco em avaliação, fluxo e estrutura de recrutamento.",
        "Serviços que hoje financiam a construção de software e sistemas maiores para amanhã.",
      ],
    }[lang]);
  }

  if (lab) {
    setScopedText(lab, ".section-head h2", {
      es: "Dentro del laboratorio",
      en: "Inside the lab",
      pt: "Dentro do laboratório",
    }[lang]);
    setScopedText(lab, ".section-head p", {
      es: "La parte que le da personalidad al estudio: pruebas reales, gaming como laboratorio y sistemas raros con potencial real.",
      en: "The part that gives the studio its personality: real tests, gaming as a lab and unusual systems with real potential.",
      pt: "A parte que dá personalidade ao estúdio: testes reais, gaming como laboratório e sistemas incomuns com potencial real.",
    }[lang]);

    setScopedTexts(lab, ".lab-preview .featured-tag", {
      es: ["Systems", "Performance", "Future"],
      en: ["Systems", "Performance", "Future"],
      pt: ["Sistemas", "Desempenho", "Futuro"],
    }[lang]);

    setScopedTexts(lab, ".lab-preview h3", {
      es: ["1 PC → múltiples estaciones", "Minecraft como laboratorio técnico", "Thiago"],
      en: ["1 PC → multiple stations", "Minecraft as a technical lab", "Thiago"],
      pt: ["1 PC → múltiplas estações", "Minecraft como laboratório técnico", "Thiago"],
    }[lang]);

    setScopedTexts(lab, ".lab-preview p", {
      es: [
        "Implementaciones multi-seat con validación real, ahorro de costos y visión hacia un software propio.",
        "Pruebas de rendimiento con APUs AMD, RX 580, mods, shaders y doble instancia.",
        "Exploración de un asistente más humano, útil y presente dentro de una visión de largo plazo.",
      ],
      en: [
        "Multi-seat implementations with real validation, cost savings and a path toward proprietary software.",
        "Performance tests with AMD APUs, RX 580, mods, shaders and dual-instance scenarios.",
        "An exploration of a more human, useful and present assistant within a long-term vision.",
      ],
      pt: [
        "Implementações multi-seat com validação real, economia de custos e visão para um software próprio.",
        "Testes de desempenho com APUs AMD, RX 580, mods, shaders e cenários de dupla instância.",
        "Exploração de um assistente mais humano, útil e presente dentro de uma visão de longo prazo.",
      ],
    }[lang]);

    setScopedTexts(lab, ".section-cta a", {
      es: ["Explorar Labs", "Leer Lab Notes"],
      en: ["Explore Labs", "Read Lab Notes"],
      pt: ["Explorar Labs", "Ler Lab Notes"],
    }[lang]);
  }

  if (next) {
    setScopedText(next, ".section-head.left h2", {
      es: "¿Qué sigue?",
      en: "What's next?",
      pt: "E agora?",
    }[lang]);
    setScopedText(next, ".section-head.left p", {
      es: "Si necesitas una web, presencia digital o quieres construir algo más serio, aquí hay base para hacerlo bien.",
      en: "If you need a website, digital presence or want to build something more serious, there is a solid base here.",
      pt: "Se você precisa de um site, presença digital ou quer construir algo mais sério, aqui existe base para fazer bem.",
    }[lang]);

    setScopedTexts(next, ".contact-actions a", {
      es: ["Contactar estudio", "Ver portafolio completo"],
      en: ["Contact the studio", "View full portfolio"],
      pt: ["Contatar o estúdio", "Ver portfólio completo"],
    }[lang]);

    setScopedText(next, ".contact-note h3", {
      es: "Base actual",
      en: "Current foundation",
      pt: "Base atual",
    }[lang]);

    setScopedTexts(next, ".contact-note li", {
      es: [
        "Webs para psicólogos y profesionales",
        "Google Business y visibilidad local",
        "Community management y contenido",
        "Productos SaaS en desarrollo",
        "Laboratorio técnico activo",
      ],
      en: [
        "Websites for psychologists and professionals",
        "Google Business and local visibility",
        "Community management and content",
        "SaaS products in development",
        "Active technical lab",
      ],
      pt: [
        "Sites para psicólogos e profissionais",
        "Google Business e visibilidade local",
        "Community management e conteúdo",
        "Produtos SaaS em desenvolvimento",
        "Laboratório técnico ativo",
      ],
    }[lang]);
  }
}

function translateProjects(lang) {
  const titles = {
    es: {
      title: "Proyectos | NeuroDev Studios",
      description:
        "Portafolio de proyectos de NeuroDev Studios: psicólogos, negocios, instituciones y presencia digital.",
    },
    en: {
      title: "Projects Web | NeuroDev Studios",
      description:
        "NeuroDev Studios project portfolio: psychologists, businesses, institutions and digital presence.",
    },
    pt: {
      title: "Projetos | NeuroDev Studios",
      description:
        "Portfólio de projetos da NeuroDev Studios: psicólogos, negócios, instituições e presença digital.",
    },
  };

  setPageTitle(titles[lang].title);
  setMetaDescription(titles[lang].description);

  setText(".subpage-hero .eyebrow", {
    es: "Portafolio",
    en: "Portfolio",
    pt: "Portfólio",
  }[lang]);
  setText(".subpage-hero h1", {
    es: "Proyectos reales",
    en: "Real projects",
    pt: "Projetos reais",
  }[lang]);
  setText(".subpage-hero p", {
    es: "Sitios web, presencia digital y soluciones creadas para psicólogos, negocios, profesionales e instituciones.",
    en: "Websites, digital presence and solutions created for psychologists, businesses, professionals and institutions.",
    pt: "Sites, presença digital e soluções criadas para psicólogos, negócios, profissionais e instituições.",
  }[lang]);

  const sectionHeaders = document.querySelectorAll(".section-head.left h2");
  const sectionDescs = document.querySelectorAll(".section-head.left p");

  setTexts(".section-head.left h2", {
    es: ["Psicólogos", "Negocios y profesionales", "Instituciones y otros", "Google Business / SEO local"],
    en: ["Psychologists", "Businesses and professionals", "Institutions and more", "Google Business / Local SEO"],
    pt: ["Psicólogos", "Negócios e profissionais", "Instituições e outros", "Google Business / SEO local"],
  }[lang]);

  setTexts(".section-head.left p", {
    es: [
      "Tu categoría más fuerte y especializada.",
      "Soluciones para presencia digital, WhatsApp y portafolio profesional.",
      "Proyectos funcionales para escuela, radio y menú digital.",
      "Presencia digital y posicionamiento para negocios reales.",
    ],
    en: [
      "Your strongest and most specialized category.",
      "Solutions for digital presence, WhatsApp and professional portfolios.",
      "Functional projects for school, radio and digital menus.",
      "Digital presence and positioning for real businesses.",
    ],
    pt: [
      "Sua categoria mais forte e especializada.",
      "Soluções para presença digital, WhatsApp e portfólio profissional.",
      "Projetos funcionais para escola, rádio e menu digital.",
      "Presença digital e posicionamento para negócios reais.",
    ],
  }[lang]);

  setTexts(".card p", {
    es: [
      "Micro-sitio profesional orientado a presencia digital.",
      "Sitio profesional para consulta psicológica.",
      "Presencia digital con enfoque serio y profesional.",
      "Micro-sitio web para consulta y contacto.",
      "Sitio web profesional para presencia y captación.",
      "Micro-sitio claro y orientado a pacientes.",
      "Sitio profesional dentro del nicho de salud mental.",
      "Web enfocada en acompañamiento y claridad visual.",
      "Presencia profesional para consulta y contacto.",
      "Tienda simple con venta directa por WhatsApp.",
      "Proyecto para carpintería con enfoque comercial.",
      "Micro-sitio profesional para especialista en salud.",
      "Sitio para proyecto profesional del área arquitectónica.",
      "Web para diseñador gráfico independiente.",
      "Página web escolar creada en 2018.",
      "Sitio web para radio digital.",
      "Menú digital con hosting para negocio gastronómico.",
      "Perfil de negocio optimizado para presencia local.",
      "Gestión de visibilidad en Google Business.",
    ],
    en: [
      "Professional micro-site focused on digital presence.",
      "Professional website for psychological practice.",
      "Digital presence with a serious, professional focus.",
      "Web micro-site for consultation and contact.",
      "Professional website for presence and lead generation.",
      "Clear micro-site oriented to patients.",
      "Professional site within the mental health niche.",
      "Website focused on support and visual clarity.",
      "Professional presence for consultation and contact.",
      "Simple store with direct sales via WhatsApp.",
      "Project for a woodworking business with a commercial focus.",
      "Professional micro-site for a health specialist.",
      "Website for a professional architecture-area project.",
      "Website for an independent graphic designer.",
      "School website created in 2018.",
      "Website for a digital radio station.",
      "Digital menu with hosting for a food business.",
      "Business profile optimized for local presence.",
      "Visibility management in Google Business.",
    ],
    pt: [
      "Micro-site profissional focado em presença digital.",
      "Site profissional para consulta psicológica.",
      "Presença digital com foco sério e profissional.",
      "Micro-site web para consulta e contato.",
      "Site profissional para presença e captação.",
      "Micro-site claro e voltado para pacientes.",
      "Site profissional dentro do nicho de saúde mental.",
      "Site focado em acompanhamento e clareza visual.",
      "Presença profissional para consulta e contato.",
      "Loja simples com venda direta pelo WhatsApp.",
      "Projeto para marcenaria com foco comercial.",
      "Micro-site profissional para especialista em saúde.",
      "Site para um projeto profissional da área de arquitetura.",
      "Site para designer gráfico independente.",
      "Página escolar criada em 2018.",
      "Site para rádio digital.",
      "Menu digital com hospedagem para negócio gastronômico.",
      "Perfil de negócio otimizado para presença local.",
      "Gestão de visibilidade no Google Business.",
    ],
  }[lang]);

  setText(".section:nth-of-type(2) .section-head.left h2", {
    es: "Psicólogos",
    en: "Psychologists",
    pt: "Psicólogos",
  }[lang]);
  setText(".section:nth-of-type(2) .section-head.left p", {
    es: "Tu categoría más fuerte y especializada.",
    en: "Your strongest and most specialized category.",
    pt: "Sua categoria mais forte e especializada.",
  }[lang]);

  setText(".section:nth-of-type(3) .section-head.left h2", {
    es: "Negocios y profesionales",
    en: "Businesses and professionals",
    pt: "Negócios e profissionais",
  }[lang]);
  setText(".section:nth-of-type(3) .section-head.left p", {
    es: "Soluciones para presencia digital, WhatsApp y portafolio profesional.",
    en: "Solutions for digital presence, WhatsApp and professional portfolios.",
    pt: "Soluções para presença digital, WhatsApp e portfólio profissional.",
  }[lang]);

  setText(".section:nth-of-type(4) .section-head.left h2", {
    es: "Instituciones y otros",
    en: "Institutions and more",
    pt: "Instituições e outros",
  }[lang]);
  setText(".section:nth-of-type(4) .section-head.left p", {
    es: "Proyectos funcionales para escuela, radio y menú digital.",
    en: "Functional projects for school, radio and digital menus.",
    pt: "Projetos funcionais para escola, rádio e menu digital.",
  }[lang]);

  setText(".section:nth-of-type(5) .section-head.left h2", {
    es: "Google Business / SEO local",
    en: "Google Business / Local SEO",
    pt: "Google Business / SEO local",
  }[lang]);
  setText(".section:nth-of-type(5) .section-head.left p", {
    es: "Presencia digital y posicionamiento para negocios reales.",
    en: "Digital presence and positioning for real businesses.",
    pt: "Presença digital e posicionamento para negócios reais.",
  }[lang]);

  setTexts(".project-link", {
    es: ["Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver sitio →", "Ver perfil →", "Ver perfil →"],
    en: ["View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View site →", "View profile →", "View profile →"],
    pt: ["Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver site →", "Ver perfil →", "Ver perfil →"],
  }[lang]);
}

function translateServices(lang) {
  const titles = {
    es: {
      title: "Servicios Web | NeuroDev Studios",
      description:
        "Desarrollo web, Google Business, contenido y presencia digital para psicólogos, negocios y profesionales.",
    },
    en: {
      title: "Web Services | NeuroDev Studios",
      description:
        "Web development, Google Business, content support and digital presence for psychologists, businesses and professionals.",
    },
    pt: {
      title: "Serviços Web | NeuroDev Studios",
      description:
        "Desenvolvimento web, Google Business, conteúdo e presença digital para psicólogos, negócios e profissionais.",
    },
  };

  setPageTitle(titles[lang].title);
  setMetaDescription(titles[lang].description);
  setText(".subpage-hero .eyebrow", { es: "Servicios digitales", en: "Digital services", pt: "Serviços digitais" }[lang]);
  setText(".subpage-hero h1", {
    es: "Sitios web y presencia digital para crecer mejor",
    en: "Websites and digital presence to grow with clarity",
    pt: "Sites e presença digital para crescer com clareza",
  }[lang]);
  setText(".subpage-hero p", {
    es: "Diseño y ejecución para lanzar sitios web claros, mejorar presencia digital y ayudarte a captar clientes con una base profesional.",
    en: "Design and execution to launch clear websites, improve digital presence and help you attract clients with a professional foundation.",
    pt: "Design e execução para lançar sites claros, melhorar sua presença digital e ajudar você a captar clientes com uma base profissional.",
  }[lang]);

  setTexts(".section-head.left h2", {
    es: [
      "Desarrollo web",
      "Presencia digital",
      "Contenido y community management",
      "Identidad visual básica",
      "Forma de trabajo",
    ],
    en: [
      "Web development",
      "Digital presence",
      "Content and community management",
      "Basic visual identity",
      "Working method",
    ],
    pt: [
      "Desenvolvimento web",
      "Presença digital",
      "Conteúdo e community management",
      "Identidade visual básica",
      "Forma de trabalho",
    ],
  }[lang]);

  setTexts(".section-head.left p", {
    es: [
      "Micro-sitios y páginas web funcionales para psicólogos, negocios, profesionales e instituciones.",
      "No solo se trata de una web. También se trata de que el negocio sea visible y encontrable.",
      "Edición, publicaciones y soporte en redes para marcas y proyectos que necesitan moverse todos los días.",
      "En algunos proyectos también apoyo con piezas visuales iniciales para que el cliente no arranque desde cero.",
      "Trabajo con enfoque práctico: resolver rápido, entregar claro y construir una base que pueda crecer después.",
    ],
    en: [
      "Micro-sites and functional websites for psychologists, businesses, professionals and institutions.",
      "It is not just about a website. It is also about making the business visible and easy to find.",
      "Editing, publishing and social support for brands and projects that need to move every day.",
      "For some projects I also help with initial visual pieces so the client does not start from zero.",
      "I work with a practical approach: solve quickly, deliver clearly and build a base that can grow later.",
    ],
    pt: [
      "Micro-sites e páginas funcionais para psicólogos, negócios, profissionais e instituições.",
      "Não se trata apenas de um site. Também se trata de tornar o negócio visível e fácil de encontrar.",
      "Edição, publicações e suporte em redes para marcas e projetos que precisam se mover todos os dias.",
      "Em alguns projetos também apoio com peças visuais iniciais para que o cliente não comece do zero.",
      "Trabalho com foco prático: resolver rápido, entregar claro e construir uma base que possa crescer depois.",
    ],
  }[lang]);

  setTexts(".card h3", {
    es: [
      "Micro-sitios profesionales",
      "Sitios para psicólogos",
      "Tiendas por WhatsApp",
      "Google Business",
      "Presencia online",
      "Visibilidad local",
      "Edición de video",
      "Gestión de redes",
      "Proyecto actual",
      "Logo básico",
      "Material visual",
      "Solución integral",
      "Escuchar",
      "Diseñar",
      "Publicar",
    ],
    en: [
      "Professional micro-sites",
      "Sites for psychologists",
      "WhatsApp stores",
      "Google Business",
      "Online presence",
      "Local visibility",
      "Video editing",
      "Social media management",
      "Current project",
      "Basic logo",
      "Visual material",
      "Integrated solution",
      "Listen",
      "Design",
      "Publish",
    ],
    pt: [
      "Micro-sites profissionais",
      "Sites para psicólogos",
      "Lojas por WhatsApp",
      "Google Business",
      "Presença online",
      "Visibilidade local",
      "Edição de vídeo",
      "Gestão de redes",
      "Projeto atual",
      "Logo básico",
      "Material visual",
      "Solução integrada",
      "Ouvir",
      "Desenhar",
      "Publicar",
    ],
  }[lang]);

  setTexts(".card p", {
    es: [
      "Páginas web simples, limpias y optimizadas para celular, ideales para profesionales que necesitan presencia online rápida.",
      "Desarrollo especializado en páginas para psicólogos y terapeutas con enfoque en claridad, confianza y captación de pacientes.",
      "Sitios sencillos para mostrar productos y dirigir la venta directamente a WhatsApp sin complicar el proceso.",
      "Creación, configuración y optimización de perfiles de negocio para mejorar presencia local y búsquedas en Google Maps.",
      "Estructura digital básica para que profesionales y negocios tengan una imagen clara y confiable en internet.",
      "Ajustes orientados a posicionamiento local y credibilidad digital para negocios pequeños y servicios profesionales.",
      "Edición de piezas para TikTok, YouTube, Instagram y Facebook usando CapCut y Adobe Premiere.",
      "Organización de contenido, publicaciones y apoyo en crecimiento de canales con enfoque práctico.",
      "Gestión de contenido y apoyo como community manager para un proyecto de cocina en YouTube, Facebook, Instagram y TikTok.",
      "Diseño de logotipos simples cuando el proyecto aún no tiene identidad visual definida.",
      "Apoyo con menús, piezas de presentación o recursos visuales complementarios para negocios pequeños.",
      "Web + imagen base + contacto + presencia digital, pensado para que un cliente pequeño tenga todo resuelto más rápido.",
      "Entender qué necesita el proyecto y qué sí vale la pena construir.",
      "Definir estructura, estilo visual y flujo principal para celular y escritorio.",
      "Dejar una solución funcional, clara y lista para empezar a generar presencia digital.",
    ],
    en: [
      "Simple, clean and mobile-optimized websites, ideal for professionals who need fast online presence.",
      "Specialized development for psychologist and therapist pages with a focus on clarity, trust and patient acquisition.",
      "Simple sites to showcase products and send sales directly to WhatsApp without complicating the process.",
      "Creation, setup and optimization of business profiles to improve local presence and Google Maps searches.",
      "Basic digital structure so professionals and businesses have a clear and trustworthy image on the internet.",
      "Adjustments aimed at local ranking and digital credibility for small businesses and professional services.",
      "Editing for TikTok, YouTube, Instagram and Facebook using CapCut and Adobe Premiere.",
      "Content organization, publishing and channel growth support with a practical approach.",
      "Content management and support as a community manager for a food project on YouTube, Facebook, Instagram and TikTok.",
      "Simple logo design when the project does not yet have a defined visual identity.",
      "Support with menus, presentation pieces or complementary visual resources for small businesses.",
      "Web + base image + contact + digital presence, designed so a small client can have everything solved faster.",
      "Understand what the project needs and what is actually worth building.",
      "Define structure, visual style and the main flow for mobile and desktop.",
      "Deliver a functional, clear solution ready to start building digital presence.",
    ],
    pt: [
      "Páginas simples, limpas e otimizadas para celular, ideais para profissionais que precisam de presença online rápida.",
      "Desenvolvimento especializado em páginas para psicólogos e terapeutas com foco em clareza, confiança e captação de pacientes.",
      "Sites simples para mostrar produtos e direcionar a venda diretamente para o WhatsApp sem complicar o processo.",
      "Criação, configuração e otimização de perfis de negócio para melhorar presença local e buscas no Google Maps.",
      "Estrutura digital básica para que profissionais e negócios tenham uma imagem clara e confiável na internet.",
      "Ajustes voltados para posicionamento local e credibilidade digital para pequenos negócios e serviços profissionais.",
      "Edição para TikTok, YouTube, Instagram e Facebook usando CapCut e Adobe Premiere.",
      "Organização de conteúdo, publicações e apoio no crescimento de canais com uma abordagem prática.",
      "Gestão de conteúdo e suporte como community manager para um projeto de cozinha no YouTube, Facebook, Instagram e TikTok.",
      "Criação de logos simples quando o projeto ainda não tem identidade visual definida.",
      "Apoio com menus, peças de apresentação ou recursos visuais complementares para pequenos negócios.",
      "Web + imagem base + contato + presença digital, pensado para que um cliente pequeno tenha tudo resolvido mais rápido.",
      "Entender o que o projeto precisa e o que realmente vale a pena construir.",
      "Definir estrutura, estilo visual e fluxo principal para celular e desktop.",
      "Entregar uma solução funcional, clara e pronta para começar a gerar presença digital.",
    ],
  }[lang]);

  setTexts(".simple-steps .step-card h3", {
    es: ["Escuchar", "Diseñar", "Publicar"],
    en: ["Listen", "Design", "Publish"],
    pt: ["Ouvir", "Desenhar", "Publicar"],
  }[lang]);

  setTexts(".simple-steps .step-card p", {
    es: [
      "Entender qué necesita el proyecto y qué sí vale la pena construir.",
      "Definir estructura, estilo visual y flujo principal para celular y escritorio.",
      "Dejar una solución funcional, clara y lista para empezar a generar presencia digital.",
    ],
    en: [
      "Understand what the project needs and what is actually worth building.",
      "Define structure, visual style and the main flow for mobile and desktop.",
      "Deliver a functional, clear solution ready to start building digital presence.",
    ],
    pt: [
      "Entender o que o projeto precisa e o que realmente vale a pena construir.",
      "Definir estrutura, estilo visual e fluxo principal para celular e desktop.",
      "Entregar uma solução funcional, clara e pronta para começar a gerar presença digital.",
    ],
  }[lang]);

  setText(".contact-note h3", {
    es: "Ideal para",
    en: "Ideal for",
    pt: "Ideal para",
  }[lang]);

  setTexts(".contact-note li", {
    es: [
      "Psicólogos y terapeutas",
      "Profesionales independientes",
      "Negocios pequeños",
      "Contenido rápido para redes",
      "Google Business y SEO local",
    ],
    en: [
      "Psychologists and therapists",
      "Independent professionals",
      "Small businesses",
      "Quick content for social media",
      "Google Business and local SEO",
    ],
    pt: [
      "Psicólogos e terapeutas",
      "Profissionais independentes",
      "Pequenos negócios",
      "Conteúdo rápido para redes sociais",
      "Google Business e SEO local",
    ],
  }[lang]);
}

function translateProducts(lang) {
  const titles = {
    es: {
      title: "Productos SaaS | NeuroDev Studios",
      description: "Software y productos digitales en desarrollo: plataforma psicométrica, evaluación de RH y sistemas propios.",
    },
    en: {
      title: "SaaS Products | NeuroDev Studios",
      description: "Software and digital products in development: psychometric platform, HR evaluation and proprietary systems.",
    },
    pt: {
      title: "Produtos SaaS | NeuroDev Studios",
      description: "Software e produtos digitais em desenvolvimento: plataforma psicométrica, avaliação de RH e sistemas próprios.",
    },
  };

  setPageTitle(titles[lang].title);
  setMetaDescription(titles[lang].description);

  setText(".subpage-hero .eyebrow", { es: "Productos", en: "Products", pt: "Produtos" }[lang]);
  setText(".subpage-hero h1", {
    es: "Software propio en construcci\u00f3n",
    en: "Own software in progress",
    pt: "Software pr\u00f3prio em constru\u00e7\u00e3o",
  }[lang]);
  setText(".subpage-hero p", {
    es: "La evoluci\u00f3n natural de NeuroDev Studios no es solo vender servicios, sino construir productos digitales propios con potencial de crecer y escalar.",
    en: "The natural evolution of NeuroDev Studios is not only selling services, but building its own digital products with potential to grow and scale.",
    pt: "A evolu\u00e7\u00e3o natural da NeuroDev Studios n\u00e3o \u00e9 apenas vender servi\u00e7os, mas construir produtos digitais pr\u00f3prios com potencial de crescer e escalar.",
  }[lang]);
  setText(".subpage-hero .btn", {
    es: "Ver Lab Notes",
    en: "See Lab Notes",
    pt: "Ver Lab Notes",
  }[lang]);

  setTexts(".card h3", {
    es: ["Psychometric Platform", "HR Evaluation Platform", "Visi\u00f3n de producto", "Hoy", "Transici\u00f3n", "Ma\u00f1ana"],
    en: ["Psychometric Platform", "HR Evaluation Platform", "Product vision", "Today", "Transition", "Tomorrow"],
    pt: ["Plataforma psicom\u00e9trica", "Plataforma de avalia\u00e7\u00e3o de RH", "Vis\u00e3o de produto", "Hoje", "Transi\u00e7\u00e3o", "Amanh\u00e3"],
  }[lang]);

  setTexts(".card p", {
    es: [
      "Plataforma orientada a psic\u00f3logos para digitalizar pruebas psicom\u00e9tricas, organizar respuestas y profesionalizar la experiencia del proceso.",
      "Sistema para recursos humanos orientado a evaluaciones, flujo de candidatos y procesos m\u00e1s estructurados dentro de reclutamiento.",
      "Servicios que hoy financian la construcci\u00f3n de software propio para ma\u00f1ana.",
      "Desarrollo web, presencia digital, contenido y soluciones para clientes reales.",
      "Construcci\u00f3n de SaaS y herramientas digitales que nacen de problemas reales ya detectados.",
      "Productos propios, laboratorios tecnol\u00f3gicos y sistemas con identidad propia.",
    ],
    en: [
      "Platform aimed at psychologists to digitize psychometric tests, organize responses and professionalize the process experience.",
      "System for human resources focused on evaluations, candidate flow and more structured recruitment processes.",
      "Services that today fund the building of proprietary software for tomorrow.",
      "Web development, digital presence, content and solutions for real clients.",
      "Building SaaS and digital tools that emerge from already detected real problems.",
      "Own products, technology labs and systems with their own identity.",
    ],
    pt: [
      "Plataforma voltada para psic\u00f3logos para digitalizar testes psicom\u00e9tricos, organizar respostas e profissionalizar a experi\u00eancia do processo.",
      "Sistema para recursos humanos voltado para avalia\u00e7\u00f5es, fluxo de candidatos e processos mais estruturados de recrutamento.",
      "Servi\u00e7os que hoje financiam a constru\u00e7\u00e3o de software pr\u00f3prio para amanh\u00e3.",
      "Desenvolvimento web, presen\u00e7a digital, conte\u00fado e solu\u00e7\u00f5es para clientes reais.",
      "Constru\u00e7\u00e3o de SaaS e ferramentas digitais que nascem de problemas reais j\u00e1 detectados.",
      "Produtos pr\u00f3prios, laborat\u00f3rios tecnol\u00f3gicos e sistemas com identidade pr\u00f3pria.",
    ],
  }[lang]);

  setText(".section-head.left h2", {
    es: "Direcci\u00f3n del estudio",
    en: "Studio direction",
    pt: "Dire\u00e7\u00e3o do est\u00fadio",
  }[lang]);
  setText(".section-head.left p", {
    es: "NeuroDev Studios est\u00e1 creciendo desde servicios reales hacia propiedad intelectual, productos y sistemas m\u00e1s grandes.",
    en: "NeuroDev Studios is growing from real services toward intellectual property, products and larger systems.",
    pt: "A NeuroDev Studios est\u00e1 crescendo a partir de servi\u00e7os reais para propriedade intelectual, produtos e sistemas maiores.",
  }[lang]);
}

function translateLabs(lang) {
  const titles = {
    es: {
      title: "Labs y Prototipos | NeuroDev Studios",
      description:
        "NeuroDev Labs: experimentos tecnol\u00f3gicos, sistemas multi-seat, optimizaci\u00f3n y conceptos de producto futuro.",
    },
    en: {
      title: "Labs and Prototypes | NeuroDev Studios",
      description:
        "NeuroDev Labs: technology experiments, multi-seat systems, optimization and future product concepts.",
    },
    pt: {
      title: "Labs e Protótipos | NeuroDev Studios",
      description:
        "NeuroDev Labs: experimentos tecnol\u00f3gicos, sistemas multi-seat, otimiza\u00e7\u00e3o e conceitos de produto futuro.",
    },
  };

  setPageTitle(titles[lang].title);
  setMetaDescription(titles[lang].description);
  setText(".subpage-hero .eyebrow", { es: "NeuroDev Labs", en: "NeuroDev Labs", pt: "NeuroDev Labs" }[lang]);
  setText(".subpage-hero h1", {
    es: "Investigaci\u00f3n aplicada y prototipos",
    en: "Applied research and prototypes",
    pt: "Pesquisa aplicada e prot\u00f3tipos",
  }[lang]);
  setText(".subpage-hero p", {
    es: "El laboratorio del estudio: pruebas reales, ideas t\u00e9cnicas y sistemas que hoy son experimentos y ma\u00f1ana pueden convertirse en productos.",
    en: "The studio's lab: real tests, technical ideas and systems that today are experiments and tomorrow can become products.",
    pt: "O laborat\u00f3rio do est\u00fadio: testes reais, ideias t\u00e9cnicas e sistemas que hoje s\u00e3o experimentos e amanh\u00e3 podem virar produtos.",
  }[lang]);

  setTexts(".cards-grid .card h3", {
    es: ["Multi-seat PC", "Caso validado", "Validaci\u00f3n de mercado", "Minecraft Performance", "Hardware accesible", "Estabilidad real", "Thiago", "Sistema tipo Aster mejorado", "Research-driven building"],
    en: ["Multi-seat PC", "Validated case", "Market validation", "Minecraft Performance", "Accessible hardware", "Real stability", "Thiago", "Improved Aster-style system", "Research-driven building"],
    pt: ["PC multi-seat", "Caso validado", "Valida\u00e7\u00e3o de mercado", "Desempenho em Minecraft", "Hardware acess\u00edvel", "Estabilidade real", "Thiago", "Sistema estilo Aster melhorado", "Constru\u00e7\u00e3o guiada por pesquisa"],
  }[lang]);

  setTexts(".cards-grid .card p", {
    es: [
      "Implementaci\u00f3n real de una sola PC convertida en m\u00faltiples estaciones funcionales para estudio, tareas y gaming ligero.",
      "Familia con 4 hijos usando una sola computadora con sesiones separadas, reduciendo costos aproximados de 30 mil a 15 mil pesos Mexicanos.",
      "Inter\u00e9s org\u00e1nico real, instalaciones pagadas y una l\u00ednea clara hacia un posible producto tipo multi-seat mejorado.",
      "Optimizaci\u00f3n de Minecraft moddeado con APUs AMD, RX 580, shaders Photon, hasta 200 mods y escenarios de doble instancia.",
      "Pruebas sobre setups realistas: Ryzen 5600G, iGPU, 8 a 48 GB RAM, RX 580 y configuraciones orientadas a personas con equipos modestos.",
      "Experimentos enfocados en temperatura, consumo, rendimiento sostenible y uso funcional, no solo en screenshots llamativas.",
      "Concepto de asistente digital con visi\u00f3n de acompa\u00f1amiento, ayuda pr\u00e1ctica y presencia m\u00e1s humana.",
      "Idea de un software multi-seat con mejor aislamiento por usuario, mejor compatibilidad con juegos y menos maniobras extra\u00f1as.",
      "Construcci\u00f3n desde observaci\u00f3n, pruebas, errores y validaci\u00f3n con el mundo real, no solo teor\u00eda.",
    ],
    en: [
      "Real implementation of a single PC turned into multiple functional stations for study, tasks and light gaming.",
      "A family with 4 children using one computer with separate sessions, reducing costs from roughly 30k to 15k Mexican pesos.",
      "Real organic interest, paid installations and a clear line toward a possible improved multi-seat product.",
      "Minecraft optimization with AMD APUs, RX 580, Photon shaders, up to 200 mods and dual-instance scenarios.",
      "Tests on realistic setups: Ryzen 5600G, iGPU, 8 to 48 GB RAM, RX 580 and configurations aimed at modest hardware.",
      "Experiments focused on temperature, power usage, sustainable performance and functional use, not just flashy screenshots.",
      "A digital assistant concept focused on companionship, practical help and a more human presence.",
      "An idea for multi-seat software with better per-user isolation, better game compatibility and fewer odd workarounds.",
      "Building from observation, testing, mistakes and real-world validation, not just theory.",
    ],
    pt: [
      "Implementa\u00e7\u00e3o real de um \u00fanico PC convertido em m\u00faltiplas esta\u00e7\u00f5es funcionais para estudo, tarefas e jogos leves.",
      "Fam\u00edlia com 4 filhos usando um \u00fanico computador com sess\u00f5es separadas, reduzindo custos de cerca de 30 mil para 15 mil pesos mexicanos.",
      "Interesse org\u00e2nico real, instala\u00e7\u00f5es pagas e uma linha clara para um poss\u00edvel produto multi-seat melhorado.",
      "Otimiza\u00e7\u00e3o de Minecraft modificado com APUs AMD, RX 580, shaders Photon, at\u00e9 200 mods e cen\u00e1rios de dupla inst\u00e2ncia.",
      "Testes em setups realistas: Ryzen 5600G, iGPU, 8 a 48 GB de RAM, RX 580 e configura\u00e7\u00f5es voltadas para hardware modesto.",
      "Experimentos focados em temperatura, consumo, desempenho sustent\u00e1vel e uso funcional, n\u00e3o apenas em screenshots chamativas.",
      "Conceito de assistente digital com vis\u00e3o de companhia, ajuda pr\u00e1tica e presen\u00e7a mais humana.",
      "Ideia de um software multi-seat com melhor isolamento por usu\u00e1rio, melhor compatibilidade com jogos e menos gambiarras estranhas.",
      "Constru\u00e7\u00e3o a partir de observa\u00e7\u00e3o, testes, erros e valida\u00e7\u00e3o com o mundo real, n\u00e3o s\u00f3 teoria.",
    ],
  }[lang]);

  setTexts(".section-head.left h2", {
    es: ["Optimizaci\u00f3n y rendimiento", "Visi\u00f3n futura"],
    en: ["Optimization and performance", "Future vision"],
    pt: ["Otimiza\u00e7\u00e3o e desempenho", "Vis\u00e3o futura"],
  }[lang]);

  setTexts(".section-head.left p", {
    es: [
      "Pruebas sobre hardware real, accesible y con foco en estabilidad m\u00e1s que en promesas vac\u00edas.",
      "Algunas ideas ya apuntan a productos m\u00e1s grandes: asistentes, sistemas mejorados y tecnolog\u00eda con enfoque humano.",
    ],
    en: [
      "Tests on real, accessible hardware with a focus on stability rather than empty promises.",
      "Some ideas are already pointing toward larger products: assistants, improved systems and human-focused technology.",
    ],
    pt: [
      "Testes em hardware real, acess\u00edvel e com foco em estabilidade mais do que em promessas vazias.",
      "Algumas ideias j\u00e1 apontam para produtos maiores: assistentes, sistemas melhorados e tecnologia com foco humano.",
    ],
  }[lang]);
}

function translateAbout(lang) {
  const titles = {
    es: {
      title: "Sobre el Estudio | NeuroDev Studios",
      description: "Conoce el estudio, su enfoque en desarrollo web, presencia digital, productos y experimentación técnica.",
    },
    en: {
      title: "About the Studio | NeuroDev Studios",
      description: "Learn about the studio, its focus on web development, digital presence, products and technical experimentation.",
    },
    pt: {
      title: "Sobre | NeuroDev Studios",
      description: "Conheça o estúdio, seu foco em desenvolvimento web, presença digital, produtos e experimentação técnica.",
    },
  };

  setPageTitle(titles[lang].title);
  setMetaDescription(titles[lang].description);

  setText(".subpage-hero .eyebrow", { es: "Sobre", en: "About", pt: "Sobre" }[lang]);
  setText(".subpage-hero h1", {
    es: "Un estudio pequeño con visión de producto",
    en: "A small studio with a product vision",
    pt: "Um estúdio pequeno com visão de produto",
  }[lang]);
  setText(".subpage-hero p", {
    es: "NeuroDev Studios nace de experiencia real en desarrollo web, presencia digital y experimentación técnica. La idea es construir cosas útiles, claras y escalables sin perder cercanía.",
    en: "NeuroDev Studios comes from real experience in web development, digital presence and technical experimentation. The goal is to build useful, clear and scalable things without losing closeness.",
    pt: "A NeuroDev Studios nasce de experiência real em desenvolvimento web, presença digital e experimentação técnica. A ideia é construir coisas úteis, claras e escaláveis sem perder proximidade.",
  }[lang]);

  setTexts(".about-layout .card h2", {
    es: ["Qué es el estudio", "Cómo trabajamos"],
    en: ["What the studio is", "How we work"],
    pt: ["O que é o estúdio", "Como trabalhamos"],
  }[lang]);

  setTexts(".about-layout .card p", {
    es: [
      "Un estudio digital liderado por founder, pensado para resolver necesidades reales con una mezcla de ejecución rápida, criterio visual y mentalidad de producto.",
      "Arrancamos con lo esencial, validamos rápido y construimos una base que pueda crecer. Eso aplica tanto para una web simple como para un sistema más ambicioso.",
    ],
    en: [
      "A founder-led digital studio designed to solve real needs with a mix of fast execution, visual judgment and product mindset.",
      "We start with the essentials, validate quickly and build a base that can grow. That applies both to a simple website and to a more ambitious system.",
    ],
    pt: [
      "Um estúdio digital liderado pelo fundador, pensado para resolver necessidades reais com uma mistura de execução rápida, critério visual e mentalidade de produto.",
      "Começamos pelo essencial, validamos rápido e construímos uma base que possa crescer. Isso vale tanto para um site simples quanto para um sistema mais ambicioso.",
    ],
  }[lang]);

  setText(".section:nth-of-type(2) .section-head.left h2", {
    es: "Cómo creció",
    en: "How it grew",
    pt: "Como cresceu",
  }[lang]);
  setText(".section:nth-of-type(2) .section-head.left p", {
    es: "De páginas individuales y clientes reales hacia una estructura con servicios, productos y laboratorios.",
    en: "From individual pages and real clients toward a structure with services, products and labs.",
    pt: "De páginas individuais e clientes reais para uma estrutura com serviços, produtos e laboratórios.",
  }[lang]);

  setTexts(".timeline-item h3", {
    es: ["Inicio", "Servicios", "Productos", "Laboratorio"],
    en: ["Start", "Services", "Products", "Lab"],
    pt: ["Início", "Serviços", "Produtos", "Laboratório"],
  }[lang]);

  setTexts(".timeline-item p", {
    es: [
      "Primeros sitios web y proyectos pequeños para aprender a resolver problemas reales con diseño y código.",
      "El estudio tomó forma con páginas para profesionales, presencia digital y apoyo práctico para clientes.",
      "A partir de esos problemas reales surgieron ideas de software propio y herramientas más escalables.",
      "Pruebas técnicas, performance, multi-seat, gaming y experimentos que alimentan la visión futura del estudio.",
    ],
    en: [
      "Early websites and small projects to learn how to solve real problems with design and code.",
      "The studio took shape with pages for professionals, digital presence and practical client support.",
      "From those real problems came ideas for proprietary software and more scalable tools.",
      "Technical tests, performance, multi-seat, gaming and experiments that feed the studio's future vision.",
    ],
    pt: [
      "Primeiros sites e pequenos projetos para aprender a resolver problemas reais com design e código.",
      "O estúdio ganhou forma com páginas para profissionais, presença digital e apoio prático para clientes.",
      "A partir desses problemas reais surgiram ideias de software próprio e ferramentas mais escaláveis.",
      "Testes técnicos, desempenho, multi-seat, jogos e experimentos que alimentam a visão futura do estúdio.",
    ],
  }[lang]);

  setText(".section:nth-of-type(3) .section-head.left h2", {
    es: "Lo que buscamos construir",
    en: "What we want to build",
    pt: "O que queremos construir",
  }[lang]);
  setText(".section:nth-of-type(3) .section-head.left p", {
    es: "El objetivo no es solo entregar sitios. Es crear sistemas útiles, presencia digital y productos propios con dirección clara.",
    en: "The goal is not only to deliver websites. It is to create useful systems, digital presence and owned products with clear direction.",
    pt: "O objetivo não é apenas entregar sites. É criar sistemas úteis, presença digital e produtos próprios com direção clara.",
  }[lang]);

  setTexts(".section:nth-of-type(3) .card h3", {
    es: ["Web", "Products", "Labs"],
    en: ["Web", "Products", "Labs"],
    pt: ["Web", "Produtos", "Labs"],
  }[lang]);

  setTexts(".section:nth-of-type(3) .card p", {
    es: [
      "Presencia clara, útil y rápida para profesionales, negocios y proyectos serios.",
      "Software propio nacido de problemas reales, con potencial de crecer y escalar.",
      "Experimentos técnicos que ayudan a validar ideas antes de convertirlas en algo mayor.",
    ],
    en: [
      "Clear, useful and fast presence for professionals, businesses and serious projects.",
      "Proprietary software born from real problems, with potential to grow and scale.",
      "Technical experiments that help validate ideas before turning them into something bigger.",
    ],
    pt: [
      "Presença clara, útil e rápida para profissionais, negócios e projetos sérios.",
      "Software próprio nascido de problemas reais, com potencial de crescer e escalar.",
      "Experimentos técnicos que ajudam a validar ideias antes de transformá-las em algo maior.",
    ],
  }[lang]);

  setText(".section:nth-of-type(4) .section-head.left h2", {
    es: "Rumbo actual",
    en: "Current direction",
    pt: "Rumo atual",
  }[lang]);
  setText(".section:nth-of-type(4) .section-head.left p", {
    es: "NeuroDev Studios sigue creciendo desde proyectos reales hacia una marca con más producto, más sistema y más continuidad.",
    en: "NeuroDev Studios keeps growing from real projects into a brand with more product, more system and more continuity.",
    pt: "A NeuroDev Studios continua crescendo a partir de projetos reais para uma marca com mais produto, mais sistema e mais continuidade.",
  }[lang]);

  setTexts(".contact-actions a", {
    es: ["Ver proyectos", "Hablemos"],
    en: ["View projects", "Let's talk"],
    pt: ["Ver projetos", "Vamos falar"],
  }[lang]);

  setText(".contact-note h3", {
    es: "Base actual",
    en: "Current base",
    pt: "Base atual",
  }[lang]);

  setTexts(".contact-note li", {
    es: [
      "Desarrollo web",
      "Presencia digital",
      "Productos propios",
      "Laboratorio técnico",
      "Visión de producto",
    ],
    en: [
      "Web development",
      "Digital presence",
      "Owned products",
      "Technical lab",
      "Product vision",
    ],
    pt: [
      "Desenvolvimento web",
      "Presença digital",
      "Produtos próprios",
      "Laboratório técnico",
      "Visão de produto",
    ],
  }[lang]);
}

function translateLabNotes(lang) {
  const titles = {
    es: {
      title: "Lab Notes | NeuroDev Studios",
      description:
        "Lab Notes de NeuroDev Studios: bitácora de pruebas, sistemas, rendimiento y experimentos reales.",
    },
    en: {
      title: "Lab Notes | NeuroDev Studios",
      description:
        "NeuroDev Studios Lab Notes: a log of tests, systems, performance and real experiments.",
    },
    pt: {
      title: "Lab Notes | NeuroDev Studios",
      description:
        "Lab Notes da NeuroDev Studios: diário de testes, sistemas, desempenho e experimentos reais.",
    },
  };

  setPageTitle(titles[lang].title);
  setMetaDescription(titles[lang].description);

  setText(".subpage-hero .eyebrow", { es: "Lab Notes", en: "Lab Notes", pt: "Lab Notes" }[lang]);
  setText(".subpage-hero h1", {
    es: "Bitácora de pruebas, ideas y sistemas",
    en: "Log of tests, ideas and systems",
    pt: "Diário de testes, ideias e sistemas",
  }[lang]);
  setText(".subpage-hero p", {
    es: "Un espacio para documentar hallazgos reales, errores, optimizaciones, ideas de producto y ocurrencias que nacen de experimentar con tecnología en el mundo real.",
    en: "A space to document real findings, mistakes, optimizations, product ideas and outcomes that arise from experimenting with technology in the real world.",
    pt: "Um espaço para documentar descobertas reais, erros, otimizações, ideias de produto e ocorrências que nascem de experimentar tecnologia no mundo real.",
  }[lang]);

  setTexts(".section-head.left h2", {
    es: ["Categorías", "Entradas destacadas", "Cómo usar esta bitácora"],
    en: ["Categories", "Featured entries", "How to use this log"],
    pt: ["Categorias", "Entradas em destaque", "Como usar este diário"],
  }[lang]);

  setTexts(".section-head.left p", {
    es: [
      "Lab Notes se divide en líneas simples para mantener el caos organizado.",
      "Primeras notas del laboratorio. Luego puedes ir añadiendo más sin romper la estructura.",
      "Aquí no hace falta escribir artículos eternos. La idea es documentar rápido, claro y con resultados reales.",
    ],
    en: [
      "Lab Notes is split into simple lines to keep the chaos organized.",
      "First notes from the lab. You can add more later without breaking the structure.",
      "You do not need to write endless articles here. The idea is to document quickly, clearly and with real results.",
    ],
    pt: [
      "Lab Notes é dividido em linhas simples para manter o caos organizado.",
      "Primeiras notas do laboratório. Depois você pode adicionar mais sem quebrar a estrutura.",
      "Aqui não é preciso escrever artigos intermináveis. A ideia é documentar rápido, claro e com resultados reais.",
    ],
  }[lang]);

  setTexts(".cards-grid .card h3", {
    es: ["Sistemas", "Rendimiento", "Gaming"],
    en: ["Systems", "Performance", "Gaming"],
    pt: ["Sistemas", "Desempenho", "Jogos"],
  }[lang]);

  setTexts(".cards-grid .card p", {
    es: [
      "Multi-seat, Aster, sesiones, particiones reales por usuario y arquitectura de sistemas.",
      "Pruebas de rendimiento, temperatura, RAM, GPU, mods, shaders y estabilidad real.",
      "Minecraft, setups curiosos, ideas nacidas del juego y experimentos con hardware accesible.",
    ],
    en: [
      "Multi-seat, Aster, sessions, real per-user partitions and systems architecture.",
      "Performance tests, temperature, RAM, GPU, mods, shaders and real stability.",
      "Minecraft, curious setups, ideas born from the game and experiments with accessible hardware.",
    ],
    pt: [
      "Multi-seat, Aster, sessões, partições reais por usuário e arquitetura de sistemas.",
      "Testes de desempenho, temperatura, RAM, GPU, mods, shaders e estabilidade real.",
      "Minecraft, setups curiosos, ideias nascidas do jogo e experimentos com hardware acessível.",
    ],
  }[lang]);

  setTexts(".note-tag", {
    es: ["Sistemas", "Rendimiento", "Sistemas", "Rendimiento", "Gaming", "Futuro"],
    en: ["Systems", "Performance", "Systems", "Performance", "Gaming", "Future"],
    pt: ["Sistemas", "Desempenho", "Sistemas", "Desempenho", "Jogos", "Futuro"],
  }[lang]);

  setTexts(".note-card h3", {
    es: [
      "Cómo convertí una sola PC en 4 estaciones funcionales",
      "Prueba: 2 Minecraft con Ryzen 5600G y solo 8 GB RAM",
      "Qué le falta a Aster para ser realmente multiusuario",
      "120 FPS con RX 580, Photon y 200 mods",
      "Por qué Minecraft terminó siendo mi laboratorio técnico",
      "Thiago: de asistente personal a compañero digital",
    ],
    en: [
      "How I turned one PC into 4 functional stations",
      "Test: 2 Minecraft instances with a Ryzen 5600G and only 8 GB RAM",
      "What Aster still needs to be truly multi-user",
      "120 FPS with RX 580, Photon and 200 mods",
      "Why Minecraft ended up becoming my technical lab",
      "Thiago: from personal assistant to digital companion",
    ],
    pt: [
      "Como transformei um único PC em 4 estações funcionais",
      "Teste: 2 Minecraft com Ryzen 5600G e apenas 8 GB de RAM",
      "O que falta no Aster para ser realmente multiusuário",
      "120 FPS com RX 580, Photon e 200 mods",
      "Por que Minecraft acabou virando meu laboratório técnico",
      "Thiago: de assistente pessoal a companheiro digital",
    ],
  }[lang]);

  setTexts(".note-card p", {
    es: [
      "Caso real de una familia con 4 hijos usando una sola PC con sesiones separadas, ahorro de costos y uso diario estable.",
      "Validación importante sobre hardware modesto corriendo doble instancia con mods básicos y resultados sorprendentemente buenos.",
      "Reflexión técnica sobre el problema del aislamiento de carpetas, perfiles y juegos conflictivos como Black Ops 2 o Left 4 Dead.",
      "Cómo un setup accesible puede sostener una carga absurda si se le entienden bien sus límites y se optimiza con cabeza.",
      "Lo que empezó como vicio terminó revelando patrones de optimización, validación de hardware y posibles productos futuros.",
      "Notas iniciales sobre la visión de Thiago como sistema de ayuda más humano, útil y presente en escenarios cotidianos.",
    ],
    en: [
      "A real case of a family with 4 children using one PC with separate sessions, cost savings and stable everyday use.",
      "Important validation on modest hardware running two instances with basic mods and surprisingly good results.",
      "Technical reflection on the problem of folder isolation, profiles and problematic games like Black Ops 2 or Left 4 Dead.",
      "How an accessible setup can handle absurd load if you understand its limits and optimize it wisely.",
      "What started as a hobby ended up revealing optimization patterns, hardware validation and possible future products.",
      "Initial notes on Thiago's vision as a more human, useful and present help system in everyday scenarios.",
    ],
    pt: [
      "Caso real de uma família com 4 filhos usando um único PC com sessões separadas, economia de custos e uso diário estável.",
      "Validação importante em hardware modesto rodando duas instâncias com mods básicos e resultados surpreendentemente bons.",
      "Reflexão técnica sobre o problema do isolamento de pastas, perfis e jogos problemáticos como Black Ops 2 ou Left 4 Dead.",
      "Como um setup acessível pode suportar uma carga absurda se você entender seus limites e otimizar com cuidado.",
      "O que começou como vício acabou revelando padrões de otimização, validação de hardware e possíveis produtos futuros.",
      "Notas iniciais sobre a visão de Thiago como um sistema de ajuda mais humano, útil e presente no cotidiano.",
    ],
  }[lang]);

  setTexts(".step-card h3", {
    es: ["Problema", "Prueba", "Resultado"],
    en: ["Problem", "Test", "Result"],
    pt: ["Problema", "Teste", "Resultado"],
  }[lang]);

  setTexts(".step-card p", {
    es: [
      "Qué estaba intentando resolver o qué cosa rara apareció.",
      "Qué intenté, qué moví, qué cambié o qué rompí.",
      "Qué funcionó, qué no y qué sigue después.",
    ],
    en: [
      "What I was trying to solve or what strange thing showed up.",
      "What I tried, what I moved, what I changed or what I broke.",
      "What worked, what did not and what comes next.",
    ],
    pt: [
      "O que eu estava tentando resolver ou que coisa estranha apareceu.",
      "O que tentei, o que mexi, o que mudei ou o que quebrei.",
      "O que funcionou, o que não funcionou e o que vem depois.",
    ],
  }[lang]);

  setText(".contact-note h3", {
    es: "Ideas para próximas notas",
    en: "Ideas for upcoming notes",
    pt: "Ideias para próximas notas",
  }[lang]);

  setTexts(".contact-note li", {
    es: [
      "Dual Minecraft con Aster",
      "Partición real por usuario",
      "RAM por instancia en pruebas reales",
      "Photon vs rendimiento bruto",
      "Lab ideas para Thiago",
    ],
    en: [
      "Dual Minecraft with Aster",
      "Real per-user partitioning",
      "RAM per instance in real tests",
      "Photon vs raw performance",
      "Lab ideas for Thiago",
    ],
    pt: [
      "Dual Minecraft com Aster",
      "Partição real por usuário",
      "RAM por instância em testes reais",
      "Photon vs desempenho bruto",
      "Ideias de laboratório para Thiago",
    ],
  }[lang]);
}

function translateContact(lang) {
  const titles = {
    es: {
      title: "Contacto Web | NeuroDev Studios",
      description:
        "Contacto para sitios web, presencia digital, SEO local y proyectos digitales.",
    },
    en: {
      title: "Contact Web | NeuroDev Studios",
      description:
        "Contact for websites, digital presence, local SEO and digital projects.",
    },
    pt: {
      title: "Contato | NeuroDev Studios",
      description:
        "Contato para sites, presença digital, SEO local e projetos digitais.",
    },
  };

  setPageTitle(titles[lang].title);
  setMetaDescription(titles[lang].description);

  setText(".subpage-hero .eyebrow", { es: "Contacto", en: "Contact", pt: "Contato" }[lang]);
  setText(".subpage-hero h1", {
    es: "Cuéntame qué quieres construir",
    en: "Tell me what you want to build",
    pt: "Conte o que você quer construir",
  }[lang]);
  setText(".subpage-hero p", {
    es: "Si necesitas un sitio web, presencia digital o apoyo para lanzar algo más serio, aquí empezamos.",
    en: "If you need a website, digital presence or support to launch something more serious, this is where we start.",
    pt: "Se você precisa de um site, presença digital ou apoio para lançar algo mais sério, é aqui que começamos.",
  }[lang]);

  setTexts(".card h2, .contact-note h3, .section-head.left h2, .card h3", {
    es: ["Canales directos", "Ideal para:", "Qué podemos construir", "Micro-sitio", "Presencia digital", "Proyecto especial"],
    en: ["Direct channels", "Ideal for:", "What we can build", "Micro-site", "Digital presence", "Special project"],
    pt: ["Canais diretos", "Ideal para:", "O que podemos construir", "Micro-site", "Presença digital", "Projeto especial"],
  }[lang]);

  setTexts(".card p, .section-head.left p, .contact-note ul li, .cards-grid .card p", {
    es: [
      "La vía más rápida es WhatsApp. También puedes escribir por correo si prefieres contar tu proyecto con más detalle.",
      "Psicólogos y terapeutas",
      "Negocios pequeños",
      "Presencia digital rápida",
      "Google Business y SEO local",
      "Proyectos y productos digitales",
      "Desde un micro-sitio profesional hasta apoyo en presencia digital y proyectos más técnicos.",
      "Una web profesional, clara, optimizada para celular y lista para mostrar servicios y contacto.",
      "Apoyo en Google Business, visibilidad local y estructura básica para posicionarte mejor.",
      "Si tienes algo más técnico o experimental, también podemos explorar la viabilidad juntos.",
    ],
    en: [
      "The fastest way to reach out is via WhatsApp. You can also email if you prefer to explain your project in more detail.",
      "Psychologists and therapists",
      "Small businesses",
      "Fast digital presence",
      "Google Business and local SEO",
      "Digital projects and products",
      "From a professional micro-site to digital presence support and more technical projects.",
      "A professional website, clear, mobile-optimized and ready to show services and contact.",
      "Support with Google Business, local visibility and a basic structure to rank better.",
      "If you have something more technical or experimental, we can also explore feasibility together.",
    ],
    pt: [
      "A forma mais rápida de contato é pelo WhatsApp. Você também pode escrever por e-mail se preferir explicar seu projeto com mais detalhes.",
      "Psicólogos e terapeutas",
      "Pequenos negócios",
      "Presença digital rápida",
      "Google Business e SEO local",
      "Projetos e produtos digitais",
      "De um micro-site profissional até apoio em presença digital e projetos mais técnicos.",
      "Um site profissional, claro, otimizado para celular e pronto para mostrar serviços e contato.",
      "Apoio em Google Business, visibilidade local e estrutura básica para posicionar melhor.",
      "Se você tem algo mais técnico ou experimental, também podemos explorar a viabilidade juntos.",
    ],
  }[lang]);

  setTexts(".contact-actions a", {
    es: ["WhatsApp", "Email"],
    en: ["WhatsApp", "Email"],
    pt: ["WhatsApp", "Email"],
  }[lang]);

  setTexts(".cards-grid .card h3", {
    es: ["Micro-sitio", "Presencia digital", "Proyecto especial"],
    en: ["Micro-site", "Digital presence", "Special project"],
    pt: ["Micro-site", "Presença digital", "Projeto especial"],
  }[lang]);

  setTexts(".cards-grid .card p", {
    es: [
      "Una web profesional, clara, optimizada para celular y lista para mostrar servicios y contacto.",
      "Apoyo en Google Business, visibilidad local y estructura básica para posicionarte mejor.",
      "Si tienes algo más técnico o experimental, también podemos explorar la viabilidad juntos.",
    ],
    en: [
      "A professional website, clear, mobile-optimized and ready to show services and contact.",
      "Support with Google Business, local visibility and a basic structure to rank better.",
      "If you have something more technical or experimental, we can also explore feasibility together.",
    ],
    pt: [
      "Um site profissional, claro, otimizado para celular e pronto para mostrar serviços e contato.",
      "Apoio em Google Business, visibilidade local e estrutura básica para posicionar melhor.",
      "Se você tem algo mais técnico ou experimental, também podemos explorar a viabilidade juntos.",
    ],
  }[lang]);
}

function translatePage(lang) {
  translateCommon(lang);

  if (pageName === "index.html" || pageName === "") {
    translateIndex(lang);
  } else if (pageName === "proyectos.html") {
    translateProjects(lang);
  } else if (pageName === "servicios.html") {
    translateServices(lang);
  } else if (pageName === "productos.html") {
    translateProducts(lang);
  } else if (pageName === "labs.html") {
    translateLabs(lang);
  } else if (pageName === "sobre.html") {
    translateAbout(lang);
  } else if (pageName === "lab-notes.html") {
    translateLabNotes(lang);
  } else if (pageName === "contacto.html") {
    translateContact(lang);
  }
}

function setLanguage(lang) {
  const supported = ["es", "en", "pt"];
  const nextLang = supported.includes(lang) ? lang : "es";

  html.setAttribute("data-lang", nextLang);
  html.setAttribute("lang", nextLang);

  if (btnEs) {
    btnEs.classList.toggle("active", nextLang === "es");
  }

  if (btnEn) {
    btnEn.classList.toggle("active", nextLang === "en");
  }

  if (btnPt) {
    btnPt.classList.toggle("active", nextLang === "pt");
  }

  localStorage.setItem("neurodev-lang", nextLang);
  translatePage(nextLang);
}

ensureLanguageSwitch();

const savedLang = localStorage.getItem("neurodev-lang");
if (savedLang === "en" || savedLang === "es" || savedLang === "pt") {
  setLanguage(savedLang);
} else {
  setLanguage("es");
}

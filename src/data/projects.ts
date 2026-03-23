export interface Project {
  slug: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  color: string;
  heroImage?: string;
  overview?: string;
  timeline?: string;
  role?: string;
  tools?: string[];
  gallery?: string[];
  metrics?: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    slug: "canil-franfortal",
    name: "Canil FranFortal",
    category: "UX/UI Design",
    problem: "Muitos canis possuem presença digital fraca, com sites desorganizados, falta de identidade visual e pouca credibilidade. O desafio era criar um site que transmitisse confiança imediatamente, destacasse a qualidade dos cães e convertesse visitantes em contatos.",
    solution: "Design moderno e limpo, uso de imagens reais para gerar conexão emocional, layout escaneável e destaque para os filhotes. Diferenciais: Visual premium, experiência intuitiva e comunicação clara.",
    result: "Aumento na taxa de contato via WhatsApp, maior confiança dos visitantes e destaque competitivo no mercado.",
    color: "from-[#FFB067]/20 to-[#FF705B]/20",
    overview: "Criação de um site profissional para um canil, com o objetivo de transmitir confiança, credibilidade e conexão emocional com o cliente. O projeto une design moderno com estratégia de vendas para apresentar os filhotes e reforçar a autoridade do criador.",
    timeline: "2 meses",
    role: "UX/UI Designer",
    tools: ["Figma", "Webflow"],
    heroImage: "https://i.ibb.co/N2Hp32mF/Whats-App-Image-2026-03-23-at-13-38-16.jpg",
    gallery: [
      "https://i.ibb.co/N2Hp32mF/Whats-App-Image-2026-03-23-at-13-38-16.jpg",
      "https://i.ibb.co/7mL9F6F/Whats-App-Image-2026-03-23-at-13-38-25.jpg",
      "https://i.ibb.co/vx3QwLrB/Whats-App-Image-2026-03-23-at-13-38-33.jpg"
    ],
    metrics: [
      { label: "Aumento de Contatos", value: "+85%" },
      { label: "Confiança (Percepção)", value: "Alta" },
      { label: "Taxa de Conversão", value: "+40%" }
    ]
  },
  {
    slug: "fintech-dashboard",
    name: "Fintech Dashboard",
    category: "UX/UI Design",
    problem: "Dados financeiros complexos e difíceis de ler.",
    solution: "Dashboard minimalista com visualização de dados intuitiva.",
    result: "+40% de retenção de usuários ativos diários.",
    color: "from-[#00FF88]/20 to-[#00C2FF]/20",
    overview: "Um redesign completo da plataforma de gestão financeira, focando em simplificar a visualização de dados complexos para usuários leigos, mantendo a profundidade necessária para usuários avançados.",
    timeline: "3 meses",
    role: "Lead Product Designer",
    tools: ["Figma", "Protopie", "Miro"],
    metrics: [
      { label: "Retenção Diária", value: "+40%" },
      { label: "Tempo na Tarefa", value: "-35%" },
      { label: "Satisfação (CSAT)", value: "9.2/10" }
    ]
  },
  {
    slug: "ecommerce-premium",
    name: "E-commerce Premium",
    category: "Web Design",
    problem: "Baixa taxa de conversão no checkout.",
    solution: "Redesign focado em confiança e jornada sem atrito.",
    result: "+25% em vendas no primeiro mês.",
    color: "from-[#00C2FF]/20 to-[#00FF88]/20",
    overview: "Criação de uma experiência de compra fluida e imersiva para uma marca de luxo, otimizando cada etapa do funil de conversão, desde a descoberta do produto até o pagamento.",
    timeline: "2 meses",
    role: "UX/UI Designer",
    tools: ["Figma", "Webflow"],
    metrics: [
      { label: "Aumento em Vendas", value: "+25%" },
      { label: "Abandono de Carrinho", value: "-18%" },
      { label: "Ticket Médio", value: "+12%" }
    ]
  },
  {
    slug: "saas-platform",
    name: "SaaS Platform",
    category: "Product Design",
    problem: "Onboarding confuso gerando churn.",
    solution: "Fluxo guiado passo a passo com microinterações.",
    result: "Redução de 60% no churn de novos usuários.",
    color: "from-[#00FF88]/20 to-[#00C2FF]/20",
    overview: "Reestruturação da jornada de onboarding de uma plataforma B2B complexa. O objetivo foi reduzir a curva de aprendizado e guiar o usuário até o seu primeiro momento 'Aha!' de forma rápida e intuitiva.",
    timeline: "4 meses",
    role: "UX Strategist & UI Designer",
    tools: ["Figma", "Hotjar", "Amplitude"],
    metrics: [
      { label: "Redução de Churn", value: "60%" },
      { label: "Ativação de Usuários", value: "+45%" },
      { label: "Tempo de Onboarding", value: "-50%" }
    ]
  }
];

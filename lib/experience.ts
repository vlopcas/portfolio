export type Experience = {
  role: string;
  org: string;
  start: string;
  end?: string;
  logo?: string;
  ufg?: boolean;
  details: readonly string[];
};

export const experiences: readonly Experience[] = [
  {
    role: "Data Scientist Specialist",
    org: "Unimed Federação Centro Brasileira",
    start: "2025",
    end: "Presente",
    logo: "/images/institutions/unimed.webp",
    details: [
      "Desenvolvimento de pipelines e de um Data Warehouse regional para Goiás e Tocantins.",
      "Soluções de machine learning, LLM e RAG para apoio à decisão e auditoria médica.",
      "Aplicações, automações e dashboards com práticas de CI/CD, governança e qualidade de dados.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Ágil Serviços",
    start: "2024",
    logo: "/images/institutions/agil.webp",
    details: [
      "Interfaces em React e TypeScript integradas a APIs desenvolvidas em Python.",
      "PostgreSQL, bancos Azure e Redis aplicados a persistência, autenticação e sessões.",
      "Conteinerização com Docker, pipelines CI/CD, documentação e automações de negócio.",
    ],
  },
  {
    role: "Bioinformatics Intern",
    org: "Neurolab · UFG",
    start: "2023",
    ufg: true,
    details: [
      "Processamento e análise de dados relacionados a doenças neurodegenerativas.",
      "Trabalho interdisciplinar para transformar resultados técnicos em evidências interpretáveis.",
    ],
  },
  {
    role: "Bioinformatics Intern",
    org: "Laboratório de Imunorregulação · UFG",
    start: "2022",
    end: "2023",
    ufg: true,
    details: [
      "Desenvolvimento de um modelo in silico de vacina contra Chikungunya.",
      "Integração de dados biológicos e ferramentas de imunoinformática para seleção de candidatos.",
    ],
  },
  {
    role: "Bioinformatics Intern",
    org: "LabMol · UFG",
    start: "2019",
    end: "2020",
    ufg: true,
    details: [
      "Pesquisa de inibidores de proteínas do vírus Zika por modelagem molecular e análise de dados.",
      "Trabalho reconhecido com o 2º lugar em Ciências da Saúde na UFG.",
    ],
  },
];

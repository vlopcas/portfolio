export type ProjectStatus = "planned" | "active" | "experimental" | "stable";

export type Project = {
  slug: string;
  title: string;
  area: string;
  status: ProjectStatus;
  summary: string;
  tags: readonly string[];
  repository?: string;
  overview: string;
  problem: string;
  approach: string;
  architecture: readonly string[];
  decisions: readonly string[];
  nextSteps: readonly string[];
};

export const statusLabels: Record<ProjectStatus, string> = {
  planned: "Planejado",
  active: "Em desenvolvimento",
  experimental: "Experimental",
  stable: "Estável",
};

export const projects: readonly Project[] = [
  {
    slug: "medaudit",
    title: "Medaudit",
    area: "IA aplicada / RAG",
    status: "active",
    summary: "Sistema educacional de auditoria documental com recuperação avaliada, controle de evidências e geração local rastreável.",
    tags: ["Python", "RAG", "LLM local", "Retrieval"],
    repository: "https://github.com/vlopcas/medaudit",
    overview: "Um projeto educacional e evolutivo para estudar processamento documental, recuperação de informação, RAG e avaliação em um domínio que exige proveniência, abstention e revisão humana.",
    problem: "Documentos extensos, versões temporais e regras distribuídas dificultam localizar e correlacionar evidências. Em um domínio sensível, o sistema também precisa reconhecer evidência insuficiente e preservar a origem de cada resposta.",
    approach: "O pipeline local já cobre catálogo e vigência documental, parsing de texto, PDF e planilhas, OCR explícito, chunking estrutural, retrieval e avaliação reproduzível. BM25 permanece como baseline; busca densa, fusão híbrida e reranking foram implementados, mas seguem experimentais. Um RAG com LLM local, JSON Schema e citações validadas funciona sobre dados sintéticos, porém não foi liberado para o corpus privado após desempenho insuficiente no holdout.",
    architecture: ["Catálogo e versões", "Parsing, OCR e chunking", "Retrieval avaliado", "Gate de evidências", "LLM local e citações"],
    decisions: ["BM25 permanece como baseline principal", "Geração só recebe evidências aceitas pelo gate", "Dados privados ficam locais e decisões de alto impacto exigem revisão humana"],
    nextSteps: ["Implementar Query Understanding com casos sintéticos", "Avaliar uma nova hipótese para geração local", "Avançar depois para regras estruturadas"],
  },
  {
    slug: "third-party-lifecycle",
    title: "Third-Party Lifecycle",
    area: "Software / SaaS B2B",
    status: "planned",
    summary: "Plataforma multi-tenant para onboarding, conformidade documental e ciclo de vida de terceiros.",
    tags: ["SaaS", "Backend", "Workflows"],
    repository: "https://github.com/vlopcas/third-party-lifecycle",
    overview: "Uma proposta de plataforma B2B orientada a domínio para acompanhar terceiros do cadastro à renovação ou desligamento.",
    problem: "Processos de qualificação combinam documentos, aprovações, prazos, responsabilidades e trilhas de auditoria que se fragmentam facilmente.",
    approach: "O projeto começará pelo modelo de domínio e por uma fatia vertical pequena. Arquitetura e tecnologias permanecem propostas até a implementação.",
    architecture: ["Cadastro do terceiro", "Documentos", "Validação e aprovação", "Monitoramento e renovação"],
    decisions: ["Multi-tenancy desde o modelo", "Estados explícitos", "Auditabilidade como requisito central"],
    nextSteps: ["Modelar o domínio", "Definir isolamento de tenants", "Implementar o primeiro fluxo"],
  },
  {
    slug: "municipal-fiscal-data-platform",
    title: "Municipal Fiscal Data Platform",
    area: "Engenharia de dados",
    status: "planned",
    summary: "Plataforma rastreável para integrar dados econômicos e fiscais municipais de fontes públicas brasileiras.",
    tags: ["Data Engineering", "Analytics", "Python"],
    repository: "https://github.com/vlopcas/municipal-fiscal-data-platform",
    overview: "Uma plataforma planejada para padronizar dados do Siconfi, SIDRA, estimativas populacionais e localidades do IBGE.",
    problem: "Dados municipais estão distribuídos entre fontes, esquemas, períodos e ciclos de atualização distintos.",
    approach: "A primeira fatia deve integrar municípios de Goiás, preservando proveniência, identificadores IBGE e qualidade antes da expansão nacional.",
    architecture: ["Fontes oficiais", "Ingestão", "Camada bruta", "Padronização", "Marts analíticos"],
    decisions: ["Código IBGE como identificador canônico", "Processamento idempotente", "Complexidade proporcional ao volume real"],
    nextSteps: ["Descobrir contratos das fontes", "Construir fatia de Goiás", "Adicionar validações de qualidade"],
  },
  {
    slug: "energy-load-forecasting",
    title: "Energy Load Forecasting",
    area: "ML Engineering / MLOps",
    status: "planned",
    summary: "Sistema de previsão de carga elétrica de curto prazo com dados públicos do ONS e validação temporal.",
    tags: ["Forecasting", "MLOps", "ONS"],
    repository: "https://github.com/vlopcas/energy-load-forecasting",
    overview: "Um sistema planejado para prever carga horária por subsistema em horizontes de uma a 24 horas.",
    problem: "Forecasting exige que cada variável estivesse realmente disponível na origem da previsão; splits aleatórios podem esconder vazamento temporal.",
    approach: "O trabalho começará por baselines sazonais e backtesting walk-forward antes de modelos mais complexos.",
    architecture: ["Dados ONS", "Validação temporal", "Features point-in-time", "Treino e backtest", "Previsões e monitoramento"],
    decisions: ["Baseline antes de complexidade", "Validação exclusivamente temporal", "Promoção de modelo controlada"],
    nextSteps: ["Validar fonte inicial", "Implementar baselines", "Definir contrato de previsão"],
  },
  {
    slug: "coping-struggles-prediction",
    title: "Coping Struggles Prediction",
    area: "Data Science",
    status: "experimental",
    summary: "Classificação experimental de dificuldades de enfrentamento a partir de dados de saúde mental.",
    tags: ["Python", "Scikit-learn", "Ensemble"],
    repository: "https://github.com/vlopcas/coping_struggles_prediction",
    overview: "Um experimento de ciência de dados que combina dados públicos do Kaggle e respostas de formulário para investigar padrões associados a dificuldades de enfrentamento.",
    problem: "Dados comportamentais e de saúde mental exigem preparação cuidadosa, leitura responsável das variáveis e limites claros: uma classificação não equivale a um diagnóstico.",
    approach: "O notebook realiza codificação das variáveis, compara Logistic Regression, KNN, Random Forest e Gradient Boosting, ajusta hiperparâmetros e combina os melhores candidatos em um VotingClassifier.",
    architecture: ["Dados tabulares", "Preparação de atributos", "Comparação de modelos", "Ensemble e avaliação"],
    decisions: ["Tratar o resultado como experimento, não diagnóstico", "Comparar modelos antes do ensemble", "Documentar a acurácia de teste de 86,58% reportada no repositório"],
    nextSteps: ["Revisar possíveis vieses do conjunto", "Adicionar métricas além de acurácia", "Transformar o notebook em pipeline reproduzível"],
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

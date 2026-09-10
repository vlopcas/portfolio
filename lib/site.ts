const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.NODE_ENV === "production" ? "https://vlopcas.dev" : "http://localhost:3000");
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
export const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const site = {
  name: "Victor Castro",
  title: "Data Scientist | Software, Data & AI Systems",
  description:
    "Portfólio de Victor Castro com projetos e estudos de caso em ciência de dados, engenharia de software, machine learning, MLOps e inteligência artificial aplicada.",
  url: siteUrl,
  email: "victorlcastro.dsa@gmail.com",
  github: "https://github.com/vlopcas",
  linkedin: "https://www.linkedin.com/in/victorlcastro",
  whatsapp: "https://wa.me/5562991704877?text=Ol%C3%A1%2C%20Victor!%20Encontrei%20seu%20contato%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
} as const;

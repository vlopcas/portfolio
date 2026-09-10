# Deploy no GitHub Pages

O portfólio é exportado como site estático para a pasta `out/` e publicado em
`https://vlopcas.dev` pelo workflow `.github/workflows/pages.yml`.

## Configuração única no GitHub

1. Em **Settings > Pages > Build and deployment**, selecione **GitHub Actions**.
2. Em **Custom domain**, confirme `vlopcas.dev`.
3. Quando o certificado estiver disponível, habilite **Enforce HTTPS**.
4. Em **Settings > Pages**, verifique também o domínio para reduzir o risco de
   domain takeover.

O arquivo `public/CNAME` preserva o domínio em cada publicação. Os registros
DNS permanecem gerenciados na Cloudflare.

## Publicação

Cada push para `main` executa o build e publica o conteúdo de `out/`. Também
é possível iniciar o workflow manualmente em **Actions > Deploy GitHub Pages**.

Antes de enviar:

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Depois do deploy, valide a página inicial, projetos, experiência,
`/sitemap.xml`, `/robots.txt`, imagens sociais, HTTPS e os redirecionamentos
entre o domínio raiz e `www`, caso ambos estejam configurados.

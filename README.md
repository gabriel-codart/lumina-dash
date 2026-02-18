# 💡 Lumina Dash - Gestão Financeira para Devs

Um Dashboard SaaS moderno desenvolvido para consolidar conhecimentos na stack mais atual do mercado (Next.js 16+, TypeScript, Tailwind).

## 🚀 Tecnologias e Decisões Técnicas

- **Next.js 16 (App Router)**: Utilização de *Route Groups* para organização de layouts e *Server Components* para performance.
- **Middleware/Proxy**: Sistema de autenticação robusto que intercepta requisições no *Edge Runtime*, garantindo que áreas logadas nunca sofram "flash" de conteúdo protegido.
- **Shadcn/ui & Tailwind CSS**: Interface construída com componentes acessíveis e customizáveis, focada em uma experiência de usuário (UX) limpa e responsiva.
- **Visualização de Dados**: Gráficos dinâmicos com **Recharts**, adaptando-se automaticamente aos temas Dark e Light.
- **Biome**: Utilizado como ferramenta única de *linting* e formatação, garantindo um código limpo com performance 25x superior ao ESLint/Prettier tradicional.
- **Design Responsivo**: Layouts construídos com técnicas de *CSS Intrínseco* (Flexbox e Grid auto-ajustáveis), evitando quebras em diferentes tamanhos de tela.

## 🛠️ Funcionalidades

- [x] Autenticação simulada via Cookies e Proxy.
- [x] Dashboard com métricas financeiras e KPIs de projetos.
- [x] Gráficos de evolução faturamento mensal.
- [x] Gestão de projetos com tabelas responsivas e estados (Badges).
- [x] Alternância de tema (Dark/Light Mode) com persistência.
- [x] Logout funcional com invalidação de sessão.

---
*Projeto desenvolvido para portfólio técnico - 2026*

---

```
lumina-dash
📦src
 ┣ 📂app
 ┃ ┣ 📂(auth)
 ┃ ┃ ┗ 📂login
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂(dashboard)
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜pag(inutilizado).tsx
 ┣ 📂components
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜badge.tsx
 ┃ ┃ ┣ 📜button.tsx
 ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┣ 📜dropdown-menu.tsx
 ┃ ┃ ┣ 📜input.tsx
 ┃ ┃ ┣ 📜separator.tsx
 ┃ ┃ ┣ 📜sheet.tsx
 ┃ ┃ ┣ 📜sidebar.tsx
 ┃ ┃ ┣ 📜skeleton.tsx
 ┃ ┃ ┣ 📜table.tsx
 ┃ ┃ ┗ 📜tooltip.tsx
 ┃ ┣ 📜app-sidebar.tsx
 ┃ ┣ 📜mode-toggle.tsx
 ┃ ┣ 📜recent-projects.tsx
 ┃ ┣ 📜revenue-chart.tsx
 ┃ ┗ 📜theme-provider.tsx
 ┣ 📂hooks
 ┃ ┗ 📜use-mobile.ts
 ┣ 📂lib
 ┃ ┗ 📜utils.ts
 ┗ 📜proxy.ts

```
# 💇‍♀️ PamPam — Acessórios de Cabelo Premium

Landing page moderna e visualmente atrativa para e‑commerce de acessórios de cabelo, construída com **React**, **TypeScript** e **Vite**.

---

## ✨ Destaques

### 🎨 Design Premium

* **Tema dual**: modo claro (Rosa & Dourado) e modo escuro (Roxo & Cyan)
* **Paleta sofisticada**: cores cuidadosamente escolhidas para um visual elegante
* **Transições suaves**: alternância de tema com animações fluidas
* **Tipografia premium**: *Playfair Display* (títulos) + *Inter* (corpo)

### 🚀 Funcionalidades

* **Hero Section** com gradientes e *call to action*
* **Carrossel de produtos** com 10 itens em destaque e *auto‑play*
* **Grid de categorias** (6 categorias) com *hover effects*
* **Depoimentos** de clientes com sistema de estrelas
* **Responsivo** (*mobile‑first*) — funciona perfeitamente em todos os dispositivos

### ⚡ Performance

* **Vite**: build ultra‑rápido com *Hot Module Replacement*
* **Code splitting**: chunks otimizados (vendor, animações e carrossel)
* **Lazy loading**: imagens carregadas sob demanda
* **Otimização de fontes**: *self‑hosting* via `vite-plugin-webfont-dl`

### 🎭 Animações

* **Framer Motion** para animações suaves
* **Micro‑interações** em cards e botões
* **Animações on‑scroll** (entrada progressiva dos elementos)
* **Theme toggle** com rotação suave do ícone

---

## 🛠️ Tecnologias

* **React 18** — biblioteca UI moderna
* **TypeScript** — tipagem estática em todo o código
* **Vite** — ferramenta de build de próxima geração
* **Framer Motion** — animações
* **Embla Carousel** — carrossel leve e *touch‑friendly*
* **Lucide React** — ícones modernos
* **CSS Modules** — estilos isolados e otimizados

---

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

---

## 🎯 Scripts Disponíveis

* `npm run dev` — inicia o servidor de desenvolvimento (porta 3000)
* `npm run build` — gera build otimizado para produção
* `npm run preview` — preview local do build de produção
* `npm run lint` — executa o ESLint
* `npm run lint:fix` — corrige automaticamente problemas do ESLint
* `npm run format` — formata o código com Prettier
* `npm run type-check` — verificação de tipos TypeScript

---

## 📁 Estrutura do Projeto

```
sitepampam/
├── src/
│   ├── components/          # Componentes React
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── sections/        # Hero, ProductCarousel, CategoryGrid, Testimonials
│   │   ├── ui/              # Componentes reutilizáveis
│   │   └── animations/      # Componentes de animação
│   ├── context/             # Contexts (ex.: ThemeContext)
│   ├── hooks/               # Hooks customizados
│   ├── data/                # Dados mock (JSON/TS)
│   ├── types/               # Tipagens TypeScript
│   ├── styles/              # Estilos globais e temas
│   ├── utils/               # Funções utilitárias
│   ├── config/              # Configurações e constantes
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Entry point
├── public/                  # Assets estáticos
├── index.html               # Template HTML
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências e scripts
```

---

## 🎨 Sistema de Cores

### Modo Claro (Rosa & Dourado)

* **Primary**: `#C86570` — rosa profundo
* **Accent**: `#D4AF37` — dourado
* **Background**: `#FFFCF9` — creme quente
* **Text**: `#2C2C2C` — cinza escuro

### Modo Escuro (Roxo & Cyan)

* **Primary**: `#9A8BBB` — roxo médio
* **Accent**: `#00D9FF` — cyan
* **Background**: `#0F0A1F` — roxo escuro profundo
* **Text**: `#FFFFFF` — branco

---

## 🗄️ Integração com MongoDB (Preparado)

O projeto está estruturado para migração simples de dados *mock* para uma API com MongoDB.

### Estrutura Atual (Mock)

```ts
// Dados importados localmente
import { productsData } from '@/data';
```

### Migração Futura (API)

```ts
// Substituir import por fetch
const response = await fetch(API_ENDPOINTS.products);
const data = await response.json();
```

> **Observação:** os componentes não precisam mudar. A lógica de dados está isolada em *hooks*.

---

## 📊 Dados Mock

Inclui dados realistas para prototipação:

* **10 produtos** em destaque (preço, avaliação e tags)
* **6 categorias** organizadas
* **4 depoimentos** verificados de clientes

---

## 🚀 Próximos Passos (Pós‑MVP)

### Backend & Banco de Dados

* [ ] API Node.js + Express
* [ ] MongoDB Atlas
* [ ] Autenticação JWT
* [ ] Upload de imagens (Cloudinary)

### Funcionalidades E‑commerce

* [ ] Carrinho de compras
* [ ] Checkout
* [ ] Integração de pagamento (Stripe / Mercado Pago)
* [ ] Painel administrativo

### Melhorias

* [ ] SEO
* [ ] PWA (Progressive Web App)
* [ ] Testes automatizados
* [ ] Analytics e tracking

---

## 📝 Licença

Projeto criado para fins educacionais.

---

## 👤 Autor

**Pablo Pereira Lopes**

---

Desenvolvido com IA usando React, TypeScript e Vite

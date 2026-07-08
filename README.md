# Pacote Premium de Sites Interativos - MN Animat

Este pacote contém **6 demos estáticos** prontos para subir no **GitHub** e publicar na **Vercel** sem npm:

1. Psicologia
2. Corretora de imóveis
3. Escola
4. Restaurante de luxo
5. Lanchonete
6. Proposta comercial para negócios locais

## Destaques

- Imagens **3D realistas** geradas e incluídas no layout.
- Interações com o mouse (spotlight e tilt em cards/imagens).
- Botão para **ativar música ambiente** via Web Audio API.
- Aviso em todas as páginas com a frase: **"Aviso: são exemplos, não são sites reais."**
- Estrutura para ajudar na **venda do serviço** para o cliente final.
- Site estático, sem dependências de build.


## Versão Vite

Este pacote foi atualizado para funcionar como **aplicação Vite**.

### Rodar localmente

```bash
npm install
npm run dev
```

### Gerar build

```bash
npm run build
```

A pasta final será:

```txt
dist
```

### Publicar na Vercel

Use estas configurações:

```txt
Framework Preset: Vite
Install Command: npm install --no-audit --no-fund --legacy-peer-deps
Build Command: npm run build
Output Directory: dist
Node.js Version: 20.x
```

O projeto usa Vite em modo multi-page app, mantendo as páginas:

- /
- /psicologia/
- /imoveis/
- /escola/
- /restaurante-luxo/
- /lanchonete/
- /proposta-local/

## Personalização

Troque antes de usar comercialmente:
- nome da empresa
- WhatsApp e formulários
- políticas e dados legais
- preços e informações dos produtos/serviços
- identidade visual do cliente

## Observação

As imagens incluídas são conceituais/demonstrativas para apresentação comercial e podem ser substituídas por fotos reais do cliente quando necessário.


## Aviso usado nas páginas

Aviso: são exemplos, não são sites reais.


## Correção de imagens na Vercel

Esta versão usa a pasta:

```txt
public/assets
```

E os arquivos HTML apontam para:

```txt
/assets/nome-da-imagem.png
/assets/shared.css
/assets/shared.js
```

Isso evita problema de caminho em páginas internas e evita confusão com assets renomeados no build do Vite.

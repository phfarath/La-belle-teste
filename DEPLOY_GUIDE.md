# 🌐 Guia de Deploy - La Belle Cutanee

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado)

**Passos:**
1. Instale a CLI do Vercel: `npm i -g vercel`
2. No diretório do projeto: `vercel`
3. Siga as instruções do CLI
4. Configure as variáveis de ambiente no painel da Vercel

**Variáveis de Ambiente (Vercel):**
```
VITE_SUPABASE_URL=https://sua-url-do-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-publica-aqui
```

### 2. Netlify

**Passos:**
1. Conecte seu repositório Git ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Adicione as variáveis de ambiente

### 3. GitHub Pages

**Passos:**
1. Instale gh-pages: `npm install --save-dev gh-pages`
2. Adicione ao package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://seu-usuario.github.io/seu-repositorio"
}
```
3. Configure o vite.config.ts com base correta
4. Execute: `npm run build && npm run deploy`

### 4. Servidor VPS/Dedicado

**Requisitos:**
- Node.js 18+
- Nginx ou Apache
- PM2 (para produção)

**Configuração Nginx:**
```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    
    location / {
        root /caminho/para/dist;
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Preparação para Deploy

### 1. Build de Produção
```bash
npm run build
```

### 2. Preview Local
```bash
npm run preview
```

### 3. Verificar Arquivos
- Certifique-se que o `dist/` foi gerado
- Teste todas as funcionalidades
- Verifique se as variáveis de ambiente estão corretas

## ⚙️ Configurações Específicas

### Vite Config para Subdominios
Se você vai deployar em um subdiretório:

```typescript
// vite.config.ts
export default defineConfig({
  base: '/sua-pasta/',
  plugins: [react()],
})
```

### Headers de Segurança
Para maior segurança, configure estes headers:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## 📱 PWA (Opcional)

Para transformar em PWA, adicione:

1. **Vite PWA Plugin:**
```bash
npm install @vite-pwa/vite-plugin
```

2. **Configure vite.config.ts:**
```typescript
import { VitePWA } from '@vite-pwa/vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'La Belle Cutanee',
        short_name: 'LaBelle',
        description: 'Clínica de Dermatologia',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
})
```

## 🔒 Variáveis de Ambiente

**Para diferentes ambientes:**

### .env.local (Desenvolvimento)
```
VITE_SUPABASE_URL=https://projeto-dev.supabase.co
VITE_SUPABASE_ANON_KEY=key-dev
```

### .env.production (Produção)
```
VITE_SUPABASE_URL=https://projeto-prod.supabase.co
VITE_SUPABASE_ANON_KEY=key-prod
```

## 🎯 Checklist de Deploy

- [ ] Build executado com sucesso
- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados Supabase configurado
- [ ] Scripts SQL executados
- [ ] Dados de exemplo inseridos
- [ ] Teste de autenticação funcionando
- [ ] Teste de agendamento funcionando
- [ ] Teste de contato funcionando
- [ ] Responsividade verificada
- [ ] Performance otimizada

## 📊 Monitoramento

### Analytics (Opcional)
Adicione Google Analytics ou similares:

```typescript
// Em main.tsx ou App.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Analytics() {
  const location = useLocation();
  
  useEffect(() => {
    // Código do Google Analytics
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: location.pathname,
    });
  }, [location]);
  
  return null;
}
```

### Error Tracking
Considere usar Sentry para tracking de erros:

```bash
npm install @sentry/react
```

## 🚀 Deploy Automático

### GitHub Actions
Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      env:
        VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
        VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
        
    - name: Deploy
      # Configure seu método de deploy aqui
```

## 🎉 Pronto para o Mundo!

Seu sistema de dermatologia está pronto para ser usado por clientes reais! 🌟

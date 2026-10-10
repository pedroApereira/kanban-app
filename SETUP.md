# Kanban App - Setup Guide

## Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Angular CLI (`npm install -g @angular/cli`)

## Instalação

1. **Clone ou aceda ao repositório**
   ```bash
   cd kanban-app
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```
   Ou:
   ```bash
   ng serve
   ```

4. **Abra o browser**
   Navegue para `http://localhost:4200`

## Funcionalidades

- ✅ Criar colunas
- ✅ Remover colunas
- ✅ Adicionar tarefas
- ✅ Editar tarefas (clique no título ou no ícone de edição)
- ✅ Remover tarefas
- ✅ Arrastar tarefas entre colunas
- ✅ Persistência em localStorage
- ✅ Interface responsiva
- ✅ Modal para editar tarefas

## Como usar

### Criar coluna
- Digite o nome da coluna no campo de entrada
- Clique no botão "+ Add Column"

### Adicionar tarefa
- Clique em "+ Add Task" na coluna desejada
- Digite o título e clique em "Add"

### Editar tarefa
- Clique no título da tarefa ou no ícone "✎"
- Altere o título e/ou descrição
- Clique em "Update"

### Mover tarefa
- Clique e segure numa tarefa
- Arraste para a coluna de destino
- Largue para confirmar

### Remover tarefa/coluna
- Clique no ícone "×"
- Confirme a remoção

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── board/
│   │   │   ├── board.component.ts
│   │   │   ├── board.component.html
│   │   │   └── board.component.scss
│   │   ├── column/
│   │   │   ├── column.component.ts
│   │   │   ├── column.component.html
│   │   │   └── column.component.scss
│   │   ├── task-card/
│   │   │   ├── task-card.component.ts
│   │   │   ├── task-card.component.html
│   │   │   └── task-card.component.scss
│   │   └── task-form/
│   │       ├── task-form.component.ts
│   │       ├── task-form.component.html
│   │       └── task-form.component.scss
│   ├── models/
│   │   └── board.model.ts
│   ├── services/
│   │   └── board.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.scss
├── main.ts
├── styles.scss
└── index.html
```

## Tecnologias

- Angular 18
- TypeScript
- SCSS
- Angular CDK (Drag and Drop)
- RxJS (Reactive Programming)

## Testes

Para executar os testes:
```bash
npm test
```

## Build para produção

```bash
npm run build
```

Os ficheiros compilados estarão em `dist/kanban-app`

# Especificação Técnica do Projeto

## 1. Objetivo

Este documento define a base técnica da aplicação Kanban, com foco numa implementação inicial em Angular, sem backend, mas com vista a evolução futura para integração com .NET.

## 2. Stack tecnológica

### Frontend
- Angular
- TypeScript
- HTML
- CSS / SCSS
- Angular CDK Drag and Drop

### Persistência inicial
- localStorage

### Backend futuro
- .NET C#
- API REST

## 3. Objetivo funcional da aplicação

A aplicação deve permitir:

- criar colunas do quadro Kanban;
- criar tarefas dentro das colunas;
- mover tarefas entre colunas;
- editar tarefas;
- remover tarefas;
- persistir os dados localmente no navegador;
- manter a experiência simples e responsiva.

## 4. Regras de negócio principais

1. Cada coluna deve ter um identificador único.
2. Cada tarefa deve pertencer a uma coluna válida.
3. O título da tarefa é obrigatório.
4. O utilizador deve conseguir mover qualquer tarefa para outra coluna.
5. O estado da aplicação deve refletir imediatamente na interface.
6. A persistência deve guardar colunas e tarefas no browser.
7. O layout deve funcionar em ecrãs pequenos e grandes.

## 5. Estrutura de dados

### Entidade `Task`

```ts
interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
}
```

### Entidade `Column`

```ts
interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
```

### Estado do board

```ts
interface BoardState {
  columns: Column[];
}
```

## 6. Modelos de estado

A aplicação utilizará um modelo simples de estado centralizado, com as seguintes operações:

- `addColumn(title: string): void`
- `removeColumn(columnId: string): void`
- `addTask(columnId: string, title: string, description?: string): void`
- `removeTask(taskId: string): void`
- `updateTask(taskId: string, updates: Partial<Task>): void`
- `moveTask(taskId: string, targetColumnId: string): void`
- `loadFromStorage(): void`
- `saveToStorage(): void`

## 7. Regras de persistência

### localStorage
A aplicação deve guardar o estado no `localStorage` usando uma key única, por exemplo:

```ts
const STORAGE_KEY = 'kanban-board-state';
```

### Comportamento esperado
- ao iniciar a aplicação, ler o estado guardado;
- ao alterar o estado, guardar automaticamente;
- em caso de dados inválidos, inicializar com o valor padrão.

## 8. Arquitetura recomendada

### Estrutura de pastas

```text
src/
  app/
    components/
      board/
      column/
      task-card/
      task-form/
    services/
      board.service.ts
    models/
      task.model.ts
      column.model.ts
    app.component.ts
    app.component.html
    app.component.scss
    app.module.ts
```

## 9. Comportamento do drag-and-drop

### Biblioteca recomendada
- Angular CDK Drag and Drop

### Regras
- as tarefas podem ser arrastadas dentro do mesmo array ou entre arrays diferentes;
- ao mover, atualizar a coluna da tarefa;
- a UI deve refletir imediatamente o novo estado;
- no caso de arrasto para coluna inexistente, a operação deve ser ignorada.

## 10. Regras de UI e UX

### Layout
- uso de flexbox ou CSS grid;
- colunas empilhadas horizontalmente em desktop;
- em mobile, colunas podem rolar horizontalmente;
- cada coluna deve ter espaço para uma listagem de tarefas;
- cada tarefa deve ser clara e clicável.

### Feedback visual
- hover em cartões e botões;
- estados de foco em inputs;
- efeito visual ao arrastar tarefa.

## 11. Validações mínimas

- título da coluna obrigatório;
- título da tarefa obrigatório;
- tamanho máximo de texto recomendado:
  - coluna: 40 caracteres;
  - tarefa: 120 caracteres;
  - descrição: 500 caracteres;
- campos vazios devem ser bloqueados.

## 12. Responsividade

### Desktop
- 3 a 5 colunas visíveis por default;
- scroll horizontal caso haja mais colunas.

### Tablet
- adaptação para espaço menor;
- colunas com largura mais reduzida;

### Mobile
- colunas em scroll horizontal;
- botões com área táctil adequada;
- formulários simples, sem clutter visual.

## 13. Segurança

### Medidas mínimas obrigatórias
- validar todos os inputs do utilizador;
- evitar renderização dinâmica de HTML insegura;
- nunca armazenar dados sensíveis em `localStorage`;
- tratar todas as entradas como não confiáveis.

## 14. Boas práticas de código

- componentes pequenos e com responsabilidade única;
- modelagem simples e clara;
- uso de serviços para lógica de estado;
- evitar lógica de negócio misturada com template;
- separar regras de UI, regras de negócio e persistência.

## 15. Critérios de aceitação técnicos

A aplicação será considerada funcional quando:

- o projeto Angular inicial estiver criado corretamente;
- for possível adicionar e remover colunas;
- for possível adicionar, editar e remover tarefas;
- o arrasto entre colunas funcionar corretamente;
- o estado persistir no browser;
- a interface responder bem em desktop e mobile.

## 16. Próximos passos após esta especificação

1. criação do projeto Angular;
2. desenvolvimento dos componentes principais;
3. implementação da gestão de estado;
4. integração do drag-and-drop;
5. persistência em localStorage;
6. revisão e testes finais.

## 17. Conclusão

Esta especificação servir como base técnica para a implementação da primeira versão da aplicação. Ela mantém a solução simples e alinhada com os requisitos e design já definidos, ao mesmo tempo que prepara a evolução para um backend .NET no futuro.

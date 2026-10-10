# Plano de Desenvolvimento

## 1. Objetivo

Este plano define a sequência de trabalho para a implementação da aplicação Kanban em Angular, com foco inicial numa versão simples e funcional, sem backend ainda.

A solução será desenvolvida em fases, mantendo uma abordagem incremental, com entregáveis claros e fácil validação.

## 2. Visão geral do projeto

A aplicação deverá permitir:

- criar colunas;
- adicionar tarefas em cada coluna;
- mover tarefas entre colunas;
- editar e remover tarefas;
- manter a lógica visual coerente;
- evoluir para persistência e integração com backend posterior.

## 3. Fases do desenvolvimento

### Fase 1 — Base da aplicação

Objetivo: preparar a estrutura do projeto Angular e a base do layout.

Tarefas:
- criar o projeto Angular;
- configurar a estrutura inicial de componentes;
- criar layout principal;
- definir estilos base e responsividade;
- configurar a estrutura de dados inicial.

Entregáveis:
- app Angular inicial executando;
- layout base do quadro Kanban;
- estrutura funcional de componentes.

### Fase 2 — Gestão de colunas e tarefas

Objetivo: implementar a lógica principal da aplicação.

Tarefas:
- criar coluna;
- remover coluna;
- renomear coluna;
- adicionar tarefa;
- remover tarefa;
- editar tarefa;
- validar títulos vazios;
- manter consistência do estado.

Entregáveis:
- funcionalidade base de gestão de Board;
- estado consistente das colunas e cartões.

### Fase 3 — Drag-and-drop

Objetivo: permitir a movimentação visual das tarefas entre colunas.

Tarefas:
- integrar Angular CDK Drag and Drop;
- conectar a lógica de arrasto com o modelo de dados;
- garantir atualização da coluna em tempo real;
- validar comportamento em múltiplas colunas;
- ajustar UX para melhor feedback visual.

Entregáveis:
- tarefas arrastáveis entre colunas;
- estado interno sincronizado com a UI.

### Fase 4 — Persistência e UX

Objetivo: melhorar a experiência e permitir continuidade após refresh.

Tarefas:
- guardar estado em localStorage;
- restaurar dados na inicialização;
- melhorar feedback visual;
- refinar estados de criação, edição e eliminação;
- ajustar responsividade.

Entregáveis:
- aplicação com persistência local;
- experiência mais estável e agradável.

### Fase 5 — Polimento e validação

Objetivo: garantir qualidade antes de dar continuidade ao backend.

Tarefas:
- validar casos de erro;
- corrigir bugs de usabilidade;
- testar diferentes cenários de interação;
- revisar código e organização;
- preparar evolução para .NET.

Entregáveis:
- aplicação funcional e estável;
- documentação de implementação atualizada;
- base pronta para integração backend.

## 4. Prioridades

### Alta prioridade
- estrutura do projeto;
- criação de colunas e tarefas;
- edição e remoção;
- arrastamento entre colunas;
- persistência básica.

### Média prioridade
- UX refinada;
- estilos responsivos;
- validações avançadas;
- melhoria de feedback visual.

### Baixa prioridade
- integração com backend .NET;
- autenticação;
- sincronização multiutilizador;
- funcionalidades avançadas de filtro e etiquetas.

## 5. Roadmap sugerido

### Sprint 1 — Estrutura e base funcional
- criação do projeto Angular;
- layout do board;
- criação de colunas;
- criação de tarefas;
- edição/remoção básica.

### Sprint 2 — Interação e experiência
- implementação do drag-and-drop;
- persistência local;
- ajustes visuais;
- testes funcionais iniciais.

### Sprint 3 — Qualidade e preparação para evolução
- refinamentos;
- correção de bugs;
- testes finais;
- preparação para backend.

## 6. Critérios de entrega por fase

Cada fase só deve ser considerada concluída quando:

- o comportamento funcional estiver validado;
- a interface corresponder ao design definido;
- o código estiver organizado e legível;
- os testes básicos relevantes tiverem sido executados;
- os problemas críticos tenham sido corrigidos.

## 7. Riscos e mitigação

### Risco: arrasto não funciona corretamente
Mitigação: validar em pequenas iterações e testar casos de coluna vazia e múltiplas tarefas.

### Risco: estado inconsistente
Mitigação: centralizar o estado e manter sincronização simples entre componente pai e filhos.

### Risco: interface pouco responsiva
Mitigação: testar em diferentes larguras e ajustar CSS com flexbox/grid responsivo.

### Risco: complexidade crescida antes da validação
Mitigação: manter a primeira versão simples e funcional, sem adicionar backend antes de validar o produto.

## 8. Decisões de arquitetura

- Frontend em Angular.
- Estrutura simples baseada em componentes.
- Gestão de estado local em componente raiz ou serviço central.
- Persistência inicial em localStorage.
- Uso do Angular CDK para drag-and-drop.
- Backend .NET apenas em fase posterior.

## 9. Entregáveis finais esperados

- aplicação funcional de quadro Kanban;
- interação visual de arrastar tarefas;
- persistência local;
- documentação de requisitos, design e desenvolvimento;
- base pronta para continuar com .NET.

## 10. Conclusão

Este plano mantém o projeto em um caminho simples, testável e progressivo. A prioridade é validar a experiência de utilização e a lógica da aplicação antes de introduzir camadas mais avançadas, como backend, autenticação ou persistência persistente.

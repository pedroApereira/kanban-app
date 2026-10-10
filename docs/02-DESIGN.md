# Design da Solução

## 1. Objetivo da fase de design

Nesta fase, define-se a estrutura visual e funcional da aplicação, de modo a preparar a implementação em Angular. O foco é manter a solução simples, clara e fácil de evoluir.

A app será uma ferramenta de gestão de tarefas inspirada em um quadro Kanban, com a possibilidade de:

- criar colunas;
- adicionar cartões/tasks;
- arrastar tarefas entre colunas;
- atualizar o estado visual em tempo real;
- manter a estrutura principal pronta para uma futura integração com backend.

## 2. Visão geral da interface

A interface será composta por:

- um header com título da aplicação;
- um botão para adicionar nova coluna;
- um conjunto de colunas dispostas horizontalmente;
- cada coluna com:
  - título;
  - botão para adicionar tarefa;
  - lista de cartões;
  - ações de edição/remoção;
- um formulário simples para criar ou editar tarefas;
- comportamento visual de drag-and-drop entre colunas.

## 3. Estrutura da aplicação

### 3.1 Layout geral

A página principal terá um layout tipo dashboard:

```text
+---------------------------------------------------------------+
| Kanban App                          [ + Nova coluna ]         |
+---------------------------------------------------------------+
| [ To Do ]    [ Doing ]    [ Done ]                            |
| + ...        + ...        + ...                              |
| Card 1       Card 3       Card 5                              |
| Card 2       Card 4                                           |
| ...                                                           |
+---------------------------------------------------------------+
```

### 3.2 Organização visual

- Cada coluna será um bloco visual com fundo neutro e borda.
- Cada tarefa será um cartão com elevção leve e espaçamento.
- As tarefas visualmente destacam-se por apresentar título e, opcionalmente, descrição curta.
- O utilizador consegue entender rapidamente em que estado cada tarefa se encontra.

## 4. Componentes principais

### 4.1 `AppComponent`
Responsável por:

- renderizar o quadro principal;
- manter o estado global da aplicação;
- orquestrar as ações de criação de coluna e tarefa;
- coordenar o drag-and-drop.

### 4.2 `BoardComponent`
Responsável por:

- renderizar todas as colunas;
- receber as colunas em estado;
- delegar ações de cada cartão.

### 4.3 `ColumnComponent`
Responsável por:

- mostrar o título da coluna;
- listar as tarefas da coluna;
- permitir adicionar tarefa;
- mostrar ações de edição/remoção da coluna.

### 4.4 `TaskCardComponent`
Responsável por:

- exibir o conteúdo da tarefa;
- permitir editar e eliminar a tarefa;
- servir como alvo para arrasto.

### 4.5 `TaskFormComponent`
Responsável por:

- capturar título e descrição da tarefa;
- permitir criação e edição;
- devolver os dados ao componente pai para atualização.

## 5. Modelo de dados

A solução pode começar com um modelo simples em memória:

```ts
interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
```

### Estrutura base do estado

```ts
interface BoardState {
  columns: Column[];
}
```

Este modelo é suficiente para a primeira versão funcional e permite evoluir facilmente para persistência em localStorage ou integração com API.

## 6. Fluxos de utilização

### 6.1 Criar coluna

1. O utilizador clica em “Nova coluna”.
2. Um formulário simples é aberto.
3. O utilizador introduz o nome da coluna.
4. A nova coluna é adicionada ao final do quadro.

### 6.2 Criar tarefa

1. O utilizador clica em “+ Adicionar tarefa” dentro da coluna.
2. Introduz o título e, opcionalmente, a descrição.
3. A tarefa é adicionada ao fim da lista da coluna.

### 6.3 Mover tarefa

1. O utilizador arrasta a tarefa para outra coluna.
2. O sistema atualiza a propriedade `columnId` da tarefa.
3. A interface re-renderiza a tarefa na nova coluna.

### 6.4 Editar tarefa

1. O utilizador clica na tarefa.
2. O formulário de edição é apresentado.
3. O conteúdo é atualizado e guardado.

### 6.5 Eliminar tarefa/coluna

1. O utilizador clica no ícone de remoção.
2. O sistema confirma a ação (se implementado).
3. O cartão ou coluna desaparece da interface.

## 7. Comportamento do drag-and-drop

### Opção recomendada

Para esta versão inicial, recomenda-se a utilização do Angular CDK Drag and Drop, porque oferece:

- suporte nativo para arrastar elementos em listas;
- facilidade de implementação com arrays;
- atualização da UI em tempo real;
- maior legibilidade para uma prova de conceito.

### Regras de movimentação

- Uma tarefa só pode ser movida dentro da área da coluna.
- A coluna de origem e destino devem atualizar a lista de tarefas.
- O estado interno do array deve manter consistência com a visualização.
- Quando a tarefa for movida, o identificador da coluna é atualizado.

### Exemplo de fluxo

```text
Tarefa: "Criar layout"
Origem: "To Do"
Destino: "Doing"
Resultado: o estado da tarefa muda para columnId = "doing"
```

## 8. Experiência de utilizador (UX)

A aplicação deve ser intuitiva e pouco carregada. A UX será baseada em regras simples:

- ações principais visíveis logo no topo;
- feedback visual imediato após criação ou movimentação;
- pouca necessidade de navegação complexa;
- interface clara com contraste suficiente;
- layout adaptável em ecrãs pequenos.

## 9. Estado da aplicação e controlo de fluxo

Para a primeira versão, a gestão de estado pode ser feita de forma simples no componente principal, usando:

- array de colunas;
- funções de atualização;
- eventos emitidos pelos componentes filhos;
- renderização reativa com Angular.

A abordagem é suficiente para validar a lógica de negócio e a interação do utilizador sem adicionar complexidade desnecessária.

## 10. Persistência

Como o objetivo inicial é validar a experiência e a lógica funcional, a persistência pode ser feita em localStorage. Isso permite:

- manter o estado após refresh;
- testar a UX sem backend;
- preparar a aplicação para uma próxima integração com API .NET.

## 11. Proposta de arquitetura visual

### Interface principal

- header fixo;
- toolbar com botão de nova coluna;
- área principal com lista horizontal de colunas;
- cards com altura uniforme;
- ecrã responsivo para mobile.

### Cores sugeridas

- fundo principal: cinza claro;
- coluna: branco ou cinza muito claro;
- cartão: branco com sombra leve;
- botão primário: azul ou verde;
- botões secundários: cinza / vermelho para remoção.

## 12. Assumptions e decisões

- A primeira versão será frontend-only.
- A primeira interação de drag-and-drop será funcional e visualmente simples.
- Não haverá autenticação nem gestão de utilizadores neste Sprint inicial.
- O objetivo principal é demonstrar o fluxo do quadro Kanban e validar a experiência do utilizador.

## 13. Entregáveis desta fase

- Documento de design;
- definição da estrutura visual;
- proposta de componentes;
- modelo de dados inicial;
- definição do fluxo de interação;
- base para implementação do projeto Angular.

## 14. Conclusão

A fase de design define a base visual e estrutural da aplicação. Com a arquitetura correta, a implementação Angular torna-se mais simples, previsível e alinhada com os requisitos definidos na fase anterior.

A próxima etapa será o planeamento de desenvolvimento, onde será estabelecido o roadmap e a sequência das tarefas de implementação.

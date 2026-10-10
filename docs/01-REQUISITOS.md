# Documentação de Requisitos

## 1. Visão Geral

Este projeto consiste no desenvolvimento de uma aplicação web de gestão de tarefas inspirada em um quadro Kanban. A aplicação permitirá ao utilizador criar colunas de trabalho, adicionar cartões (tarefas), mover os cartões entre colunas e organizar o seu trabalho de forma visual e intuitiva.

A aplicação terá uma abordagem simples e funcional, com foco na experiência de utilizador e na demonstração de conceitos básicos de organização, gestão de tarefas e drag-and-drop.

## 2. Objetivo do Projeto

O objetivo principal da solução é permitir que um utilizador:

- crie uma lista de tarefas;
- organize as tarefas em colunas;
- arraste os cartões entre colunas;
- acompanhe o progresso das tarefas;
- mantenha a organização visual do trabalho.

Este projeto será utilizado como uma prova de conceito para validar a implementação de uma interface tipo Kanban num frontend Angular, assim como para demonstrar o processo de desenvolvimento em várias fases: requisitos, design, planeamento, testes e implementação.

## 3. Contexto de Utilização

A aplicação destina-se a utilizadores que precisam de gerir tarefas diárias ou projectos pessoais, como por exemplo:

- estudantes;
- profissionais;
- utilizadores que organizam o seu trabalho pessoal;
- qualquer pessoa que queira representar tarefas num quadro visual.

## 4. Objetivos Funcionais

### 4.1 Criação de colunas
O sistema deve permitir ao utilizador criar novas colunas, por exemplo:

- To Do
- In Progress
- Done

Cada coluna deve ter um nome identificativo e uma lista de tarefas associada.

### 4.2 Criação de cartões/tarefas
O utilizador deve conseguir adicionar uma nova tarefa a uma coluna. Cada tarefa deve conter:

- título;
- descrição opcional;
- estado/coluna atual;
- identificação única.

### 4.3 Movimentação de tarefas entre colunas
O utilizador deve poder arrastar uma tarefa de uma coluna para outra. Quando o movimento for realizado, a tarefa deve atualizar a sua coluna associada e a interface deve refletir esse estado imediatamente.

### 4.4 Edição de tarefas
O utilizador deve poder editar o conteúdo de uma tarefa existente, como por exemplo:

- alterar o título;
- alterar a descrição;
- mover a tarefa manualmente entre colunas.

### 4.5 Eliminação de tarefas
O sistema deve permitir remover tarefas individualmente.

### 4.6 Eliminação de colunas
O utilizador deve poder remover colunas quando já não forem necessárias. A remoção deve respeitar regras de consistência da aplicação.

### 4.7 Organização visual
A aplicação deve exibir as colunas em linha horizontal ou em layout responsivo, com espaço suficiente para uma navegação clara e fácil.

## 5. Regras de Negócio

1. Cada coluna deve ter um nome único dentro da lista de colunas do utilizador.
2. Cada tarefa deve estar associada a uma única coluna.
3. Uma tarefa deve possuir pelo menos um título.
4. O título da tarefa não deve estar vazio.
5. A criação de uma coluna deve ser possível sem necessidade de backend neste primeiro momento.
6. O arrasto de tarefas deve funcionar de forma a manter a tarefa na coluna correta após a movimentação.
7. A aplicação deve manter a consistência visual entre o estado interno e a interface.
8. Caso um utilizador exclua uma coluna, as tarefas dessa coluna devem ser tratadas de acordo com a regra definida na fase de design.

## 6. Critérios de Aceitação

### Cenário 1: Criar coluna
Dado que o utilizador abre a aplicação, quando clica no botão “Adicionar coluna”, então uma nova coluna é criada com um nome válido e aparece na interface.

### Cenário 2: Criar tarefa
Dado que uma coluna existe, quando o utilizador preenche o título da tarefa e confirma, então a tarefa é criada e exibida na coluna correspondente.

### Cenário 3: Mover tarefa entre colunas
Dado que existem pelo menos duas colunas e uma tarefa, quando o utilizador arrasta a tarefa para outra coluna, então a tarefa aparece nessa nova coluna e a coluna anterior deixa de a incluir.

### Cenário 4: Editar tarefa
Dado que uma tarefa existe, quando o utilizador altera o conteúdo e guarda, então a informação da tarefa é atualizada na interface.

### Cenário 5: Remover tarefa
Dado que uma tarefa existe, quando o utilizador elimina a tarefa, então a tarefa desaparece da coluna e deixa de existir na aplicação.

### Cenário 6: Persistência local (se implementada)
Dado que o utilizador recarrega a página, quando a aplicação restaurar os dados, então as colunas e tarefas são mostradas no mesmo estado anterior.

## 7. Requisitos Não Funcionais

### 7.1 Usabilidade
A interface deve ser intuitiva, clara e acessível, permitindo que um utilizador aprenda rapidamente a usar a aplicação sem instruções complexas.

### 7.2 Responsividade
A aplicação deve ser utilizável em ecrãs de computador, tablet e telemóvel, adaptando-se ao espaço disponível.

### 7.3 Desempenho
A aplicação deve responder de forma rápida às ações do utilizador, especialmente ao arrastar tarefas entre colunas.

### 7.4 Manutenibilidade
A arquitetura da aplicação deve permitir evoluções futuras, como integração com backend, autenticação, persistência em base de dados ou edição mais rica de tarefas.

## 8. Restrições

- O projeto inicial será focado em frontend, sem integração com backend.
- A aplicação será desenvolvida em Angular.
- O backend .NET/C# pode ser integrado mais tarde, mas não será obrigatório para a primeira versão funcional.
- A persistência inicial pode ser feita em memória ou em localStorage, dependendo da fase de implementação.

## 9. Entregáveis da Fase de Requisitos

- Documento de requisitos;
- lista de funcionalidades prioritárias;
- critérios de aceitação;
- regras de negócio base;
- definição do escopo inicial.

## 10. Conclusão

Este projeto define uma base clara para o desenvolvimento de uma aplicação Kanban simples. A prioridade inicial é validar a criação de colunas e tarefas, a organização visual e a funcionalidade de arrastar tarefas entre colunas, mantendo a solução simples, compreensível e fácil de expandir.

A documentação que se segue permite passar para a fase de design, onde serão definidas a estrutura visual, os fluxos e a arquitetura da interface do utilizador.

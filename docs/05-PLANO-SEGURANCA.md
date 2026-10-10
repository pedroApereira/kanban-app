# Plano de Segurança

## 1. Objetivo

Este documento identifica as regras de segurança básicas que devem ser consideradas durante o desenvolvimento da aplicação Kanban, mesmo que a primeira versão seja somente frontend.

O objetivo é garantir que a aplicação seja simples, segura e preparada para evoluir com medidas mais robustas, especialmente quando a integração com backend .NET for adicionada.

## 2. Segurança no frontend

### 2.1 Validação de inputs
Todas as entradas fornecidas pelo utilizador devem ser validadas antes de serem armazenadas ou exibidas.

Regras mínimas:
- bloquear campos vazios;
- remover espaços em branco excessivos;
- validar tamanho máximo de texto;
- evitar strings com conteúdo suspeito ou malformado.

### 2.2 Proteção contra XSS
A aplicação deve evitar renderizar conteúdo user-generated de forma insegura.

Medidas recomendadas:
- usar Angular bindings seguros;
- evitar inserção de HTML dinâmico manualmente;
- sanitizar conteúdos quando necessário;
- garantir que textos inseridos não sejam interpretados como HTML bruto.

### 2.3 Proteção contra armazenamento inseguro
Como a primeira versão pode usar `localStorage`, é importante reconhecer que esse mecanismo não é apropriado para dados sensíveis.

Regras básicas:
- não guardar dados sensíveis em localStorage;
- limitar dados armazenados a conteúdo de tarefas e configuração simples;
- desprezar qualquer informação que possa ser classificada como confidencial.

### 2.4 Estrutura de componente segura
- manter validações na camada de apresentação e de lógica;
- evitar execução de funções em templates sem controle;
- manter métodos e eventos simples e previsíveis.

## 3. Segurança em navegação e interação

### 3.1 CSRF
Embora a aplicação inicial não tenha autenticação nem backend, a evolução futura deve considerar proteção CSRF.

Medidas futuras esperadas:
- tokens antifalsificação;
- validação de origem nas requisições;
- utilização de cookies seguros em cenários autenticados.

### 3.2 Autenticação e autorização futura
Quando a solução evoluir para uma API .NET, devem ser previstas:
- autenticação de utilizadores;
- autorização por identidade e papel;
- regras de acesso por recurso.

## 4. Segurança de dados e rastreio

### 4.1 Logging
É recomendado manter logs simples para:
- ações de criação, edição e eliminação;
- erros de serialização ou validação;
- falhas relevantes no carregamento do estado.

### 4.2 Monitorização
Na evolução do projeto, devem ser monitorizados:
- erros de UI;
- falhas em persistência;
- eventos de validação.

## 5. Boas práticas do Angular

- usar `[(ngModel)]` ou formulários controlados com validação apropriada;
- evitar acesso direto a APIs sensíveis no frontend;
- manter o código modular e com separação clara de responsabilidades;
- validar antes de enviar qualquer dado ao backend ou ao armazenamento local.

## 6. Medidas mínimas requeridas para esta versão

A aplicação inicial deve, pelo menos:

- validar títulos vazios;
- impedir criação de conteúdo inválido;
- evitar renderização insegura de HTML;
- manter estado local apenas para dados de negócio simples;
- documentar limitations futuras de segurança.

## 7. Risco principal

O maior risco nesta versão será a exposição de conteúdo do utilizador em áreas inseguras ou a persistência de dados sem validação. Por isso, as regras principais desta fase são o controlo de inputs e a gestão consciente do armazenamento local.

## 8. Conclusão

Mesmo numa aplicação simples, a segurança deve ser tratada desde o início. A solução frontend atual é limitada, mas ainda assim deve incluir validações básicas, boas práticas de renderização e consciência do risco do armazenamento local.

Estas medidas formam a base necessária para evoluir para um ambiente mais robusto com .NET, autenticação e integrações mais críticas.

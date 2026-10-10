# Plano de Testes

## 1. Objetivo

Este documento define a estratégia de testes para a aplicação Kanban, com foco na validação de funcionalidade, usabilidade e robustez básica da primeira versão.

O principal objetivo é garantir que as tarefas principais funcionam corretamente antes de evoluir para backend, integrações ou refinamentos mais avançados.

## 2. Escopo dos testes

### Funcionalidades a validar
- criação de colunas;
- criação de tarefas;
- edição de tarefas;
- remoção de tarefas;
- movimentação de tarefas entre colunas;
- visualização correta das colunas e tarefas;
- persistência local no browser.

### Não faz parte do escopo inicial
- autenticação;
- sincronização multicliente;
- backend .NET;
- testes de carga;
- testes de segurança avançados de rede.

## 3. Estratégia geral

A estratégia será dividida em:

- testes funcionais;
- testes de usabilidade;
- testes de regressão;
- testes de persistência.

## 4. Tipos de teste

### 4.1 Testes funcionais

Validadam se cada funcionalidade corresponde ao que foi definido no documento de requisitos.

Casos principais:

1. Criar coluna
   - inserir nome válido;
   - confirmar criação;
   - verificar que a coluna aparece na interface.

2. Criar tarefa
   - preencher título;
   - confirmar criação;
   - verificar que a tarefa aparece na coluna correta.

3. Editar tarefa
   - alterar título ou descrição;
   - guardar a edição;
   - verificar a atualização visual.

4. Remover tarefa
   - eliminar tarefa existente;
   - verificar que a tarefa desaparece da coluna.

5. Mover tarefa entre colunas
   - arrastar tarefa para outra coluna;
   - verificar que a tarefa aparece na nova coluna;
   - confirmar que não permanece na original.

6. Validar texto vazio
   - tentar criar tarefa sem título;
   - verificar que a aplicação bloqueia a ação.

### 4.2 Testes de usabilidade

A usabilidade será validada pela simplicidade e clareza do fluxo do utilizador.

Critérios:
- o utilizador consegue criar uma coluna sem instruções;
- a tarefa fica imediatamente visível;
- o arrasto é intuitivo;
- a ação de remoção é clara;
- a interface é compreensível visualmente.

### 4.3 Testes de regressão

A regressão será validada sempre que uma funcionalidade principal for alterada.

Exemplos:
- ao alterar o CSS, confirmar que as colunas continuam alinhadas;
- ao renomear lógica de estado, confirmar que o arrasto continua funcional;
- após persistência local, confirmar que os dados são restaurados corretamente.

### 4.4 Testes de persistência

Quando a persistência local for implementada, os cenários seguintes devem ser verificados:

- guardar o estado ao atualizar a pagina;
- restaurar as colunas e tarefas após refresh;
- manter consistência após múltiplas ações sequenciais.

## 5. Casos de teste prioritários

### CT-01: criação de coluna
Entrada: nome “Backlog”
Resultado esperado: coluna criada e visível.

### CT-02: criação de tarefa
Entrada: título “Definir layout”
Resultado esperado: adição visível à coluna correta.

### CT-03: mover tarefa para outra coluna
Entrada: arrastar tarefa de “To Do” para “Doing”
Resultado esperado: tarefa aparece em “Doing”.

### CT-04: edição de tarefa
Entrada: alterar título da tarefa
Resultado esperado: atualização imediata na UI.

### CT-05: remoção da tarefa
Entrada: botão de eliminação
Resultado esperado: tarefa removida da coluna.

### CT-06: texto vazio
Entrada: campo de tarefa sem título
Resultado esperado: bloqueio da ação e mensagem de validação.

### CT-07: persistência
Entrada: fechar e recarregar a página
Resultado esperado: itens mantidos no estado anterior.

## 6. Critérios de aceitação de qualidade

A aplicação será considerada pronta para a próxima etapa quando:

- todas as funcionalidades principais funcionarem sem falhas visíveis;
- o arrasto das tarefas for consistente;
- a correção de erros e validações básicas estiverem implementadas;
- a interface responder bem ao uso;
- os estados após refresh forem consistentes.

## 7. Plano de execução

### Testes iniciais
- validar criação de colunas;
- validar criação e edição de tarefas;
- validar arrasto entre colunas;
- validar eliminação.

### Testes de regressão
- após qualquer alteração estrutural, repetir o fluxo principal;
- validar persistência;
- verificar CSS e layout responsivo.

### Revisão final
- confirmar que todas as funcionalidades base do projeto estão operacionais;
- confirmar que a documentação e o design continuam coerentes com a implementação.

## 8. Riscos esperados

- arrasto entre colunas não funcionar como esperado;
- estado mutável gerar inconsistência;
- campos vazios permitirem criação inválida;
- elementos visuais não se adaptarem bem em mobile.

## 9. Mitigação dos riscos

- testar drag-and-drop em cenários simples e específicos;
- centralizar o estado da aplicação;
- implementar validação obrigatória em inputs de criação;
- ajustar CSS com responsividade e testes visuais.

## 10. Conclusão

Os testes desta aplicação inicial focam-se em validar a experiência de criação, organização e movimentação de tarefas. A prioridade é garantir estabilidade funcional na base da aplicação antes de avançar para integrações externas, backend ou requisitos mais complexos.

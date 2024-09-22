# API de Pedidos

## Descrição do Projeto

Esta API foi desenvolvida como parte de uma tarefa acadêmica para modelar um sistema de consulta de pedidos utilizando a abordagem API First. O objetivo é permitir que uma empresa exponha suas informações de pedidos aos clientes de forma segura e eficiente, seguindo a arquitetura RESTful.

## Funcionalidades

- **Consulta de Pedidos**: Permite consultar os pedidos registrados com a possibilidade de aplicar filtros.
- **Consulta de Itens do Pedido**: Permite consultar os itens de um pedido específico.

## Estrutura dos Dados

### Pedido

- **Código**: Identificador único do pedido
- **Data**: Data de criação do pedido
- **Cliente**:
  - **Código**: Identificador do cliente
  - **Nome**: Nome do cliente
  - **CPF**: Cadastro de Pessoa Física do cliente
- **Status**: Status do pedido (pago, enviado, aguardando pagamento, cancelado)
- **Filial de Origem**:
  - **Código**: Identificador da filial
  - **CEP**: Código de Endereçamento Postal da filial
- **Valor Total**: Total do pedido

...

## Como Executar o Projeto
Clone este repositório com o comando: git clone https://github.com/cristianfatec/LabDevWeb.API-pedidos.

Navegue até o diretório do projeto com: cd LabDevWeb.API-pedidos.

Instale as dependências com: npm install.

Inicie o servidor com: node server.js.

Acesse a API em http://localhost:3000



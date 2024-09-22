const express = require('express');
const app = express();

app.use(express.json());

// Simulação de um banco de dados em memória
const pedidos = [];

// Rota para criar um novo pedido (inserção de dados)
app.post('/pedidos', (req, res) => {
  const novoPedido = req.body;
  pedidos.push(novoPedido);
  res.status(201).send({ message: 'Pedido criado com sucesso!', pedido: novoPedido });
});

// Rota para consultar pedidos
app.get('/pedidos', (req, res) => {
  res.send(pedidos);
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});

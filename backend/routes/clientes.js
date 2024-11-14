const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

// Criar cliente
router.post('/', async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
});

// Buscar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar clientes' });
  }
});

router.put('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    // Atualizando os dados do cliente
    await cliente.update(req.body);

    return res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao atualizar cliente' });
  }
});

router.delete('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    // Deletando o cliente
    await cliente.destroy();

    return res.status(200).json({ message: 'Cliente deletado com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao deletar cliente' });
  }
});

module.exports = router;

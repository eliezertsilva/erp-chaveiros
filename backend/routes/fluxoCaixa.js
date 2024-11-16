const express = require('express');
const router = express.Router();
const FluxoCaixa = require('../models/fluxoCaixa');

// Rota GET para listar todas as transações do fluxo de caixa
router.get('/', async (req, res) => {
  try {
    const fluxo = await FluxoCaixa.findAll();
    res.status(200).json(fluxo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota POST para criar uma nova transação no fluxo de caixa
router.post('/', async (req, res) => {
  try {
    const novaTransacao = await FluxoCaixa.create(req.body);
    res.status(201).json(novaTransacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota GET para obter uma transação específica do fluxo de caixa
router.get('/:id', async (req, res) => {
  try {
    const transacao = await FluxoCaixa.findByPk(req.params.id);
    if (!transacao) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }
    res.status(200).json(transacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota PUT para atualizar uma transação no fluxo de caixa
router.put('/:id', async (req, res) => {
  try {
    const transacao = await FluxoCaixa.findByPk(req.params.id);
    if (!transacao) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }
    await transacao.update(req.body);
    res.status(200).json(transacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota DELETE para excluir uma transação no fluxo de caixa
router.delete('/:id', async (req, res) => {
  try {
    const transacao = await FluxoCaixa.findByPk(req.params.id);
    if (!transacao) {
      return res.status(404).json({ error: 'Transação não encontrada' });
    }
    await transacao.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

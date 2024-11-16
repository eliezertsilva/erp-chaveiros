// routes/contasAReceber.js
const express = require('express');
const router = express.Router();
const ContaReceber = require('../models/contasReceber');

// Rota GET para listar todas as contas a receber
router.get('/', async (req, res) => {
  try {
    const contas = await ContaReceber.findAll({
      include: 'cliente', // Inclui dados do cliente relacionado
    });
    return res.status(200).json(contas);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Rota POST para criar uma nova conta a receber
router.post('/', async (req, res) => {
  try {
    const novaConta = await ContaReceber.create(req.body);
    return res.status(201).json(novaConta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Rota GET para obter uma conta a receber específica
router.get('/:id', async (req, res) => {
  try {
    const conta = await ContaReceber.findByPk(req.params.id, {
      include: 'cliente',
    });
    if (!conta) {
      return res.status(404).json({ error: 'Conta não encontrada' });
    }
    return res.status(200).json(conta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Rota PUT para atualizar uma conta a receber
router.put('/:id', async (req, res) => {
  try {
    const conta = await ContaReceber.findByPk(req.params.id);
    if (!conta) {
      return res.status(404).json({ error: 'Conta não encontrada' });
    }
    await conta.update(req.body);
    return res.status(200).json(conta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Rota DELETE para excluir uma conta a receber
router.delete('/:id', async (req, res) => {
  try {
    const conta = await ContaReceber.findByPk(req.params.id);
    if (!conta) {
      return res.status(404).json({ error: 'Conta não encontrada' });
    }
    await conta.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;



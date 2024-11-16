const express = require('express');
const router = express.Router();
const ContaPagar = require('../models/contasPagar');

// Rota GET para listar todas as contas a pagar
router.get('/', async (req, res) => {
  try {
    const contas = await ContaPagar.findAll();
    res.status(200).json(contas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota POST para criar uma nova conta a pagar
router.post('/', async (req, res) => {
  try {
    const novaConta = await ContaPagar.create(req.body);
    res.status(201).json(novaConta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota GET para obter uma conta a pagar específica
router.get('/:id', async (req, res) => {
  try {
    const conta = await ContaPagar.findByPk(req.params.id);
    if (!conta) {
      return res.status(404).json({ error: 'Conta a Pagar não encontrada' });
    }
    res.status(200).json(conta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota PUT para atualizar uma conta a pagar
router.put('/:id', async (req, res) => {
  try {
    const conta = await ContaPagar.findByPk(req.params.id);
    if (!conta) {
      return res.status(404).json({ error: 'Conta a Pagar não encontrada' });
    }
    await conta.update(req.body);
    res.status(200).json(conta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota DELETE para excluir uma conta a pagar
router.delete('/:id', async (req, res) => {
  try {
    const conta = await ContaPagar.findByPk(req.params.id);
    if (!conta) {
      return res.status(404).json({ error: 'Conta a Pagar não encontrada' });
    }
    await conta.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

// backend/routes/clientes.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const { Cliente } = require('../models/cliente');
const router = express.Router();

// Criar um novo cliente (POST)
router.post(
  '/clientes',
  // Validações
  body('cpfCnpj').isLength({ min: 11, max: 14 }).withMessage('CPF ou CNPJ inválido'),
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const cliente = await Cliente.create(req.body);
      return res.status(201).json(cliente);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao criar cliente' });
    }
  }
);

// Listar todos os clientes (GET)
router.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    return res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao listar clientes' });
  }
});

// Buscar cliente por ID (GET)
router.get('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    return res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar cliente' });
  }
});

// Atualizar cliente (PUT)
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

// Deletar cliente (DELETE)
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


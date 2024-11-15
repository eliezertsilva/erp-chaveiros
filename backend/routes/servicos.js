const express = require('express');
const router = express.Router();
const Servico = require('../models/servico');

// Rota GET para listar todos os serviços
router.get('/', async (req, res) => {
  try {
    const servicos = await Servico.findAll();
    return res.status(200).json(servicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota POST para criar um novo serviço
router.post('/', async (req, res) => {
  try {
    const novoServico = await Servico.create(req.body);
    return res.status(201).json(novoServico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota GET para obter um serviço específico
router.get('/:id', async (req, res) => {
    try {
      const servico = await Servico.findByPk(req.params.id);
      if (!servico) {
        return res.status(404).json({ error: 'Serviço não encontrado' });
      }
      res.json(servico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Rota PUT para atualizar um serviço
router.put('/:id', async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id);
    if (!servico) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }
    await servico.update(req.body);
    res.json(servico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota DELETE para excluir um serviço
router.delete('/:id', async (req, res) => {
  try {
    const servico = await Servico.findByPk(req.params.id);
    if (!servico) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }
    await servico.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

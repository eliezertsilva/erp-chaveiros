const express = require('express');
const router = express.Router();
const Servico = require('../models/servico');

// Rota GET para listar todos os serviços
router.get('/', async (req, res) => {
  try {
    const servicos = await Servico.findAll();
    return res.status(200).json(servicos);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar clientes' });
  }
});

// Rota POST para criar um novo serviço
router.post('/', async (req, res) => {
  try {
    // Verificação básica para garantir que os dados esperados estejam presentes
    const { tipoServico, descricao, status } = req.body;
    if (!tipoServico || !descricao || !status) {
      return res.status(400).json({ error: 'Campos obrigatórios estão faltando' });
    }

    const novoServico = await Servico.create(req.body);
    return res.status(201).json(novoServico);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Rota GET para obter um serviço específico
router.get('/:id', async (req, res) => {
  try {
    // Garantir que o ID seja um número inteiro
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const servico = await Servico.findByPk(id);
    if (!servico) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }
    return res.json(servico);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Rota PUT para atualizar um serviço
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const servico = await Servico.findByPk(id);
    if (!servico) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }

    // Atualizar o serviço com os novos dados
    await servico.update(req.body);
    return res.json(servico);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Rota DELETE para excluir um serviço
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const servico = await Servico.findByPk(id);
    if (!servico) {
      return res.status(404).json({ error: 'Serviço não encontrado' });
    }

    await servico.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;

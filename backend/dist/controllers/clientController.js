"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("../models/Client");
const createClient = async (req, res) => {
    const { name, cpfCnpj, email, phone, address } = req.body;
    const clientRepository = (0, typeorm_1.getRepository)(Client_1.Client);
    try {
        const client = clientRepository.create({
            name,
            cpfCnpj,
            email,
            phone,
            address
        });
        await clientRepository.save(client);
        return res.status(201).json({ message: 'Cliente criado com sucesso!', client });
    }
    catch (error) {
        return res.status(400).json({ message: 'Erro ao criar cliente', error });
    }
};
exports.createClient = createClient;

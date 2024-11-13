import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Client } from '../models/Client';

export const createClient = async (req: Request, res: Response): Promise<any> => {
    const { name, cpfCnpj, email, phone, address } = req.body;
    
    const clientRepository = getRepository(Client);

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
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao criar cliente', error });
    }
};


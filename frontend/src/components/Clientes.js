// src/Clientes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Função para buscar os clientes da API
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/clientes');
        setClientes(response.data);  // Armazena os dados dos clientes no estado
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClientes();  // Chama a função para buscar os clientes
  }, []);  // O array vazio garante que isso execute apenas uma vez após o componente ser montado.

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.length > 0 ? (
          clientes.map(cliente => (
            <li key={cliente.id}>
              {cliente.nome} - {cliente.email} - {cliente.telefone}
            </li>
          ))
        ) : (
          <li>Carregando clientes...</li>
        )}
      </ul>
    </div>
  );
};

export default Clientes;


# 🚀 ERP ChaveHelper

**ERP ChaveHelper** é um sistema de gerenciamento para empresas de chaveiros, desenvolvido para auxiliar no controle de clientes, serviços, estoque, finanças e relatórios. O projeto utiliza uma arquitetura moderna baseada em microserviços, oferecendo escalabilidade e flexibilidade.

## 📝 Índice

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Funcionalidades](#-funcionalidades)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Execução do Projeto](#-execução-do-projeto)
- [Testes da API](#-testes-da-api)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 💻 Tecnologias Utilizadas

- **Frontend**: React com Bootstrap
- **Backend**: Node.js com Express
- **Banco de Dados**: SQL Server
- **ORM**: Sequelize
- **Gerenciamento de Estado**: Redux (ou Context API)
- **Estilização**: Bootstrap com personalizações
- **API REST**: Estrutura baseada em microserviços

## 📂 Estrutura de Pastas

```plaintext
E:\ChaveHelper\erp-chaveiros
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── index.js
├── frontend
│   ├── public
│   ├── src
│   ├── components
│   ├── pages
│   └── App.js
```

- **backend**: Contém toda a lógica do servidor, configuração do banco de dados e rotas da API.
- **frontend**: Projeto React para a interface do usuário.

## ✨ Funcionalidades

- **Gestão de Clientes**: Cadastro, listagem, edição e exclusão de clientes.
- **Gestão de Serviços**: Controle de ordens de serviço, orçamentos e status.
- **Gestão Financeira**: Controle de contas a pagar e a receber, fluxo de caixa e relatórios financeiros.
- **Dashboard Gerencial**: Visão geral do desempenho da empresa com gráficos e KPIs.
- **Autenticação e Controle de Acesso**: Sistema de login com permissões personalizadas.
- **Gestão de Estoque**: Cadastro de produtos, controle de estoque e alertas de reposição.

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- **Node.js** (v18 ou superior)
- **SQL Server** (configurado e acessível)
- **Git** (para controle de versão)
- **Postman** (opcional, para testar a API)

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/erp-chavehelper.git
   cd erp-chaveiros
   ```

2. **Instale as dependências do backend e frontend:**

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Configuração do Banco de Dados:**

   Edite o arquivo `backend/config/db.js` com as credenciais do SQL Server:

   ```javascript
   const sequelize = new Sequelize('erp_chavehelper', 'usuario', 'senha', {
     host: 'localhost',
     dialect: 'mssql',
   });
   ```

4. **Sincronize o banco de dados:**

   ```bash
   cd backend
   node sync-db.js
   ```

## 🚀 Execução do Projeto

### Backend

No diretório **backend**, execute:

```bash
npm start
```

O backend estará disponível em **`http://localhost:3000`**.

### Frontend

No diretório **frontend**, execute:

```bash
npm start
```

O frontend estará disponível em **`http://localhost:3000`**.

## 🔍 Testes da API

Você pode testar os endpoints da API utilizando o **Postman** ou qualquer outra ferramenta de requisições HTTP.

### Exemplo de Requisições CRUD para Clientes

- **GET**: Listar clientes

  ```bash
  GET http://localhost:3000/api/clientes
  ```

- **POST**: Criar cliente

  ```json
  POST http://localhost:3000/api/clientes
  Content-Type: application/json

  {
    "cpfCnpj": "12345678901",
    "nome": "João Silva",
    "email": "joao@example.com",
    "telefone": "11999999999",
    "endereco": "Rua Nova, 100"
  }
  ```

- **PUT**: Atualizar cliente

  ```json
  PUT http://localhost:3000/api/clientes/1
  Content-Type: application/json

  {
    "nome": "João da Silva",
    "telefone": "11988888888"
  }
  ```

- **DELETE**: Excluir cliente

  ```bash
  DELETE http://localhost:3000/api/clientes/1
  ```

## 🤝 Contribuição

Contribuições são bem-vindas! Para colaborar:

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b feature/sua-feature`.
3. Faça suas modificações e adicione os commits: `git commit -m 'Adiciona nova funcionalidade'`.
4. Envie para o seu fork: `git push origin feature/sua-feature`.
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Se tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato!

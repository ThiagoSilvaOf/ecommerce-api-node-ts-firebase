# E-commerce API - Node.js, TypeScript e Firebase (Em andamento)

API RESTful desenvolvida com **Node.js**, **Express**, **TypeScript** e **Firebase**, com foco em um sistema de e-commerce (como delivery, vendas online, etc). O projeto está sendo desenvolvido e segue boas práticas como organização por camadas (Controller, Service e Repository), validações, e uso do Firestore como banco de dados.

---

## 🚧 Status do Projeto

**Em desenvolvimento.**  
Atualmente, o projeto está com a parte de **CRUD completo no Firestore finalizada**.

---

## 🔧 Tecnologias até o momento

- Node.js
- Express
- TypeScript
- tsc-watch
- Firebase Admin SDK
- Firestore (NoSQL Database)
- Postman (para testes de API)

---

## ✅ Funcionalidades já implementadas

- Criação de servidor Express com TypeScript
- Hot Reload com `tsc-watch`
- Configuração de rotas com `express.Router`
- Organização por camadas (controllers)
- Integração com Firebase (Admin SDK)
- Persistência de dados no Firestore:
  - [x] Criar documentos
  - [x] Listar todos
  - [x] Buscar por ID
  - [x] Atualizar por ID
  - [x] Deletar por ID

---

## 📂 Estrutura atual do projeto

src/
├── controllers/
├── firebase/
├── routes/
├── index.ts
├── ...

---

## 🚀 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/ThiagoSilvaOf/ecommerce-api-node-ts-firebase.git

# Acesse a pasta
cd ecommerce-api-node-ts-firebase

# Instale as dependências
npm install

# Inicie o servidor com hot reload
npm start


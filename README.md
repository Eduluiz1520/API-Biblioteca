# 📚 API Biblioteca

API REST desenvolvida com Node.js para praticar conceitos de desenvolvimento Back-End e gerenciamento de dados de uma biblioteca.

O projeto permite realizar operações de cadastro, consulta, atualização e exclusão de livros e autores, utilizando MongoDB como banco de dados e Mongoose para modelagem e interação com os dados.

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido durante meus estudos de Back-End com o objetivo de colocar em prática conceitos como:

* Criação de uma API REST;
* Operações CRUD;
* Criação e organização de rotas;
* Controllers e Models;
* Programação assíncrona com `async/await`;
* Integração com MongoDB;
* Modelagem de dados utilizando Mongoose;
* Utilização de variáveis de ambiente;
* Tratamento de erros;
* Organização da estrutura de uma aplicação Back-End.

O projeto também serve como ambiente de estudo para implementação de novos conceitos conforme avanço no aprendizado de Node.js.

## 🛠️ Tecnologias utilizadas

* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Nodemon

## ⚙️ Funcionalidades

### Livros

* Listar todos os livros;
* Buscar um livro pelo ID;
* Cadastrar um novo livro;
* Atualizar um livro;
* Excluir um livro;
* Buscar livros por editora.

### Autores

* Listar todos os autores;
* Buscar um autor pelo ID;
* Cadastrar um novo autor;
* Atualizar um autor;
* Excluir um autor.

## 🔗 Rotas da API

### Livros

| Método   | Rota                         | Descrição                |
| -------- | ---------------------------- | ------------------------ |
| `GET`    | `/livros`                    | Lista todos os livros    |
| `GET`    | `/livros/busca?editora=nome` | Busca livros por editora |
| `GET`    | `/livros/:id`                | Busca um livro pelo ID   |
| `POST`   | `/livros`                    | Cadastra um novo livro   |
| `PUT`    | `/livros/:id`                | Atualiza um livro        |
| `DELETE` | `/livros/:id`                | Exclui um livro          |

### Autores

| Método   | Rota           | Descrição              |
| -------- | -------------- | ---------------------- |
| `GET`    | `/autores`     | Lista todos os autores |
| `GET`    | `/autores/:id` | Busca um autor pelo ID |
| `POST`   | `/autores`     | Cadastra um novo autor |
| `PUT`    | `/autores/:id` | Atualiza um autor      |
| `DELETE` | `/autores/:id` | Exclui um autor        |

## 🚀 Como executar o projeto

### Pré-requisitos

Para executar o projeto, é necessário ter instalado:

* Node.js;
* npm;
* acesso a uma instância do MongoDB.

### 1. Clone o repositório

```bash
git clone https://github.com/Eduluiz1520/API-Biblioteca.git
```

### 2. Acesse a pasta do projeto

```bash
cd API-Biblioteca
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a conexão com o banco de dados

Crie um arquivo `.env` na raiz do projeto e adicione sua string de conexão com o MongoDB:

```env
DB_CONNECTION_STRING=sua_string_de_conexao
```

### 5. Execute a aplicação

```bash
npm run dev
```

O servidor será iniciado na porta `3000`.

## 📖 Aprendizados

O desenvolvimento desta API faz parte dos meus estudos de Desenvolvimento Back-End.

Durante o projeto, pude praticar não apenas operações CRUD, mas também compreender melhor a separação de responsabilidades entre rotas, controllers e models, o funcionamento de operações assíncronas e a comunicação entre uma aplicação Node.js e um banco de dados MongoDB.

O projeto continua sendo utilizado para estudos e poderá receber novas funcionalidades e melhorias conforme novos conceitos forem incorporados.

## 👤 Autor

Desenvolvido por **Eduardo Nascimento** como projeto de estudo de Desenvolvimento Back-End.

import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosEditora);
routes.get("/livros/:id", LivroController.listarLivroId);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.post("/livros", LivroController.cadastrarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;

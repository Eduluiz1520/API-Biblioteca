import { Autor } from "../models/Autores.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await Autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição.` });
    }
  }

  static async listarAutorId(req, res) {
    try {
      const id = req.params.id;
      const autorPorId = await Autor.findById(id);
      res.status(200).json(autorPorId);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do autor.` });
    }
  }
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await Autor.create(req.body);
      res
        .status(201)
        .json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar autor.` });
    }
  }
  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await Autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado!" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha  em atualizar autor.` });
    }
  }
  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await Autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluído com sucesso!" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha em deletar autor.` });
    }
  }
}

export default AutorController;

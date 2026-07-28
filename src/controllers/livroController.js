import Livro from "../models/Livro.js";
import { Autor } from "../models/Autores.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await Livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição.` });
    }
  }

  static async listarLivroId(req, res) {
    try {
      const id = req.params.id;
      const livroPorId = await Livro.findById(id);
      res.status(200).json(livroPorId);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do livro.` });
    }
  }
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;

    try {
      const autorEncontrado = await Autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await Livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso", livro: livroCriado });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar livro.` });
    }
  }
  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await Livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado!" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha  em atualizar livro.` });
    }
  }
  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await Livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro excluído com sucesso!" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha em deletar livro.` });
    }
  }

  static async listarLivrosEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await Livro.find({ editora: editora });
      res.status(200).json({ livrosPorEditora });
    } catch (erro) {
      res.status(500).json({ message: " - falha na busca." });
    }
  }

  //    static async listarLivros (req, res) {
  //    try {
  //      const listaLivros = await livro.find({}).populate("autor").exec();
  //      res.status(200).json(listaLivros);
  //    } catch (erro) {
  //      res.status(500).json({ message: `${erro.message} - falha na requisição` });
  //    }
  //  };
}

export default LivroController;

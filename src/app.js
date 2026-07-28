import express from "express";
import conexaoDatabase from "./config/dbconnect.js";
// import Livro from "./models/Livro.js";
import route from "./routes/index.js";
import routes from "./routes/index.js";

const conexao = await conexaoDatabase();

conexao.on("error", (erro) => {
  console.error(`Erro de conexão, ${erro}`);
});

conexao.once("open", () => {
  console.log("Conexão bem sucedida!");

  // console.log(process.env.DB_CONNECTION_STRING);
});

const app = express();
routes(app);
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Curso de Node.js");
// });

// app.get("/livros", async (req, res) => {
//   const listaLivros = await Livro.find({});
//   res.status(200).json(listaLivros);
// });

// app.get("/livros/:id", (req, res) => {
//   const index = buscarLivro(req.params.id);
//   res.status(200).json(livros[index]);
// });

// app.post("/livros", (req, res) => {
//   livros.push(req.body);
//   res.status(201).send("Livro cadastrado com sucesso!");
// });

// app.put("/livros/:id", (req, res) => {
//   const index = buscarLivro(req.params.id);
//   livros[index].titulo = req.body.titulo;
//   res.status(200).json(livros);
// });

app.delete("/livros/:id", (req, res) => {
  const index = buscarLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;

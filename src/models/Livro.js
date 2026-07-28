import mongoose from "mongoose";
import { autorSchema } from "./Autores.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema,
    //  autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true}
  },
  { versionKey: false },
);

// await mongoose.connect(process.env.DB_CONNECTION_STRING);

// console.log("Banco conectado:", mongoose.connection.name);

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;

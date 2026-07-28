import mongoose from "mongoose";

async function conexaoDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default conexaoDatabase;

const mongoose = require("mongoose");
const { Schema } = mongoose;

// cria as colunas da coleção
const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },

  //   marca o dia e horario que o usuario for criado
  {
    timestamps: true,
  }
);

// Definindo o model, passando o Schema para o model
const user = mongoose.model("User", userSchema);

module.exports = user;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  color: String,
  id: String,
  categoria: String,
  nombre: String,
  precio: Double
});

module.exports = mongoose.model("Product", ProductSchema);
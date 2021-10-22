const mongoose = require ('mongoose');
const mongoUrl ="mongodb+srv://usuario_01:CYgyXuobRjqHWqyU@proyect-ciclo3.qwead.mongodb.net/Proyect-Ciclo3";

mongoose.set("runValidators", true);

const db = mongoose.connect(mongoUrl, {},
  (error) => {
    if(error) {
      console.log("Error conectando a mongo");
    }else{
      console.log("Conectando a mongo");
    }
});

module.exports = db;
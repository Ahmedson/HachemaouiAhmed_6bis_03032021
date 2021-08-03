// Importation de mongoose 
// Mongoose permet de définir des objets avec 
// un schéma fortement typé mappé sur un document MongoDB
const mongoose = require('mongoose');

// mongoose-unique-validator est un plugin qui ajoute la validation 
// de pré-enregistrement pour les champs uniques dans un schéma Mongoose.
const uniqueValidator = require('mongoose-unique-validator');

// Schéma utilisateur
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // email unique requis
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Veuillez entrer une adresse email correcte"] 
    // ^^^ Vérification de la validitié de l'email en comparant la chaîne de caractères avec la regex ^^^·
  },
  password: {
    type: String,
    required: true
  }
});

// Utilisation du plugin-in "mongoose-unique-validator" dans notre schéma utilisateur
userSchema.plugin(uniqueValidator);

// Exportation du schéma User
module.exports = mongoose.model('User', userSchema);
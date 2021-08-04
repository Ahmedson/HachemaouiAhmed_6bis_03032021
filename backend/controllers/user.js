// Les contrôleurs contiennent la logique métier, 
// et sont généralement importés par les routeurs, 
// qui attribuent cette logique aux routes spécifiques.

// bcrypt est un package de chiffrement (algorithme unidirectionnel de hachage)
const bcrypt = require('bcrypt');
// JWT sont des jetons générés par un serveur lors de 
// l'authentification d'un utilisateur sur une application Web
const jwt = require('jsonwebtoken');

require('dotenv').config();

// Importation du modèle "User"
const User = require('../models/User');

// Ici, nous exposons la logique de nos routes en tant que fonctions que nous exportons

exports.signup = (req, res, next) => {
  // hash(pwd, nombre de salage) fonction qui retourne une promesse avec le mot de passe hashé
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      // création du nouvel user
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save() // save() enregistre user dans la db dans la collection "users"
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json(error));
    })
    .catch(error => res.status(500).json(error));
};

exports.login = (req, res, next) => {
  // findOne(params) retourne le document correspondant au "params" dans la collection "users"
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      // compare(pwd input, hash in db) fonction qui compare le pwd entré par l'utilisateur avec le hash enregistré dans la db
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            // sign(userID, String, validityToken) fonction qui encode un nouveau token 
            // avec userID comme payLoad et un String comme signature + durée de validité du token
            token: jwt.sign(
              { userId: user._id },
              process.env.TOKEN_KEY ,
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json(error));
    })
    .catch(error => res.status(500).json(error));
};
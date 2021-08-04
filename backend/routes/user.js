// Importation d'express
const express = require('express');

// création d'un router express
// Routage fait référence à la définition de points finaux d’application (URI) 
// et à la façon dont ils répondent aux demandes client
const router = express.Router();

// Importation du contrôleur pour les users
const userCtrl = require('../controllers/user');
const checkPassword = require("../middleware/check-password");

// application des fonctions du contrôleur à chaque route 
// [attention à ne pas appeler les fonctions]
router.post('/signup', checkPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

// Exportation du routeur
module.exports = router;
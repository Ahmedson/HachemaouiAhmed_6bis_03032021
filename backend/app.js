// Importation du module express
const express = require('express');
// body-parser analyse le corps de la requête et le formate pour en faciliter l'exploitation.
// body-parser extrait la partie entière du corps d'un flux 
// de demandes entrantes et l'expose sur req.body .
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const path = require('path');
// Dotenv est un module qui charge des variables d'environnement à partir d'un fichier .env
require('dotenv').config();

// Importation des routeurs pour les sauces et les users
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

// Connexion à mongoDB Atlas
mongoose.connect( process.env.MONGO_DB_CONNECT ,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Création application express
const app = express();

app.use((req, res, next) => {
    // Permet l'accès à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Permet d'ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // Permet d'envoyer des requêtes avec les méthodes mentionnées
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
// Enregistrement du routeur pour les sauces sur le chemin /api/sauces
app.use('/api/sauces', sauceRoutes);
// Enregistrement du routeur pour les utilisateurs sur le chemin /api/auth
app.use('/api/auth', userRoutes);

module.exports = app;
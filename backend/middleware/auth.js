// Importation du jsonwebtoken
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    // Récupération du token dans le header Authorization
    const token = req.headers.authorization.split(' ')[1];
    // verify(token , signature) fonction qui décode le token et renvoie une erreur si non valide
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
    const userId = decodedToken.userId;
    // Si il y a un userId dans la requête et qu'il ne correspond pas à celui de notre token renvoyer erreur
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    // Sinon passer au middleware suivant
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
// Importation du module http
const http = require('http');

// Importation application express
const app = require('./app');

app.set('port', 3000);

// Crée un serveur HTTP
const server = http.createServer(app);

// Démarre le serveur
server.listen(3000);
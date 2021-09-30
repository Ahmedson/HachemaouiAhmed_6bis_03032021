# Projet HOT TAKES : API d'avis gastronomique

![logo Hot Takes](https://github.com/Ahmedson/HotSauce_API_Avis_Gastronomique/blob/master/frontend/assets/images/flame.png)

## Contexte du projet

- Hot Takes se dédie à la création de sauces épicées dont les recettes sont gardées secrètes. Pour tirer parti de son succès et générer davantage de buzz, l'entreprise souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.

***
***

## Exigences de sécurité

- Le mot de passe de l'utilisateur doit être haché.
- L'authentification doit être renforcée sur toutes les routes sauce requises.
- Les adresses électroniques dans la base de données sont uniques et un
plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler
les erreurs.
- La sécurité de la base de données MongoDB (à partir d'un service tel que
MongoDB Atlas) ne doit pas empêcher l'application de se lancer sur la
machine d'un utilisateur.
- Un plugin Mongoose doit assurer la remontée des erreurs issues de la base
de données.
- Les versions les plus récentes des logiciels sont utilisées avec des correctifs
de sécurité actualisés.
- Le contenu du dossier images ne doit pas être téléchargé sur GitHub.

***
***

## Informations complémentaires

- La partie frontend a déjà été développée.
- Les routes doivent correspondre à celles mentionnées dans les spécifications de l'API

***
***

## Requis pour le lancement du projet

NodeJS 12.14 ou 14.0, Angular CLI 7.0.2. & Node-sass

## Backend

1. Dans le dossier backend, depuis votre terminal lancer la commande :

```
npm install
```

2. puis

```
node server (ou nodemon server)
```

***

## Frontend

1. Dans le dossier frontend, depuis votre terminal lancer la commande :

```
npm install
```

2. Puis :

```
npm start
```

3. Si le navigateur ne s'est pas lancé rendez vous à l'adresse :

```
http://localhost/8081
```

***
***

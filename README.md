<p align="center">
  <img src="https://raw.githubusercontent.com/Vanille-B/skyrock-automation-with-puppeteer/master/assets/img/skyblog-2002.jpg" alt="Skyblog automation preview project">
</p>

# Skyrock Automation Project with Puppeteer 

## 🇫🇷 Introduction

Projet d'automatisation Skyrock avec Puppeteer

Ce projet est un script utilisant la bibliothèque Puppeteer pour automatiser certaines actions sur Skyrock. Il se connecte au site Skyrock, accède à l'espace administrateur et effectue l'action suivante : modifie l'état de tous les articles de manière automatisée en utilisant un navigateur automatisé.

Ce script permet de changer rapidement l'état d'un grand nombre d'articles en quelques minutes, de manière automatisée. Par exemple, il peut passer tous les articles qui étaient en mode 'hors ligne' en mode 'secret', de sorte qu'ils seront visibles uniquement par l'administrateur à l'URL suivante : `https://votrenom.skyrock.com/secret`

### 🇫🇷 Notes

Ce code a été créé pour des machines OS. Il se peut que certaines modifications soient nécessaires, notamment pour le chemin d'accès `executablePath` et le port `args` de la fonction `run()`.


### 🇫🇷 Fonctionnalités

- Connexion à Skyrock en utilisant les identifiants d'accès fournis dans le fichier d'environnement (.env).
- Accès à la page de publication d'articles sur Skyrock.
- Modification de l'état de chaque article.
- Navigation entre les pages de pagination pour traiter tous les articles.
- Redirection vers l'URL du blog secret de l'utilisateur une fois que tous les articles ont été traités.

### 🇫🇷 Instructions d'utilisation

1. Assurez-vous d'avoir Node.js installé sur votre système.
2. Clonez ce dépôt sur votre machine locale.
3. Installez les dépendances en exécutant la commande `npm install`.
4. Initialisez Puppeteer en exécutant la commande `npm i puppeteer` (https://github.com/puppeteer/puppeteer).
5. Initialisez Dotenv en exécutant la commande `npm install dotenv` (https://github.com/motdotla/dotenv).
6. Configurez les identifiants d'accès à Skyrock en modifiant les valeurs 'xxx' de USERNAME et PASSWORD dans le fichier `.env` à la racine du projet.
7. Exécutez le script en exécutant la commande `node skyblog-script.js`.

### 🇫🇷 Contributions

Les contributions à ce projet sont les bienvenues. Si vous souhaitez améliorer, redéfinir ou ajouter des fonctionnalités, veuillez créer une pull request. Merci d'avance pour votre contribution !


## 🇺🇸 Introduction

## Skyrock Automation Project with Puppeteer
This project is a script that uses the Puppeteer library to automate certain actions on Skyrock. It connects to the Skyrock website, accesses the admin area, and performs the following action: automatically modifies the status of all articles using an automated browser.

This script allows you to quickly change the status of a large number of articles in a few minutes, in an automated way. For example, it can change all articles that were in 'offline' mode to 'secret' mode, so they will only be visible to the administrator at the following URL: `https://yourusername.skyrock.com/secret`

### 🇺🇸 Notes

This code was created for OS machines. Some modifications may be necessary, especially for the `executablePath` path and the `args` port of the `run()` function.

### 🇺🇸 Features

- Logging in to Skyrock using access credentials provided in the environment file (.env).
- Accessing the article publishing page on Skyrock.
- Modifying the status of each article.
- Navigating between pagination pages to process all articles.
- Redirecting to the user's secret blog URL once all articles have been processed.

### 🇺🇸 Usage Instructions

1. Make sure you have Node.js installed on your system.
2. Clone this repository to your local machine.
3. Install dependencies by running the command `npm install`.
4. Initialize Puppeteer by running the command `npm i puppeteer` (https://github.com/puppeteer/puppeteer).
5. Initialize Dotenv by running the command `npm install dotenv` (https://github.com/motdotla/dotenv).
6. Set up Skyrock access credentials by modifying the 'xxx' values of USERNAME and PASSWORD in the `.env` file at the root of the project.
7. Run the script by executing the command `node skyblog-script.js`.

### 🇺🇸 Contributions

Contributions to this project are welcome. If you would like to improve, redefine, or add features, please create a pull request. Thank you in advance for your contribution!

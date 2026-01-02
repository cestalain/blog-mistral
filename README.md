Les commandes GIT

Git est un ensemble de commandes indépendantes dont les principales sont :

# crée un nouveau dépôt ;

git init​

# clone un dépôt distant ;

git clone​

# ajoute le contenu du répertoire de travail dans la zone d’index pour le prochain commit ;

git add​

git status​ montre les différents états des fichiers du répertoire de travail et de l’index ;

git diff​ montre les différences ;

# enregistre dans la base de données (le dépôt) un nouvel instantané avec le contenu des fichiers qui ont été indexés puis fait pointer la branche courante dessus ;

git commit​

# Lister toutes les branches locales

git branch

# Lister toutes les branches (locales + distantes)

git branch -a

# Voir la branche courante

git branch --show-current

# Voir les dernières commits sur chaque branche

git branch -v

# Supprimer une branche locale

git branch -d nom_de_la_branche

# permet de basculer de branche et d’en extraire le contenu dans le répertoire de travail ;

git checkout

# Créer une nouvelle branche ET se déplacer dessus (méthode la plus utilisée)

git checkout -b

# Créer seulement la branche (reste sur la branche actuelle)

git branch nom_de_la_branche

# Supprimer une branche déjà fusionnée (safe)

git branch -d nom_de_la_branche

# Forcer la suppression (même si non fusionnée)

git branch -D nom_de_la_branche

# Se placer sur la branche de destination (ex: main, develop)

git checkout main

# Fusionner la branche source dans la branche courante

git merge nom_de_la_branche

git log​ affiche la liste des commits effectués sur une branche ;

git fetch récupère toutes les informations du dépôt distant et les stocke dans le dépôt local ;

git push​ publie les nouvelles révisions sur le dépôt distant ;

git pull​ récupère les dernières modifications distantes du projet et les fusionne dans la branche courante ;

git tag liste ou crée des tags ;

git stash​ stocke de côté un état non commité afin d’effectuer d’autres tâches.

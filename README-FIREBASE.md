# Notq — installation Firebase et GitHub Pages

1. Créez un projet dans Firebase Console.
2. Activez **Authentication > E-mail/Mot de passe**.
3. Créez une base **Cloud Firestore**.
4. La configuration du projet Firebase `notq-25d0a` est déjà intégrée dans `public/app/firebase-config.js`.
5. Publiez `firestore.rules` avec la Firebase CLI ou depuis l’onglet Règles de Firestore.
6. Pour GitHub Pages, publiez le contenu du dossier `public/app` à la racine de la branche Pages.

Les données sont isolées sous `orthophonists/{uid}`. Chaque orthophoniste ne peut accéder qu’à ses propres enfants, exercices, séances et résultats.

Avant la première connexion, créez un compte orthophoniste dans **Firebase Console > Authentication > Utilisateurs**, puis ajoutez le domaine GitHub Pages dans **Authentication > Settings > Authorized domains**.

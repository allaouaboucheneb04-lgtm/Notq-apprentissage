# Notq V2 — Étape 1

Application web sans React, construite en HTML, CSS et JavaScript avec Firebase.

## Fonctions incluses

- inscription publique des orthophonistes ;
- profil enregistré dans la nouvelle structure `notq_v2/app/users` ;
- statut initial `pending` ;
- page « Validation en cours » ;
- vérification de l’adresse e-mail ;
- connexion séparée Orthophoniste / Parent / Enfant ;
- gestion des statuts `active`, `pending`, `rejected` et `suspended` ;
- récupération du mot de passe ;
- ancienne structure Firebase conservée.

Les dossiers enfants, les invitations parent, le code/PIN et les exercices seront ajoutés dans les prochaines étapes.

## Déploiement GitHub Pages

1. Décompresser le ZIP.
2. Envoyer tous les fichiers du dossier à la racine du dépôt GitHub.
3. Dans GitHub : **Settings → Pages**.
4. Choisir **Deploy from a branch**, la branche `main`, puis le dossier `/ (root)`.
5. Dans Firebase : **Authentication → Settings → Authorized domains**.
6. Ajouter le domaine GitHub Pages, par exemple `nomutilisateur.github.io`.

## Configuration Firebase nécessaire

Dans le projet Firebase `notq-25d0a` :

- activer **Authentication → Sign-in method → Email/Password** ;
- conserver les règles contenues dans `firestore.rules` ;
- utiliser le fichier `firebase-config.js` déjà configuré.

## Important

Le super administrateur ne doit pas être créé depuis le formulaire public. Il sera créé manuellement dans Firebase Authentication, puis relié à un profil Firestore `super_admin` pendant l’étape suivante.

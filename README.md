Jeu du Morpion en JavaScript
============================

Ce dépôt contient une version retravaillée d'un jeu du Morpion implémenté en JavaScript. Le code original était fourni en Python et comportait quelques erreurs, qui ont été corrigées dans cette version retravaillée.

Comment Jouer
-------------

1.  **Initialisation :**
    
    *   Clonez le dépôt.
    *   Exécutez `npm init` pour initialiser le projet (si ce n'est pas déjà fait).
    *   Lancez la commande `npm start` pour démarrer le jeu dans la console.
2.  **Logique du Jeu :**
    
    *   Le jeu est un Morpion classique avec une grille 3x3.
    *   Les joueurs sont représentés par 'X' pour le joueur humain et 'O' pour l'IA.
    *   Le joueur de départ est choisi de manière aléatoire (50 % de chance pour 'X' et 'O' chacun).
3.  **Règles du Jeu :**
    
    *   Le jeu utilise une grille 3x3 représentée par un tableau `board` avec 9 éléments.
    *   Les combinaisons gagnantes sont définies dans le tableau `winningCombos`, incluant les lignes, les colonnes et les diagonales.
4.  **Fonctions :**
    
    *   `printBoard(board)`: Affiche le tableau actuel dans la console.
    *   `checkWin(board, player)`: Vérifie si un joueur a gagné en explorant les combinaisons gagnantes possibles.
    *   `isBoardFull(board)`: Vérifie si la grille est complètement remplie, aboutissant à un match nul.
    *   `makeMove(board, move, player)`: Permet à un joueur de jouer en mettant à jour la grille.
    *   `playAgain()`: Affiche le score actuel et propose aux joueurs de redémarrer le jeu ou de quitter.
    *   `startNewGame()`: Initialise un nouveau jeu en réinitialisant la grille, en choisissant aléatoirement le joueur de départ, et en lançant le jeu.
    *   `makeAIMove()`: Permet à l'IA de jouer, en privilégiant les mouvements gagnants et en jouant au hasard si nécessaire.
    *   `playGame()`: Gère le déroulement du jeu en affichant la grille, en demandant au joueur actuel de faire un mouvement, en vérifiant les conditions de fin de jeu et en passant du joueur humain à l'IA.

Détails du Retravail
--------------------

Cette implémentation JavaScript est une version retravaillée du code original en Python, corrigeant des erreurs et améliorant la structure du code. Le retravail vise à améliorer la lisibilité, la maintenabilité et la fonctionnalité globale du jeu du Morpion.

### Auteur

Apolline Le Hiritte

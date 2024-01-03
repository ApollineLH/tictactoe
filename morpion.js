const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let aiWins = 0;
let humanWins = 0;

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]              // diagonals
];

function resetBoard() {
    return [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
}

function printBoard(board) {
    console.log('-----------');
    for (let i = 0; i < 9; i += 3) {
        console.log(` ${board[i]} | ${board[i + 1]} | ${board[i + 2]}`);
        if (i < 6) {
            console.log('---|---|---');
        }
    }
    console.log('-----------');
}

function checkWin(board, player) {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

function isBoardFull(board) {
    return !board.includes(' ');
}

function makeMove(board, move, player) {
    if (board[move] === ' ') {
        board[move] = player;
        return true;
    }
    return false;
}

function playAgain() {
    console.log(`AI Gagne: ${aiWins}`);
    console.log(`Human Gagne: ${humanWins}`);
    rl.question('Voulez-vous rejouer ? (0 pour non, 1 pour oui): ', (answer) => {
        if (answer === '1') {
            startNewGame();
        } else if (answer === '0') {
            console.log('Merci d\'avoir joué !');
            rl.close();
        } else {
            console.log('Réponse non valide. Entrez 0 pour non ou 1 pour oui.');
            playAgain();
        }
    });
}

function startNewGame() {
    const board = resetBoard();
    let currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
    console.log(currentPlayer);
    let gameActive = true;

    function switchPlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }


    function makeAIMove() {
        if (currentPlayer === 'O' && gameActive) {
            // Check for potential winning moves
            for (const combo of winningCombos) {
                const [a, b, c] = combo;
                if ((board[a] === 'O' && board[b] === 'O' && board[c] === ' ') ||
                    (board[a] === 'O' && board[c] === 'O' && board[b] === ' ') ||
                    (board[b] === 'O' && board[c] === 'O' && board[a] === ' ')) {
                    makeMove(board, combo.find(i => board[i] === ' '), 'O');
                    return;
                }
            }

            // If no winning moves, play randomly
            const emptyCells = board.reduce((acc, cell, index) => {
                if (cell === ' ') {
                    acc.push(index);
                }
                return acc;
            }, []);

            if (emptyCells.length > 0) {
                const randomIndex = Math.floor(Math.random() * emptyCells.length);
                makeMove(board, emptyCells[randomIndex], 'O');
            }
        }
        switchPlayer(); // Call this to ensure the next player is the human
    }


    function playGame() {
        printBoard(board);

        if (checkWin(board, currentPlayer)) {
            gameActive = false;
            printBoard(board);
            console.log(`Joueur ${currentPlayer} gagne!`);
            currentPlayer === 'O' ? aiWins++ : humanWins++;
            playAgain();
            return; // Return to exit the function
        }

        if (isBoardFull(board)) {
            gameActive = false;
            printBoard(board);
            console.log("Match Nul!");
            playAgain();
            return; // Return to exit the function
        }

        rl.question(`A ${currentPlayer} de jouer. Entrer un chiffre (0-8): `, (answer) => {
            const chosenMove = parseInt(answer);
            if (chosenMove >= 0 && chosenMove < 9 && makeMove(board, chosenMove, currentPlayer) && gameActive) {
                if (checkWin(board, currentPlayer)) {
                    gameActive = false;
                    printBoard(board);
                    console.log(`Joueur ${currentPlayer} gagne!`);
                    currentPlayer === 'O' ? aiWins++ : humanWins++;
                    playAgain();
                } else if (isBoardFull(board)) {
                    gameActive = false;
                    printBoard(board);
                    console.log("Match Nul!");
                    playAgain();
                } else {
                    switchPlayer();
                    makeAIMove();
                    playGame();
                }
            } else {
                console.log('Mouvement invalide. Entrez un nombre de 0 à 8.');
                playGame();
            }
        });
    }

    // Determine the first player
    if (currentPlayer === 'O') {
        makeAIMove();
        playGame();
    } else {
        playGame();
    }
}

startNewGame();

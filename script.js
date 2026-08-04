const gameState = {
    currentPlayer: 'X',
    board: Array(9).fill(''),
    gameActive: true,
    winningCombinations: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ]
};

const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState.board[clickedCellIndex] !== '' || !gameState.gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState.board[clickedCellIndex] = gameState.currentPlayer;
    clickedCell.textContent = gameState.currentPlayer;
    clickedCell.classList.add(gameState.currentPlayer.toLowerCase());
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < gameState.winningCombinations.length; i++) {
        const [a, b, c] = gameState.winningCombinations[i];
        const boardPositions = [gameState.board[a], gameState.board[b], gameState.board[c]];
        if (boardPositions.includes('')) {
            continue;
        }
        if (boardPositions[0] === boardPositions[1] && boardPositions[1] === boardPositions[2]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `Player ${gameState.currentPlayer} has won!`;
        gameState.gameActive = false;
        return;
    }

    const roundDraw = !gameState.board.includes('');
    if (roundDraw) {
        statusDisplay.textContent = 'Game ended in a draw!';
        gameState.gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handlePlayerChange() {
    gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${gameState.currentPlayer}'s turn`;
}

function handleRestartGame() {
    gameState.gameActive = true;
    gameState.currentPlayer = 'X';
    gameState.board = Array(9).fill('');
    statusDisplay.textContent = `Player ${gameState.currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', handleRestartGame);

// Initialize game
statusDisplay.textContent = `Player ${gameState.currentPlayer}'s turn`; 
# Tic Tac Toe

A simple browser-based two-player Tic Tac Toe game. Plain HTML, CSS, and JavaScript, no build step required.

## Features

- Classic 3x3 grid, X goes first
- Turn indicator shows whose move it is
- Detects wins across all rows, columns, and diagonals
- Detects a draw when the board fills with no winner
- Restart button resets the board at any time

## Running

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Project structure

```
tic-tac-toe/
├── index.html    # Game board markup
├── styles.css    # Styling
└── script.js     # Game state and win/draw logic
```

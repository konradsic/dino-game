let board, ctx;

board = document.getElementById('game-board');
ctx = board.getContext('2d');

ctx.fillStyle = "#dddddd";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
let board, ctx;

board = document.getElementById('game-board');
ctx = board.getContext('2d');

ctx.fillStyle = "#434343";
ctx.fillRect(0, (ctx.canvas.width*0.8), ctx.canvas.width, (ctx.canvas.width*0.8))
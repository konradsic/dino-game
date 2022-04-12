let board, ctx;

board = document.getElementById("game_board");
ctx = board.getContext("2d");

let cactus_xpos = board.width - 30;

function DrawBoard() {
    ctx.fillStyle = "#dddddd";
    ctx.fillRect(0,0,board.width, board.height);
}
function DrawGround() {
    ctx.fillStyle = "#6e6363";
    ctx.fillRect(0, (0.8*board.height), board.width, (0.8*board.height));
}
function DrawCactus(xpos, cact_size_x, cact_size_y) {
    ctx.fillStyle = "#2db700";
    ctx.fillRect(xpos, (0.8*board.height), -1*cact_size_x, -1*cact_size_y)
}
function Game() {
    DrawBoard();
    DrawGround();
    DrawCactus(cactus_xpos, 30, 120);
    cactus_xpos -= 5;
    if (cactus_xpos <= 0) {
        cactus_xpos = board.width - 30;
    }
}
setInterval(Game, 1);
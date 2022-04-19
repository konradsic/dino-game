let board, ctx;

board = document.getElementById("game_board");
ctx = board.getContext("2d");

let cactus_xpos = board.width - 30;
let acceleration = 4;

function DrawBoard() {
    ctx.fillStyle = "#dddddd";
    ctx.fillRect(0,0,board.width, board.height);
}
function DrawGround() {
    ctx.fillStyle = "#6e6363";
    ctx.fillRect(0, (0.8*board.height), board.width, (0.2*board.height));
}
class Cactus {
    constructor() {
        this.SetUpCactus();
    }
    SetUpCactus() {
        this.x = board.width - 30;
        this.y = 0.8*board.height;
        this.width = 15+Math.random()*50;
        this.height = 30+Math.random()*100;
        this.accl = 3;
    }
    DrawCactus() {
        ctx.fillStyle = "#2db700";
        ctx.fillRect(this.x, this.y, this.width, -1*this.height);
        this.x -= this.accl;
        this.accl *= 1.001;
        if (this.x <= 0) {
            this.x = board.width - 30;
        }
    }
}

class Dinosaur {
    constructor() {
        this.SetUpDino();
    }
    SetUpDino() {
        this.x = 15;
        this.y = 0.8*board.height;
        this.width = 75;
        this.height = 150;
        this.isJumping = false;
    }
    DrawDino() {
        ctx.fillStyle = "#555555";
        
        if (this.isJumping) {
            this.y -= this.jumpSpeed;
            ctx.fillRect(this.x, this.y, this.width, -1*this.height);
            this.jumpSpeed -= 0.5;
            if (this.y >= (0.8*board.height)) {
                this.y = 0.8*board.height;
                this.isJumping = false;
            }
        } else {
            ctx.fillRect(this.x, this.y, this.width, -1*this.height);
        }
    }
    Jump() {
        if (this.isJumping) {
            return;
        }
        this.isJumping = true;
        this.jumpSpeed = 15;
    }
}

let cactus1 = new Cactus();
let dino = new Dinosaur();
function Game() {
    DrawBoard();
    DrawGround();
    cactus1.DrawCactus();
    dino.DrawDino();
}
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp" || e.key == "g") dino.Jump();
});
setInterval(Game, 1);
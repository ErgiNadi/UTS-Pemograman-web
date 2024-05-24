// kode JavaScript untuk game catur
var gameBoard = document.getElementById("game-board");
var squares = [];
var pieces = [
	"rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook",
	"pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn",
	"", "", "", "", "", "", "", "",
	"", "", "", "", "", "", "", "",
	"", "", "", "", "", "", "", "",
	"", "", "", "", "", "", "", "",
	"pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn",
	"rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"
];

function createBoard() {
	for (var i = 0; i < 64; i++) {
		var square = document.createElement("div");
		square.classList.add("square");
		if ((i + Math.floor(i / 8)) % 2 === 0) {
			square.classList.add("white");
		} else {
			square.classList.add("black");
		}
		square.style.left = (i % 8) * 50 + "px";
		square.style.top = Math.floor(i / 8) * 50 + "px";
		gameBoard.appendChild(square);
		squares.push(square);
	}
}

function createPieces() {
	for (var i = 0; i < 64; i++) {
		if (pieces[i] !== "") {
			var piece = document.createElement("div");
			piece.classList.add("piece");
			piece.style.backgroundPosition = -50 * (pieces[i].charCodeAt(0) - 97) + "px " + -50 * (pieces[i].charCodeAt(1) - 49) + "px";
			piece.style.left = (i % 8) * 50 + "px";
			piece.style.top = Math.floor(i / 8) * 50 + "px";
			gameBoard.appendChild(piece);
		}
	}
}

createBoard();
createPieces();
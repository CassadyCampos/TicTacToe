var game = {
    human: "",
    computer: "",
    currentTurn: "" 
};

var displayMsg = document.querySelector("#display");
var squares = document.querySelectorAll(".square") ;

//* Recall to calculate indices in row-major matrix 
//* we do index = X+Y * Width

playGame();

function switchTurn() {
    if (game.currentTurn === "Player1") {
        game.currentTurn = "Player2";
    } else {
        game.currentTurn = "Player1";
    }
}

function init() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].setAttribute("selected", "false");
    }
    game.currentTurn = "Player1";
}



function playGame() {
    init();

    for (var i = 0; i < squares.length; i++) {       
        squares[i].addEventListener("click", function() {
            if (this.getAttribute("selected") === "false") {
                if (game.currentTurn === "Player1") {
                    var setX = document.createTextNode("X");
                    this.appendChild(setX);
                    this.setAttribute("selected", "true");  
                } else {
                    var setO = document.createTextNode("O");
                    this.appendChild(setO);
                    this.setAttribute("selected", "true");   
                }
                checkWin();
                switchTurn();
            }
        });
    }
}

function checkWin() {
    if (game.currentTurn === "Player1") {
        checkWin1("X");
    } else {
        checkWin1("O");
    }
}

function checkWin1(pSymbol) {
    if (squares[0].textContent === pSymbol &&
        squares[1].textContent === pSymbol &&
        squares[2].textContent === pSymbol) {
            displayMsg.textContent = "You won!";
            return true;
        }
    return false;
};
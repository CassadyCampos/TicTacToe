var currentTurn;
var displayMsg = document.querySelector("#display");
var turnMsg = document.querySelector("#turn");
var squares = document.querySelectorAll(".square") ;
var resetBtn = document.querySelector("#reset");

//* Recall to calculate indices in row-major matrix 
//* we do index = X+Y * Width

playGame();

function switchTurn() {
    if (currentTurn === "Player1") {
        currentTurn = "Player2";
        turnMsg.textContent = "Turn: Player2";

    } else {
        currentTurn = "Player1";
        turnMsg.textContent = "Turn: Player1";
    }
};

function init() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].setAttribute("selected", "false");
    }
    currentTurn = "Player1";
    turnMsg.textContent =  "Turn: Player1";
};



function playGame() {
    init();

    for (var i = 0; i < squares.length; i++) {       
        squares[i].addEventListener("click", function() {
            if (this.getAttribute("selected") === "false") {
                if (currentTurn === "Player1") {
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
};

resetBtn.addEventListener("click", reset);

function reset() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
        squares[i].setAttribute("selected", "false");
    }
    displayMsg.textContent = null;
    resetBtn.textContent = "Restart"
};

function gameOver() {
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].getAttribute("selected") === "false") {
            squares[i].setAttribute("selected", "true");
        }
    }
    resetBtn.textContent = "Play Again?";
};

function checkWin() {
    if (currentTurn === "Player1") {
        checkWin1("X");
        checkWin2("X");
        checkWin3("X");
        checkWin4("X");
        checkWin5("X");
        checkWin6("X");
        checkWin7("X");
        checkWin8("X");
    } else {
        checkWin1("O");
        checkWin2("O");
        checkWin3("O");
        checkWin4("O");
        checkWin5("O");
        checkWin6("O");
        checkWin7("O");
        checkWin8("O");
    }
};

function checkWin1(pSymbol) {
    if (squares[0].textContent === pSymbol &&
        squares[1].textContent === pSymbol &&
        squares[2].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};

function checkWin2(pSymbol) {
    if (squares[3].textContent === pSymbol &&
        squares[4].textContent === pSymbol &&
        squares[5].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};

function checkWin3(pSymbol) {
    if (squares[6].textContent === pSymbol &&
        squares[7].textContent === pSymbol &&
        squares[8].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};

function checkWin4(pSymbol) {
    if (squares[0].textContent === pSymbol &&
        squares[3].textContent === pSymbol &&
        squares[6].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};

function checkWin5(pSymbol) {
    if (squares[1].textContent === pSymbol &&
        squares[4].textContent === pSymbol &&
        squares[7].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};

function checkWin5(pSymbol) {
    if (squares[1].textContent === pSymbol &&
        squares[4].textContent === pSymbol &&
        squares[7].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};

function checkWin6(pSymbol) {
    if (squares[2].textContent === pSymbol &&
        squares[5].textContent === pSymbol &&
        squares[8].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};

function checkWin7(pSymbol) {
    if (squares[0].textContent === pSymbol &&
        squares[4].textContent === pSymbol &&
        squares[8].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};

function checkWin8(pSymbol) {
    if (squares[2].textContent === pSymbol &&
        squares[4].textContent === pSymbol &&
        squares[6].textContent === pSymbol) {
            displayMsg.textContent = currentTurn + " has won!";
            gameOver();
        }
    return false;
};
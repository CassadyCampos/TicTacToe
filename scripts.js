var currentTurn;
var displayMsg = document.querySelector("#display");
var squares = document.querySelectorAll(".square") ;
var resetBtn = document.querySelector("#reset");

//* Recall to calculate indices in row-major matrix 
//* we do index = X+Y * Width

playGame();

function switchTurn() {
    if (currentTurn === "Player1") {
        currentTurn = "Player2";
    } else {
        currentTurn = "Player1";
    }
};

function init() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].setAttribute("selected", "false");
    }
    currentTurn = "Player1";
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
};
function checkWin() {
    if (currentTurn === "Player1") {
        checkWin1("X");
    } else {
        checkWin1("O");
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

function gameOver() {
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].getAttribute("selected") === "false") {
            squares[i].setAttribute("selected", "true");
        }
    }
};
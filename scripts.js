var game = {
    human: "",
    computer: "",
    currentTurn: "Player1" 
};

var squares = document.querySelectorAll(".square") 

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

function playGame() {
    for (var i = 0; i < squares.length; i++) {       
        squares[i].addEventListener("click", function() {
            if (this.getAttribute("disabled") === "false") {
                if (game.currentTurn === "Player1") {
                    var setX = document.createTextNode("X");
                    this.appendChild(setX);
                    this.setAttribute("disabled", "true");  
                    switchTurn(); 
                } else {
                    var setO = document.createTextNode("O");
                    this.appendChild(setO);
                    this.setAttribute("disabled", "true");   
                    switchTurn();
                }
            } else {
                alert("This square has been picked already!");
                return;
            }
        });
    }
}

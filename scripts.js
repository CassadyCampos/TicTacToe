var _1Player = "Player1";
var _2Player = "Player2";
var playerTurn = _1Player;
var playableSquares = [];
var squares = document.querySelectorAll(".square")   

//* Recall to calculate indices in row-major matrix 
//* we do index = X+Y * Width
humanSelect();
computerSelect();


function turnSeq() {

}


function humanSelect() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            if (this.getAttribute("disabled") === "false") {
                var textnode = document.createTextNode("X");
                this.appendChild(textnode);
                this.setAttribute("disabled", "true");
            } else {
                alert("This square has been picked already!");
            }
        });
    }
}

function computerSelect() {
    for ( var i = 0; i < squares.length; i++) {
        if(squares[i].getAttribute("disabled") === "false") {
            var textnode = document.createTextNode("O");
            squares[i].appendChild(textnode);
            squares[i].setAttribute("disabled", "true");
            return;
        }
    }
}
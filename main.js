let boardState = [
    "", "", "",
    "", "", "",
    "", "", "",
];

let currentState = '0';

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

function display() {
    boardState.forEach((tit, index) => {
        let btn = document.getElementById(index);
        btn.innerText = tit;
    });

}
display();

function findResult() {

    wins.forEach(tit => {
        if (boardState[tit[0]] == boardState[tit[1]] &&
            boardState[tit[0]] == boardState[tit[2]] &&
            boardState[tit[0]] != ""){
                alert(boardState[tit[0]] + " wins!");
                return;
            }
    });

    if (boardState.every(tit => tit !='')){
        alert("It's a draw!");
    }
}

function reset() {
    boardState = [
        "", "", "",
        "", "", "",
        "", "", "",
    ];
    display();
    currentState = '0';
}

let buttons = Array.from(document.getElementsByClassName('btn'));
buttons.forEach((btn,index) => {
    btn.onclick = function() {
        if (boardState[index] == ''){
            boardState[index] = currentState;
            currentState = (currentState == '0') ? 'X' : '0';
            display();
            
            setTimeout(findResult, 10);
        }
    }

});

let resetButton = document.getElementById("reset");
resetButton.onclick = reset;

const block = document.querySelectorAll(".block");
const playerText = document.getElementById("players");
const errorText = document.getElementById("error");
let player = "X"
let gameOver = false
let winner;

function startGame() {
    playerText.textContent = `${player}'s turn`

    block.forEach(block => block.addEventListener("click", () => choosArea(block)));

}


function choosArea(block) {
    if (block.textContent === "") {
        block.textContent = player;
        if(player === "O"){
            block.style.color = "red"
        }
        turnPlayer();
    } else {
        errorText.textContent = "Yanlış hamle yaptınız"
        block.style.border = "2px solid red"
        setTimeout(() => {
            errorText.textContent = ""
            block.style.border = "1px solid black"
        }, 2500);
    }


    checkWin();
    checkTie();
    
    if(gameOver) {

        playerText.textContent = ` Game is over, ${winner} won`;
       // block.forEach(block => block.style.pointerEvents = `none`);
       
    }
    

}
function turnPlayer() {
    if (player === "X") {
        player = "O";
        playerText.textContent = `${player}'s turn`
        return;
    } else if (player === "O") {


        player = "X";
        playerText.textContent = `${player}'s turn`

    }

}

function checkWin() {
checkRows()
checkColumns()
checkDiagonels() 

}
function checkTie() {
    const values = [];
    block.forEach(block => values.push(block.textContent))
    if(!values.includes(""))//değerler kümem boşluk içermiyorsa demek
    {
        playerText.textContent = "Tie !"
        }
}
function checkRows(){
    let row1 = block[0].textContent == block[1].textContent && 
    block[0].textContent == block[2].textContent && block[0].textContent !== ""
    let row2 = block[3].textContent == block[4].textContent && 
    block[3].textContent == block[5].textContent && block[3].textContent !== ""
    let row3 = block[6].textContent == block[7].textContent && 
    block[6].textContent == block[8].textContent && block[6].textContent !== ""
    
    if( row1 || row2 || row3 ){
        gameOver = true
    }
    if (row1) return winner = block[0].textContent
    if (row2) return winner = block[3].textContent
    if (row3) return winner = block[6].textContent
    
}
function checkColumns(){
    let col1 = block[0].textContent == block[3].textContent && 
    block[0].textContent == block[6].textContent && block[0].textContent !== ""
    let col2 = block[1].textContent == block[4].textContent && 
    block[1].textContent == block[7].textContent && block[1].textContent !== ""
    let col3 = block[2].textContent == block[5].textContent && 
    block[2].textContent == block[8].textContent && block[2].textContent !== ""
    
    if( col1 || col2 || col3 ){
        gameOver = true
    }
    if (col1) return winner = block[0].textContent
    if (col2) return winner = block[1].textContent
    if (col3) return winner = block[2].textContent

}
function checkDiagonels(){
    let dia1 = block[0].textContent == block[4].textContent && 
    block[0].textContent == block[8].textContent && block[0].textContent !== ""
    let dia2 = block[2].textContent == block[4].textContent && 
    block[2].textContent == block[6].textContent && block[2].textContent !== ""
    
    
    if( dia1 || dia2  ){
        gameOver = true
    }
    if (dia1) return winner = block[0].textContent
    if (dia2) return winner = block[2].textContent
    
    
}
startGame();

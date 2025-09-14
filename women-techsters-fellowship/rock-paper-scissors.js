function game() {
    const player1 = prompt("Choose your items:")
    console.log(player1)
    const player2 = prompt("Choose your items:")
    console.log(player2)

    if( player1 ==  player2) {
        //console.log("Ti's a tie!")
        return "TIE";
    } else if(
        player1 == 'rock' && player2 == 'scissors' ||
        player1 == 'scissors' && player2 == 'paper' ||
        player1 == 'paper' && player2 ==  'rock'
    ){
        //console.log("Player 1 won")
        return player1;
    } else {
        //console.log("Player 2 won!")
        return player2;
    }
}

//game()
const result1 = game();
const result2 = game();
const result3 = game();

console.log(result1);
console.log(result2);
console.log(result3);

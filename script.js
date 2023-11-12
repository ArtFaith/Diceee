$(document).ready(function () {
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImage = `images/dice${firstRandomNum}.png`;
    $('img').eq(0).attr('src', firstDiceImage);

    const secondRandomNum = Math.floor(Math.random() * 6) + 1;
    const secondDiceImage = `images/dice${secondRandomNum}.png`;
    $('img').eq(1).attr('src', secondDiceImage);

    if (firstRandomNum > secondRandomNum) {
        $('h1').html('Player 1 Wins');
    } else if (firstRandomNum < secondRandomNum) {
        $('h1').html('Player 2 Wins');
    } else {
        $('h1').html('Draw');
    }
});

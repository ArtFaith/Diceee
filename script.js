$(document).ready(function () {
    // Generate random numbers for the dice images
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const secondRandomNum = Math.floor(Math.random() * 6) + 1;

    // Set the source attribute for the first dice image
    const firstDiceImage = `images/dice${firstRandomNum}.png`;
    $('.dice img:nth-child(1)').attr('src', firstDiceImage);

    // Set the source attribute for the second dice image
    const secondDiceImage = `images/dice${secondRandomNum}.png`;
    $('.dice img:nth-child(2)').attr('src', secondDiceImage);

    // Determine and display the result text
    const resultText = (firstRandomNum > secondRandomNum) ? 'Player 1 Wins' : (firstRandomNum < secondRandomNum) ? 'Player 2 Wins' : 'Draw';
    $('h1').text(resultText);
});

function numberGuessing() {
    const generatedNum = Math.floor(Math.random() * 10) + 1;
    const maxAttempts = 3;
    let attempts = 1;

    while (attempts <= maxAttempts) {
        const guess = parseInt(prompt('Guess a number in range from 1 to 10.'));

        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert('Enter a valid number in range from 1 to 10.');
            continue;
        }
        if (guess === generatedNum) {
            alert('Congrats, you win!')
            break;
        }
        else if (attempts == maxAttempts){
            alert(`Wrong guess!\nYou ran out of your attempts. The number was: ${generatedNum}.`)
            break;
        }
        else {
            alert('Wrong guess! Try again.');
            attempts++;
        }
    }
}


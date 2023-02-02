import '../scss/styles.scss';
import '../scss/buttons-and-link.scss';

import { addGameMessage, showGameResult } from './game-messages';
import { resetGame } from './game-reset';

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const resetLink = document.querySelector('.reset-link');

const moves = ['rock', 'paper', 'scissors'];
const movesToWin = 3;

let userScore = 0;
let pcScore = 0;
let round = 0;

const setUserScore = value => {
    userScore = value;
}

const setPcScore = value => {
    pcScore = value;
}

const setRound = value => {
    round = value;
}

const randomMove = () => {
    return moves[Math.floor(Math.random() * moves.length)];
}

const rules = (userMove, pcMove) => {
    if (userMove === pcMove) {
        return 'Draw!';
    } else if (userMove === moves[0] && pcMove === moves[moves.length - 1]
        || userMove === moves[1] && pcMove === moves[0]
        || userMove === moves[moves.length - 1] && pcMove === moves[1]) {
        ++userScore;
        return `You've WON!`;
    } else {
        ++pcScore;
        return `You've LOST!`;
    }
}

const disableButton = button => {
    button.disabled = true;
}

const startGame = event => {
    const userMove = event.target.classList[1].replace('-btn', '');
    const pcMove = randomMove();
    let winner;
    if (userScore < movesToWin && pcScore < movesToWin) {
        winner = rules(userMove, pcMove);
        ++round;
        addGameMessage(round, userMove, pcMove, winner);
    }
    if (userScore >= movesToWin || pcScore >= movesToWin) {
        disableButton(rockBtn);
        disableButton(paperBtn);
        disableButton(scissorsBtn);
        if (userScore >= movesToWin) {
            showGameResult(`CONGRATULATIONS! THE WICTORY IS YOURS :)`);
        } else {
            showGameResult(`OOPS! GAME OVER :(`);
        }
    }
}

rockBtn.addEventListener('click', startGame);
paperBtn.addEventListener('click', startGame);
scissorsBtn.addEventListener('click', startGame);
resetLink.addEventListener('click', resetGame);

export { setUserScore, setPcScore, setRound, rockBtn, paperBtn, scissorsBtn };
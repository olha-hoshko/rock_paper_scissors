import { mainTag } from './game-messages';
import { setUserScore, setPcScore, setRound, rockBtn, paperBtn, scissorsBtn } from './index';

const enableButton = button => {
    if (button.disabled) {
        button.disabled = false;
    }
}

const removeGameField = () => {
    const gameField = document.querySelector('.game-field');
    if (gameField !== null) {
        mainTag.removeChild(gameField);
    }
}

const resetGame = () => {
    setUserScore(0);
    setPcScore(0);
    setRound(0);
    enableButton(rockBtn);
    enableButton(paperBtn);
    enableButton(scissorsBtn);
    removeGameField();
}

export { resetGame };
const mainTag = document.querySelector('main');

const addGameField = () => {
    const gameField = document.createElement('div');
    gameField.classList.add('game-field');
    const gameResults = document.createElement('div');
    gameResults.classList.add('game-results');
    gameField.append(gameResults);
    return gameField;
}

const showGameResult = (message) => {
    const gameResults = document.querySelector('.game-results');
    const gameMessage = document.createElement('p');
    gameMessage.textContent = message;
    gameResults.append(gameMessage);
    gameResults.scrollTop = gameResults.scrollHeight;
}

const addGameMessage = (round, userMove, pcMove, winner) => {
    let gameField = document.querySelector('.game-field');
    if (gameField === null) {
        const divIndex = 3;
        gameField = addGameField();
        mainTag.insertBefore(gameField, mainTag.childNodes[divIndex]);
    }
    showGameResult(`Round ${round}, ${userMove} vs. ${pcMove}, ${winner}`);
}

export { addGameMessage, showGameResult, mainTag };
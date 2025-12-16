export const getResult = (userNumber) => {
    const randomNumber = getRandomNumber();
    return {
        userNum: userNumber,
        winnerNum: randomNumber,
        userWins: userNumber === randomNumber
    }
}

export const saveResult = (resultsArr, result) => [...resultsArr, result];

const getRandomNumber = () => Math.round(Math.random()*9)+1;

export const validateInput = (input) => {
    if(!input instanceof Number) return false;
    if(input < 1 || input > 10) return false;
    return true;
}
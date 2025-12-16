export const getResult = (userNumber) => {
    if(!userNumber instanceof Number) throw new Error ('userNumber must be a number type.');
    const randomNumber = getRandomNumber();
    return {
        userNum: userNumber,
        winnerNum: randomNumber,
        userWins: userNumber === randomNumber
    }
}

export const saveResult = (resultsArr, result) => [...resultsArr, result];

const getRandomNumber = () => Math.round(Math.random()*9)+1;

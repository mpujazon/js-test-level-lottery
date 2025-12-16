export const getResult = (userNumber) => {
    if(!(userNumber instanceof Number)) throw new Error ('userNumber must be a number type.');
    const randomNumber = getRandomNumber();
    return {
        userNum: userNumber,
        winnerNum: randomNumber,
        userWins: userNumber === randomNumber
    }
}
const messageContainer = document.getElementById('message-container');
const rowResultsContainer = document.getElementById('row-results-container');

export const renderMessage = (result) => {
        messageContainer.innerHTML = `Has ${result.userWins? 'ganado': 'perdido'}, el número ganador es el ${result.winnerNum}`
    }

export const renderResultsTable = (resultsArr) => {
    rowResultsContainer.innerHTML = "";
    resultsArr.forEach(result => {
        rowResultsContainer.innerHTML += `
                <tr>
                    <td>${result.userNum}</td>
                    <td>${result.winnerNum}</td>
                    <td>${result.userWins}</td>
                </tr>
            `
    });
}
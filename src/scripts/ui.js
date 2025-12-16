const messageContainer = document.getElementById('message-container');
const rowResultsContainer = document.getElementById('row-results-container');
const errorMessage = document.getElementById('error-message');

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

export const showErrorMessage = (show) => {
    show?
        errorMessage.classList.remove('hidden')
        : errorMessage.classList.add('hidden');
}

export const resetForm = () => {
    showErrorMessage(false);
    messageContainer.innerHTML = '';
}
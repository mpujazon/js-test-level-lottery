const messageContainer = document.getElementById('message-container')
export const renderMessage = (result) => {
        messageContainer.innerHTML = `Has ${result.userWins? 'ganado': 'perdido'}, el número ganador es el ${result.winnerNum}`
    }

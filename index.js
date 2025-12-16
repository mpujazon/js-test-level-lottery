import { getResult, saveResult, validateInput} from "./src/scripts/logic.js";
import { renderMessage, renderResultsTable, showErrorMessage } from "./src/scripts/ui.js";

let result = {};
let resultsArr = [];

const handleSubmit = (e) => {
    e.preventDefault();
    try{
        let userInput = Number(e.target[0].value);
        if(validateInput(userInput)){
            result = getResult(userInput);
            renderMessage(result);
            resultsArr = saveResult(resultsArr, result);
            renderResultsTable(resultsArr);
            showErrorMessage(false);
        }else{
            showErrorMessage(true);
        }

    }catch(err){
        console.error(err);
    }
}
const form = document.getElementById('lottery-form');
form.addEventListener('submit', handleSubmit);
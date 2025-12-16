import { getResult, saveResult } from "./src/scripts/logic.js";

let result = {};
let resultsArr = [];

const handleSubmit = (e) => {
    e.preventDefault();
    try{
        result = getResult(Number(e.target[0].value));
        resultsArr = saveResult(resultsArr, result);

    }catch(err){
        console.error(err);
    }
}
const form = document.getElementById('lottery-form');
form.addEventListener('submit', handleSubmit);
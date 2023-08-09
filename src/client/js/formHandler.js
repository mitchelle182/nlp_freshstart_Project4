import { mcloudAPI } from "../../server/mcloudAPI";
import { checkForUrl } from "./urlChecker";



const input = document.querySelector("input");
const form = document.querySelector("form");

document.getElementById('submit').addEventListener('click', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    // // check what text was put into the form field
    console.log(input.value);
    let inputURL = document.getElementById('url').value;  
    checkForUrl(inputURL);

    console.log("::: Form Submitted :::");
    mcloudAPI(url);
    
    
}

        
    


export { handleSubmit };











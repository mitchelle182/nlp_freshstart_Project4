import { checkForUrl } from "./urlChecker";


document.getElementById('submit').addEventListener('click', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    // // check what text was put into the form field
    let inputURL = document.getElementById('url').value;
    checkForUrl(inputURL);

    console.log("::: Form Submitted :::");
    fetch('http://localhost:8000/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message;
       
    });
}

export { handleSubmit };











import { checkForUrl } from "./urlChecker";



document.getElementById('submit').addEventListener('click', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    // // check what text was put into the form field
    console.log(input.value);
    let inputURL = document.getElementById('url').value;
    checkForUrl(inputURL);

    console.log("::: Form Submitted :::");
    const response =  await fetch('http://localhost:8000/', {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
      }catch(error) {
      console.log("error", error);
      }
        
    
}

export { handleSubmit };











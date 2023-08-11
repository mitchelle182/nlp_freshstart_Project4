import { checkForUrl } from "./urlChecker";




async function handleSubmit(event) {
    event.preventDefault();
    // // check what text was put into the form field
    const input = document.querySelector("input");
    console.log(input.value);
    let inputURL = document.getElementById('url').value;
   
    checkForUrl(inputURL);

    console.log("::: Form Submitted :::");
   const response = await postData(inputURL);
   
    const resultsNode = document.getElementById('results');
    resultsNode.textContent = JSON.stringify(response, null, 2);
}

//send a POST Request to the backend to get back the data
const postData = async (url)=>{
    const data = { url }
    const response = await fetch('http://localhost:8000/', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};






export { handleSubmit };











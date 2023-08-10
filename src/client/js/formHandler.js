
import { mcloudAPI } from "../../server/mcloudAPI";
import { checkForUrl } from "./urlChecker";



const input = document.querySelector("input");



document.getElementById('submit').addEventListener('click', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    // // check what text was put into the form field
    console.log(input.value);
    let inputURL = document.getElementById('url').value;
   
    checkForUrl(inputURL);

    console.log("::: Form Submitted :::");
    mcloudAPI();
    //postData('/', {text:data.text, score_tag:data.score_tag, subjectivity:data.subjectivity, agreement:data.agreement, confidence:data.confidence});
    //retrieveData();
}

//send a POST Request to the backend to get back the data
const postData = async ( url = '', data = {})=>{

    const response = await fetch('/', {
    method: 'POST', 
    credentials: 'same-origin', 
    redirect: 'follow',
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



//UI Update
const retrieveData = async () => {
    const request = await fetch('/');
    try {
        const allData =  await request.json();
        console.log(allData);
       
        document.getElementById('text').innerHTML = allData.text;
        document.getElementById('score_tag').innerHTML = allData.score_tag;
        document.getElementById('subjectivity').innerHTML = allData.subjectivity;
        document.getElementById('agreement').innerHTML = allData.agreement;
        document.getElementById('confidence').innerHTML = allData.confidence;
        document.getElementById('irony').innerHTML = allData.irony;
    }
    catch(error) {
        console.log('error');
    }
};
        
    


export { handleSubmit };











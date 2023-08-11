import { checkForUrl } from "./urlChecker";


document.getElementById('submit').addEventListener('click', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    // // check what text was put into the form field
    const input = document.querySelector("input");
    console.log(input.value);
    let inputURL = document.getElementById('url').value;
   
    checkForUrl(inputURL);

    console.log("::: Form Submitted :::");
   const response = await postData(inputURL);
    //postData('/', {text:data.text, score_tag:data.score_tag, subjectivity:data.subjectivity, agreement:data.agreement, confidence:data.confidence});
    //retrieveData();
    const resultsNode = document.getElementById('results');
    resultsNode.textContent = JSON.stringify(response, null, 2);
}

//send a POST Request to the backend to get back the data
const postData = async (url)=>{
    const data = {  url }
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



//UI Update
// const retrieveData = async () => {
//     const request = await fetch('/');
//     try {
//         const allData =  await request.json();
//         console.log(allData);
       
//         document.getElementById('text').innerHTML = allData.text;
//         document.getElementById('score_tag').innerHTML = allData.score_tag;
//         document.getElementById('subjectivity').innerHTML = allData.subjectivity;
//         document.getElementById('agreement').innerHTML = allData.agreement;
//         document.getElementById('confidence').innerHTML = allData.confidence;
//         document.getElementById('irony').innerHTML = allData.irony;
//     }
//     catch(error) {
//         console.log('error');
//     }
// };
        
    


export { handleSubmit };











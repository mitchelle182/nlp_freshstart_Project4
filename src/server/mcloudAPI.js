// from https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/dev-tools 
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";


const mcloudAPI = async (url, key) => {
  const response= await fetch(`${baseURL}?key=${key}&lang=en&url=${url}`);
 
  try {
    const data = await response.json();
    console.log(data);
    return data;
} catch(error){
    console.log("error", error);
}
};
  




module.exports =  {mcloudAPI};






































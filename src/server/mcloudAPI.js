
// from https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/dev-tools 
baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const formdata = new FormData();
formdata.append("url", "YOUR TEXT HERE");
formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...



const mcloudAPI = async (baseURL, key, formdata) => {
  const response = await fetch(baseURL+key+formdata);
  try {
    const data =await response.json();
    console.log(data);
    return data;
} catch(error){
    console.log("error", error);
}
};



module.exports =  {mcloudAPI};






































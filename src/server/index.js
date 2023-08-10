const dotenv = require('dotenv');
dotenv.config();
const key = process.env.API_KEY; 
const express = require('express');
const mcloudAPIResponse = require('./mcloudAPI.js');

const app =  express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);



app.get('/', function (req, res) {
     res.send('src/server/index.js');
    //res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
});

app.post('/',  async (req, res) => {
    //const url = req.body.url;
    const response = await mcloudAPIResponse.mcloudAPI(url, key); //call API
    res.send(response); //send back data to frontend
   console.log(response);
});


port = 8000;
app.listen(8000, function (){
    console.log('Server running on port 8000!');
});
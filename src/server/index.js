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
   res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
});

app.post('/',  (req, res) => {
    const url = req.body.input;
    res.send(mcloudAPIResponse);
   
});


port = 8000;
app.listen(8000, function (){
    console.log('Server running on port 8000!');
});
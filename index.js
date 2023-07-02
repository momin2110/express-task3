const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.port || 3000;
const hostName = '127.0.0.1';

app.get('/', (req, res)=>{
    res.send(`hi this is home page`)
})

app.listen(port, hostName, ()=>{
    console.log(`server is running at http://${hostName}:${port}`);
})

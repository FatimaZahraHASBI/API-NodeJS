const express = require('express');

// create express app
const app = express();

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});

// listen to the port
app.listen(8000, function(){
    console.log(`App is running at port 8000`);
});
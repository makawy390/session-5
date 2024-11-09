const express = require('express');
const app = express();

// Handel for body Json
app.use(express.json()); 
const port = 3000;
const coursesrouter = require('./routes/router.data')
const api = "/api/courses";

app.use(api , coursesrouter)
app.listen(port, ()=>{
    console.log(`server running from port ${port}`);
    
})

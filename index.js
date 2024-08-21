const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = require('./routers/router');
const path = require('path');
const port = process.env.PORT || 3005;
const Path= path.join(__dirname , "/views");

app.set("view engine" , "ejs");
app.set("views",Path)

app.use(express.static(Path))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',router)

app.listen(port , (err) =>{
    if(!err){
        console.log(`server is running on http://localhost:${port}`);
    }
})

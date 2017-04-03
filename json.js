var express = require('express')
var app = express();
var fs = require('fs')
var obj;
app.get('/books', (req, res)=>{
    console.log(process.argv[3])
    fs.readFile(process.argv[3], (err, data)=>{
        res.json(JSON.parse(data))
    })

})

app.listen(process.argv[2])
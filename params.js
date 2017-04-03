var express = require('express')
var app = express();

var crypto = require('crypto')

app.param('id', (req, res, next, id)=>{
    req.id = crypto.createHash('sha1').update(new Date().toDateString()+ id).digest('hex')
    next()
})

app.put('/message/:id', (req, res)=>{
    res.send(req.id)
})

app.listen(process.argv[2])
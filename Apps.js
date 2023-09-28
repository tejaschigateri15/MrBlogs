
const express = require('express')
//express app
const app = express()

// to listen the requests
app.listen(3000)

app.get('/',(req,res) =>
    res.sendFile('./index.html',{root:__dirname})
)

app.get('/ptp',(req,res) =>
res.sendFile('./ptp.html',{root:__dirname})
)

//redirect

app.get('/about-us',(req,res)=>{
    res.redirect('/ptp')
})
//if nothing match the url then 404 will run
app.use((req,res)=>{
    res.status(404).sendFile('./404.html',{root:__dirname})
})
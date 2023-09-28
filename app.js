//const file = require
console.log("hello")

const jk = require('./app2')
console.log(jk)

const fs=require('fs');

fs.readFile( './hj.txt',(err,data)=>{
    if(err){
        console.log()
    }
    console.log(data.toString());

});


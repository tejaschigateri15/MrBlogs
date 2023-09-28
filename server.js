const http = require('http');
const fs = require('fs');
const { throws } = require('assert');

const ht = http.createServer( (req,res)  =>
{
    console.log(req.url,req.method);
    res.setHeader('content-type','text/html');
   
    // res.end(data);
    const path = './ ';
    switch(req.url){
        case './':
        path +='index.html';
        break;
        case './ptp':
            path +='ptp.html';
            break;
        //default:path +='404.html';
       // break;
    };

    //to send an html file
    fs.readFile(path,(err,data) => {
        if (err){
            console.log("error");
            res.end();
        }
        res.end(data);
    })



}
);

ht.listen(3000,'localhost',() =>{
    console.log('listening ....');
})

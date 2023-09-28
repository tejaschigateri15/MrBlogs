console.log("i am from app2")
const kl="jai shree ram"

module.exports=kl

const fs=require('fs')

fs.writeFile('./hj.txt',"hi hello namskara",()=>{
    console.log('the file is written')
});
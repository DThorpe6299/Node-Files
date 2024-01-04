const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path){
    fs.readFile(path, "utf8", function(err, data){
        if(err){
            console.log(`Error with ${path}: ${err}`);
            process.exit(1);
        }
        console.log(`file contents: ${data}`);
    });
}

async function webCat(url){
    try{
    let resp = await axios.get(url);
    console.log(resp.data);
    }catch{
        console.log(`Error is ${error}`)
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}
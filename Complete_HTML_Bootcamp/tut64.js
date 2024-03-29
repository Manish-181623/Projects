const fs=require("fs");
let text=fs.readFileSync("dele.txt","utf-8");
console.log("The content is:")
console.log(text);
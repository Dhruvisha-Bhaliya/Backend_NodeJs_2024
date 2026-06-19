const fs = require('fs');

//write and append file

// fs.writeFile("hey.txt","hii",function(err){

fs.appendFile("hey.txt"," Hello this is node",function(err){
if(err) console.log(err);
else console.log("done");
})

//rename file

fs.rename("hey.txt","hello.txt",function(err){
if(err) console.error(err);
else console.log("done")
})

//copy file

fs.copyFile("hello.txt","./copy/copy.txt",function(err){
  if(err) console.error(err)
    else console.log("done")
})

//delete file

fs.unlink("hey.txt",function(err){
  if(err) console.error(err)
    else console.log("done")
})

//remove folder

fs.rmdir("./copy",{recursive:true},function(err){
  if(err) console.error(err)
    else console.log("removed")
})
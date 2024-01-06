const fs=require("fs")
let str;
fs.readFile("week-2/01-async-js/easy/a.txt","utf-8",function(err,data){
    data=data.split(" ");
    
    let arr=[]
    
    for(const value of data){
        if(value.toUpperCase()!==value.toLowerCase()){
            arr.push(value)
        }
    }
    str=arr.join(" ")
    console.log(str)
    
    
     fs.writeFile("week-2/01-async-js/easy/a.txt",str,function(err){
     })
})


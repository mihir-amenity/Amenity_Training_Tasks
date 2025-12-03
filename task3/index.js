const fs=require("fs");

const source="source.txt";
const dest="destination.txt"



const read=fs.readFileSync(source,"utf-8");
console.log("reading data ",read);
fs.copyFileSync(source,dest);
console.log("copying  dataa from source to dest");
const read2=fs.readFileSync(dest,"utf-8");
console.log(read2);


fs.copyFile(source,dest,(err)=>{
    if(err){
        console.log("Error is ",err);
        
    }
    else{
        console.log(fs.readFileSync(dest,"utf-8"));
        
    }
})

fs.readdir(_dirname,(err,files)=>{
    if(err){
        console.log("error",err);
        
    }
    else{
        console.log("files are");
        files.forEach((file)=>{
            console.log(file);
            
        })     
    }

})

fs.cp('./test/nested','./dest',{recursive:true},(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
            console.log("folder copied sucessfully");     
    }
})


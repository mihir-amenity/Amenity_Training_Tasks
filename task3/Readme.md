# Task 3 File Copy Operations and File Read and Write 

Copy a file in node js used
``` text
 fs.copyfile(src,dest,cb);
 ```
for folder copy and other subfolder copy used cp method in nodejs

``` text
fs.cp(src,dest,{recursive:true},cb);
```

### file Read and Write

#### for simple text file read and write 
```text
fs.readFile(path,'utf-8',(err,data)=>{
    if(err){
        console.log(err); 
    }
    else{
        console.log(data);  
    }
})
```

```text
fs.appendFile(path,text,'utf-8',(err)=>{
    if(err){
        console.log(err); 
    }
    else{
        console.log("write sucess");  
    }    
})
```

#### for json read and write 

```
let user =
{
    name: "New User",
    age: 30,
    language: ["PHP", "Go", "JavaScript"]
};
fs.writeFile('users.json',JSON.stringify(user),'utf-8',(err)=>{
    if (err) {
        console.log(err);  
    }
    else{
        console.log("write sucessfully");  
    }
})

fs.readFile('users.json','utf-8',(err,data)=>{
    if (err) {
        console.log(err);  
    }
    const dat=JSON.parse(data);
    console.log(dat);
    
})

```

#### csv read and write i have used npm package called csv also used fs read and writestream

```test
const results=[]
fs.createReadStream("sales_data.csv").pipe(csv.parse({trim:true,skip_empty_lines:true,columns:true}))
.on("data",(row)=>{
   results.push(row)
}).on("end",(row)=>{
    console.log(results);
})
```
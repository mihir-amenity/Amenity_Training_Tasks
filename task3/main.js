const fs=require("fs");
const csv=require("csv")
const path='source.txt'

//read and write file 

const text="this is sample text ";
fs.appendFile(path,text,'utf-8',(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("write sucess");
        
    }

    
})
fs.readFile(path,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log(data);
        
    }
})

//json read and write 


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

//csv read and write using csv npm package

const data=[
    { OrderID: 'ORD003',
    Product: 'Keyboard',
    Category: 'Electronics'},
    {
    OrderID: 'ORD004',
    Product: 'chair',
    Category: 'furniture'
    }
]
const writeStream=fs.WriteStream("sales_data.csv");
csv.stringify(data,{
    header:true,
    columns:{
       OrderID:"OrderID",
       Product:"Product",
       Category:"Category"
    }
}).pipe(writeStream)

const results=[]
fs.createReadStream("sales_data.csv").pipe(csv.parse({trim:true,skip_empty_lines:true,columns:true}))
.on("data",(row)=>{
   results.push(row)
}).on("end",(row)=>{
    console.log(results);
})

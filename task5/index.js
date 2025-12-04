import * as  aq from 'arquero';
 //load csv
const dt = await aq.loadCSV('sales_data.csv');
console.log(dt);

//convert into table
const table =aq.from(dt);



const n=3;
//get first n rows 
const firstnRows=table.slice(0,n);

firstnRows.print()
//last nrows from table 
const lastnRows=table.slice(-n);

lastnRows.print()
//get all columnname
console.log(table.columnNames());


//check column datatype
const colValues = Array.from(table.values('Price'));


if(colValues[0]!=null || colValues[1]!=null){
    console.log("type of datatype is :",typeof(colValues[0])); 
}
//datafame shape
const cols=table.numCols();
const rows=table.numRows();

console.log(`shape :[${cols}, ${rows}]`);

// 7. Get summary statistics for numeric columns
table.rollup({
    avg_price: aq.op.mean('Price'),
     min_price: aq.op.min('Price'),
    max_price: aq.op.max('Price'),
    avg_qty: aq.op.mean('Quantity')
}).print();

//get summary values for all columns

table.columnNames().forEach(col=>{
    const values=Array.from(table.values(col));
   
    const dtype=typeof(values[0])
    
   if(dtype==='number'){
    table.rollup({
        min:aq.op.min(col),
        max:aq.op.max(col),
        meanval:aq.op.mean(col)

    }).print();
   }
    
    
})
//Count unique values per column
table.columnNames().forEach(col=>{
    const uniqueCount = dt.groupby(col).count().numRows();
    console.log(`${col}: ${uniqueCount}`);
})
console.log("task2 started");


//task2 
//selece a single column
table.select('OrderID').print();


//Select multiple columns
table.select('OrderID','Product','Category','Region').print();

//Select a row by index position
table.slice(0,5).print();
//Select a range of rows
table.slice(10,20).print();
//Set a column as index
console.log("*****************************************table derive******************");
table.derive({index :()=> op.row_number()-1}).print();
//Select rows using index labels
const tableWithIndex = table.derive({ index: () => op.row_number() - 1 });
tableWithIndex.print()

//Select rows and columns using labeled indexing (loc)
const selectedCols = table.select('Product', 'Price');


const selectedRows = table.filter(aq.escape(d => d.Price > 100));


const combined = table
  .filter(aq.escape(d => d.Price > 30))
  .select('Product', 'Price');


combined.print();

//Select rows and columns using positional indexing (iloc)
function iloc(tbl, rowStart, rowEnd, colPositions) {
  const colNames = tbl.columnNames();
  const selectedCols = colPositions.map(pos => colNames[pos]);
  return tbl
    .slice(rowStart, rowEnd) 
    .select(selectedCols);
}
const result = iloc(table, 1, 3, [0, 2]);
result.print();


import * as  aq from 'arquero';
 //load csv
const dt = await aq.loadCSV('sales_data.csv');


//convert into table
const table =aq.from(dt);

//Detect columns with missing values
const columnsWithMissing = [];  
table.columnNames().forEach(col=>{
   const colData = table.array(col);
 const hasMissing = colData.some(v => v === null || v === undefined);

  if (hasMissing) {
    columnsWithMissing.push(col);
  }
});
console.log(columnsWithMissing);

// Count missing values per column
table.rollup({
    null_price:d=>op.sum(d.Price===null?1:0),
    null_category:d=>op.sum(d.Category===null?1:0),
    null_quantity:d=>op.sum(d.Quantity===null?1:0),
    null_revenue:d=>op.sum(d.Revenue===null?1:0),
}).print()

//Fill missing numeric values using mean or median
const result = table.impute({
  Quantity: aq.op.mean('Quantity')
});

result.print();

//Fill missing categorical values using placeholders or mode
const results=table.impute({
    Product:aq.op.mode('Product')
}).print();
//Drop rows with missing values
table.filter(
    d=>d.Quantity!==null
).print()
//Drop specific columns
table.select(aq.not('Product')).print()
//Create new columns from arithmetic between existing columns
table.derive({
  arithmeticmean: d => d.Price * d.Quantity
}).print();


//Rename columns
const newTable=table.rename({
    Region:'Directions'
}).print()

//Change column data types
const newTables=table.derive({
    Quantity:d=>aq.op.parse_float(d.Quantity)
}).print()
//Remove duplicate rows
const dedupedAll = table.dedupe();
dedupedAll.print()
//Apply custom functions to columns
aq.addFunction('data',(a,b)=>{
  return a*b;
})
const functions=table.derive({
    avg:d=>aq.fn.data(d.Price,d.Quantity)
})
functions.print()
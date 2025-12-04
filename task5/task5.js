import * as  aq from 'arquero';

 //load csv
const dt = await aq.loadCSV('sales_data.csv');


//convert into table
const table =aq.from(dt);

//Group data by one column and compute sums
table.groupby('Price').rollup({
    total_value:d=>op.sum(d.Price),
}).print();
//Group data by one column and compute means
table.groupby('Price').rollup({
    total_value:d=>op.mean(d.Price),
}).print();
//Group data by multiple columns and count occurrences
const grouped = table
  .groupby('Price', 'Quantity') // group by both columns
  .rollup({ count: d => aq.op.count() });
  grouped.print();
//Compute min and max values for each group
table.groupby('Quantity').rollup({
    min:d=>aq.op.min(d.Price),
    max:d=>aq.op.max(d.Price),
}).print()
//Count unique items in each group
const Unique_item = table
  .groupby('Region')
  .rollup({
    Unique_item: aq.op.distinct('Product')
  }).print();
//Get group sizes
const groupSizes = table
  .groupby('Quantity') 
  .count()             
  .rename({ count: 'group_size' }); 
groupSizes.print();
//Apply multiple aggregations using a single operation
const aggregrated = table
  .groupby('Quantity') .rollup({
    totalValue: d => aq.op.sum(d.Price),  
    avgValue: d => aq.op.mean(d.Price),   
    totalQty: d => aq.op.sum(d.Quantity),  
    maxValue: d => aq.op.max(d.Price)      
  }).print();

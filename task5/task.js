import * as  aq from 'arquero';
 //load csv
const dt = await aq.loadCSV('sales_data.csv');


//convert into table
const table =aq.from(dt);

//Sort by a single column (ascending or descending)
table.orderby('Price').print()  
//Sort by multiple columns
table.orderby('Region',aq.desc('Price')).print()
//Concatenate DataFrames vertically
const West = dt.filter(d => d.Region === 'West');
const East = dt.filter(d => d.Region === 'East');
const combine = West.concat(East);
combine.print()
//Merge DataFrames on a common key (inner, left, right joins)
 
import * as  aq from 'arquero';
 //load csv
const dt = await aq.loadCSV('sales_data.csv');


//convert into table
const table =aq.from(dt);

//Filter rows based on numerical conditions
 table.filter(d => d.Price > 100).print();
//Filter rows based on categorical conditions
const Categories=['Electronics'] 
const filter=table.filter(aq.escape(d=>Categories.includes(d.Category)));
filter.print();

//Filter rows using multiple conditions together
const filtermulti=table.filter(aq.escape(d=>d.Category==='Electronics' && d.Revenue>500));
filtermulti.print()
//Filter rows where values are in a list
const Products=['Monitor','Laptop'] 
const filters=table.filter(aq.escape(d=>Products.includes(d.Product)));
filters.print();
//Remove rows with missing values in specific columns
const filteredvalues=table.filter(aq.escape(d=>d.Quantity!=null && d.Revenue!=null))
filteredvalues.print();



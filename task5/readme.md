# DataFrame Operations Guide

This guide demonstrates various DataFrame operations using  Arquero libraries in JavaScript.

## Project Structure

```
project/
├── index.js          # Tasks 1-2: Loading, Inspection & Selection
├── task3.js 
├── task4.js
├── task5.js     
├── task.js           # Tasks 6-7: Sorting & Combining (Arquero)
└── README.md         
```



index.js

```
task 1:
Load a CSV into a DataFrame
View first N rows
View last N rows
Get DataFrame shape
List all column names
Check column data types
Get summary statistics for numeric columns
Get summary statistics for all columns
Count unique values per column

task2:
Select a single column
Select multiple columns
Select a row by index position
Select a range of rows
Set a column as index
Select rows using index labels
Select rows and columns using labeled indexing (loc)
Select rows and columns using positional indexing (iloc)
```
task3.js

``` text
Filter rows based on numerical conditions
Filter rows based on categorical conditions
Filter rows using multiple conditions together
Filter rows where values are in a list
Remove rows with missing values in specific columns
```

task4.js
```text
Detect columns with missing values
Count missing values per column
Fill missing numeric values using mean or median
Fill missing categorical values using placeholders or mode
Drop rows with missing values
Drop specific columns
Create new columns from arithmetic between existing columns
Convert string-based dates into datetime format
Extract month or year from a datetime column
Rename columns
Change column data types
Remove duplicate rows
Apply custom functions to columns
```

task5.js    

``` text
Group data by one column and compute sums
Group data by one column and compute means
Group data by multiple columns and count occurrences
Compute min and max values for each group
Count unique items in each group
Get group sizes
Apply multiple aggregations using a single operation
```

task.js(task6,task7):
```
Sort by a single column (ascending or descending)
Sort by multiple columns
Concatenate DataFrames vertically
Merge DataFrames on a common key (inner, left, right joins)
```


 
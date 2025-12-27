import { ErrorMessage, useField } from 'formik'
import React from 'react'

function MyCheckBox({children,...props}) {

    const[field,meta]=useField({...props,type:'checkbox'})
    console.log(field);
    console.log(meta);
    
    
  return (
    <div>
        <label className="checkbox-input">
       <input type='checkbox' {...field}{...props}/>
       {children}
       </label>
       <br/>    
       <ErrorMessage name={props.name} component="div"
  className="text-red-500 text-base mt-1"/>
       
    </div>
  )
}

export default MyCheckBox

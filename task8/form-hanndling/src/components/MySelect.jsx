import React from 'react'
import { Formik,Form,useField, ErrorMessage } from 'formik'

function MySelect({children,label,...props}) {
    const[field,meta]=useField(props)
  return (
    <div>
     <label htmlFor={props.name || props.id}>{label}</label>
     <select {...field} {...props }   className="w-full px-3 py-2 border border-gray-300 rounded-lg
             focus:outline-none focus:ring-2 focus:ring-blue-500" >
        {children}
     </select>
     <br/>
     <ErrorMessage name={props.name} component="div"
  className="text-red-500 text-base mt-1" />
    </div>
  )
}

export default MySelect

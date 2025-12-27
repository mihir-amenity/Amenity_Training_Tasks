import React, { useState } from 'react'
import { Formik,Form } from 'formik'
import * as Yup from "yup"
import MyInput from '../components/MyInput';
import MySelect from '../components/MySelect';
import MyCheckBox from '../components/MyCheckBox';
import { useNavigate } from 'react-router-dom';
import Checkboxes from '../components/CheckBoxes';
function SignupForm() {
    const [formData,setFormData]=useState(null);
    const navigate=useNavigate();

  
    const hobbies = [
  { key: '1', value: 'Reading' },
  { key: '2', value: 'Coding' },
  { key: '3', value: 'Travelling' }
];

  return (
   <div className=" flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          age: 1,
          gender: "",
          hobbies: [],
          birthDate: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstname: Yup.string().required("FirstName is Required").max(15),
          lastname: Yup.string().required("LastName is Required").max(15),
          email: Yup.string().email("Invalid Email Address").required("Email is Required"),
          password: Yup.string().min(8).required("Password is Required "),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')],"Password did not match")
            .required("Password is required"),
          phoneNumber: Yup.string()
            .matches(/^\d{10}$/)
            .required("10 digit number is required"),
          age: Yup.number().moreThan(1,"Age must  be more than 1 year ").required("Age is Required "),
          gender: Yup.string().oneOf(['male', 'female']).required("Gender is Required "),
          hobbies: Yup.array().min(1).required("Hibbies are required "),
          birthDate: Yup.date().required("Required"),
          acceptedTerms: Yup.boolean().oneOf([true],"Please accept Terms & conditions"),
        })}
        onSubmit={(values, { resetForm }) => {
          setFormData(values);
          resetForm();
          navigate("/login")
        }}
      >
      <Form className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
          <MyInput label="First Name" name="firstname" />
          <MyInput label="Last Name" name="lastname" />
          <MyInput label="Email" name="email" type="email" />
          <MyInput label="Password" name="password" type="password" />
          <MyInput label="Confirm Password" name="confirmPassword" type="password" />
          <MyInput label="Phone Number" name="phoneNumber" />
          <MyInput label="Age" name="age" type="number" />

          <MySelect label="Gender" name="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </MySelect>

          <Checkboxes label="Hobbies" name="hobbies" options={hobbies} />

          <MyInput label="Birth Date" name="birthDate" type="date" />

          <MyCheckBox name="acceptedTerms">
             I accept Terms & Conditions
          </MyCheckBox>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignupForm

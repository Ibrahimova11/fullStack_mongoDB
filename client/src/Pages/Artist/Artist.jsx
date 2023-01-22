import React from 'react'
import './Artist.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Artist() {
    const formik = useFormik({
        initialValues: {
          name: '',
          degree: '',
          change: '',
          sold: '',
          volume:''
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          degree: Yup.string()
            .max(10, 'Must be 10 characters or less')
            .required('Required'),
          change: Yup.string().required('Required'),
          sold: Yup.number().required("Required"),
          volume:Yup.string().required("Required")
        }),
        onSubmit: values => {
          axios.post('http://localhost:8080/api/artists', values).then((res)=>console.log(res.data))
        },  
      });
   
   
   
   
      return (
<>
<div className='Artist'>
    <div className='form'>
    <form onSubmit={formik.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            placeholder='Name'
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
    
          <input
            id="degree"
            name="degree"
            type="number"
            placeholder='Degree'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.degree}
          />
          {formik.touched.degree && formik.errors.degree ? (
            <div>{formik.errors.degree}</div>
          ) : null}
    
          <input
            id="change"
            name="change"
            type="text"
            placeholder='Change'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.change}
          />
          {formik.touched.change && formik.errors.change ? (
            <div>{formik.errors.change}</div>
          ) : null}
          <input
            id="sold"
            name="sold"
            placeholder='Sold'
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sold}
          />
          {formik.touched.sold && formik.errors.sold ? (
            <div>{formik.errors.sold}</div>
          ) : null}
          <input 
            id="volume"
            placeholder='Volume'
            name="volume"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.volume}
          />
          {formik.touched.volume && formik.errors.volume ? (
            <div>{formik.errors.volume}</div>
          ) : null}
    
          <button onClick={()=>{
            toast.success('Successfully added!')
          }} type="submit">Submit</button>
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </form>

    </div>


</div>
        
</>

        
      );
    };

export default Artist
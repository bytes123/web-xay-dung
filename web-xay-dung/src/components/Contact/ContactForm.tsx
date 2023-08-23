"use client"
import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import SocialMediaColor from '../Utils/SocialMediaColor';
import { BsTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import {FaBusinessTime} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'

export default function ContactForm() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = Yup.object({
      firstname: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("The text field is required."),
      lastname: Yup.string()
      .min(2, "Mininum 2 characters")
      .max(15, "Maximum 15 characters")
        .required("The text field is required."),
      email: Yup.string()
      .email("Invalid email format")
        .required("The text field is required."),
      phone: Yup.string()
        .required("The text field is required.")
        .matches(phoneRegExp, 'Phone number is not valid')
        ,
        message: Yup.string()
        .required("The text field is required.")
    })

  return (
    <div className='my-20 px-5 md:px-10 xl:px-40'>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-span-2">
               <div className="mb-5">
                <h3 className="text-2xl font-bold">
                Get in Touch
                </h3>
               </div>
               <div className='mb-10'>
                <p className="text-sm text-style-1">You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally.

We would be happy to answer your questions.</p>
               </div>
               <div>
               <Formik
       initialValues={{
         firstname: '',
         lastname: '',
         email: '',
         phone: '',
         message: '',
       }}
       validationSchema={validationSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form className='grid grid-cols-1 md:grid-cols-2 gap-5'>
           <div className='relative'>
            <label htmlFor="firstname" className='mb-5 text-style-1 text-sm'>First Name</label>
           <Field className={`outline-none bg-[#f5f5f5] w-full py-2 px-6 rounded-full border ${errors.firstname ? 'border-red-500' : null} block`} name="firstname"/>
           {errors.firstname? (
             <div className="absolute top-0 right-5 text-red-500 text-xs">{errors.firstname}</div>
           ) : null}
           </div>
           <div className='relative'>
            <label htmlFor="lastname" className='mb-5 text-style-1 text-sm'>Last Name</label>
           <Field className={`outline-none bg-[#f5f5f5] w-full py-2 px-6 rounded-full border ${errors.lastname ? 'border-red-500' : null} block`} name="lastname"/>
           {errors.lastname ? (
             <div className="absolute top-0 right-5 text-red-500 text-xs">{errors.lastname}</div>
           ) : null}
           </div>
           <div className='relative'>
            <label htmlFor="email" className='mb-5 text-style-1 text-sm'>E-mail</label>
           <Field className={`outline-none bg-[#f5f5f5] w-full py-2 px-6 rounded-full border ${errors.email ? 'border-red-500' : null} block`} name="email"/>
           {errors.email ? (
              <div className="absolute top-0 right-5 text-red-500 text-xs">{errors.email}</div>
           ) : null}
           </div>
           <div className='relative'>
            <label htmlFor="phone" className='mb-5 text-style-1 text-sm'>Phone</label>
           <Field  className={`outline-none bg-[#f5f5f5] w-full py-2 px-6 rounded-full border ${errors.phone ? 'border-red-500' : null} block`} name="phone"/>
           {errors.phone ? (
             <div className="absolute top-0 right-5 text-red-500 text-xs">{errors.phone}</div>
           ) : null}
           </div>

           <div className="md:col-span-2 relative">
            <label htmlFor="message" className='mb-5 text-style-1 text-sm'>Message</label>
           <Field as="textarea" rows="4" className={`outline-none bg-[#f5f5f5] w-full py-2 px-6 rounded-3xl border ${errors.message ? 'border-red-500' : null} block`} name="message"/>
           {errors.message ? (
              <div className="absolute top-0 right-5 text-red-500 text-xs">{errors.message}</div>
           ) : null}
           </div>
           
           
          
           <button type="submit" className='relative bg-dark px-4 py-3 max-w-[180px] rounded-full text-white text-lg font-semibold'>Send Message</button>
         </Form>
       )}
     </Formik>
               </div>
            </div>
            <div className="col-span-1">
            <div className='mb-10'>
            <div className="mb-5">
                <h3 className="text-2xl font-bold mb-5">
                Social
                </h3>
                <div>
                <SocialMediaColor/>
                </div>
              </div>
            </div>
            <div className='mb-10'>
            <div className="mb-5">
                <h3 className="text-2xl font-bold mb-5">
                Phone
                </h3>
                <div className='flex items-center gap-2'>
                  <BsTelephoneFill/>
                  <span className='text-sm'>
                  1-800-1234-567 1-800-3214-951
                  </span>
                </div>
              </div>
            </div>

            <div className='mb-10'>
            <div className="mb-5">
                <h3 className="text-2xl font-bold mb-5">
                Address
                </h3>
                <div className='flex items-center gap-2'>
                  <ImLocation className='text-xl'/>
                  <span className='text-sm'>
                 
2130 Fulton Street, San Diego,
CA 94117-1080 USA
                  </span>
                </div>
              </div>
            </div>

            <div className='mb-10'>
            <div className="mb-5">
                <h3 className="text-2xl font-bold mb-5">
                Open Hours
                </h3>
                <div className='flex items-center gap-2'>
                  <FaBusinessTime className='text-xl'/>
                  <span className='text-sm'>
                  
Mon-Fri: 9:00am-6:00pm
Sat-Sun: 10:00am-5:00pm
                  </span>
                </div>
              </div>
            </div>

            <div className='mb-10'>
            <div className="mb-5">
                <h3 className="text-2xl font-bold mb-5">
                E-mail
                </h3>
                <div className='flex items-center gap-2'>
                  <AiOutlineMail className='text-xl'/>
                  <span className='text-sm'>
                  info@demolink.org
                  </span>
                </div>
              </div>
            </div>

            </div>
        </div>
    </div>
  )
}

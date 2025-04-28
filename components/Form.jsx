import { useForm, ValidationError } from '@formspree/react';


import React from 'react'

export const Form = () => {
    const [state, handleSubmit] = useForm("xjkwvkqe");
    if (state.succeeded) {
        return <p></p>;  
    }
  return (
    <form onSubmit={handleSubmit} className='form'>
    <label htmlFor="email" className='form__label'>
      Email
    </label>
    <input
      className='form__input'
      id="email"
      type="email" 
      name="email"
      placeholder='example@example.com'
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <label htmlFor="text" className='form__label'>Send us a Message</label>
    <textarea
    className='form__input'
      id="text"
      type="text"
      name="message"
      rows={5}
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <button type="submit" disabled={state.submitting} className='form__button'>
      Submit
    </button>
  </form>
  )
}

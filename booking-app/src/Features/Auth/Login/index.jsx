import React from 'react';
import LoginForm from '../LoginForm/index';



export default function Login(props) {
  const handleSubmit = (values) =>{
    console.log( "form submit: ",values)
  }

  return (
    <div>
      <LoginForm onSubmit = {handleSubmit}/>
    </div>
  )
}

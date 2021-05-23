import React, { useState } from 'react';
import LoginForm from '../LoginForm/index';
import firebase from 'firebase';
import "firebase/auth";
import { useAuth } from '../AuthContext/index';

export default function Login(props) {
  const [user, setUser] = useState('')
  // const {login} = useAuth()
  const handleSubmit = async (values) =>{
    console.log( "form submit: ",values.email)
    const submitForm = await firebase.database().ref('Users').data().val();
    const infoSubmit = submitForm.push();
      console.log(submitForm)
    // try{
    //   infoSubmit.set({
    //     name: values.email,
    //     passWord: values.passWord,
    //   })
    //   if(infoSubmit != submitForm){
    //     console.log("login success")
    //   }
    // }catch(error){
   
    //   console.log("failed to login",error.message);
    // }
  }

  return (
    <div>
      <LoginForm onSubmit = {handleSubmit}/>
    </div>
  )
}

import firebase from 'firebase';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import LoginForm from '../LoginForm/index';
export default function Login(props) {
  const [user, setUser] = useState('');

  // const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()



  const handleSubmit = async (values) => {

    console.log('form submit: ', values);

    // try {
    //   setError("")
    //   setLoading(true)
    //   await login(values.email,values.passWord)
    //   history.push("/")
    // } catch {
    //   setError("Failed to log in")
    // }

    setLoading(false)
    
    // const infoSubmit = submitForm.push();
    // console.log(submitForm);
    // try {
    //   infoSubmit.set({
    //     name: values.email,
    //     passWord: values.passWord,
    //   });
    //   // if (infoSubmit != submitForm) {
    //   //   console.log('login success', infoSubmit);
    //   // }
    // } catch (error) {
    //   console.log('failed to login', error.message);
    // }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} loading ={loading} />
    </div>
  );
}

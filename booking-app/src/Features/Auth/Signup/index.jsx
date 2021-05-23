import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../AuthContext';
import SignUpForm from '../SignUpForm';
import firebase from 'firebase';
SignUp.propTypes = {};

function SignUp(props) {
  // const { Register } = useAuth()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (!user) return;
    });
    return unregisterAuthObserver();
  }, []);

  const handleSubmit = async (values) => {
    console.log('form submit', values);
    const submitForm = await firebase.database().ref('Users');
    const infoSubmit = submitForm.push();
    try{
      infoSubmit.set({
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        passWord: values.passWord,
      });
      console.log('Register success', JSON.stringify(infoSubmit));
    }catch(error){
      console.log("Failed to register", error.message);
    }
  };

  return (
    <div>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
}

export default SignUp;

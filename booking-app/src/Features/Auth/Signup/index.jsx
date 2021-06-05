import { unwrapResult } from '@reduxjs/toolkit';
import firebase from 'firebase';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useAuth } from '../AuthContext';
import SignUpForm from '../SignUpForm';
import { register } from '../userSlice';
SignUp.propTypes = {};

function SignUp(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const { signup } = useAuth();
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (!user) return;
    });
    return unregisterAuthObserver();
  }, []);
  const handleSubmit = async (values) => {
    console.log('form submit', values);
    try {
      const action = register(values);

      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('Success !', user);

      // history.push("/")
      await enqueueSnackbar('Register success !', { variant: 'Success' });
      // const setTime = setTimeout(() => {
      //   history.push('/login');
      // }, 2000);
      // clearTimeout(setTime);
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar('Register fail !', { variant: 'error' });
    }

    setLoading(false);
  };

  return (
    <div>
      <SignUpForm onSubmit={handleSubmit} />
    </div>
  );
}

export default SignUp;

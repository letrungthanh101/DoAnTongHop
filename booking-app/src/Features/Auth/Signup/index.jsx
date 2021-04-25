import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../SignUpForm';

SignUp.propTypes = {
  
};

function SignUp(props) {
  const handleSubmit = (values) =>{
    console.log(values)
  }
  return (
    <div>
      <SignUpForm onSubmit = {handleSubmit}/>
    </div>
  );
}

export default SignUp;
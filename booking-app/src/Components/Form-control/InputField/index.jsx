import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
  
  
  const { form, name, label, disabled } = props;
  const { errors} = form;
  const hasError = errors[name];
  console.log(errors[name])
  return (
      <Controller
        name={name}
        control = {form.control}
        as={ TextField }
        label ={label}
        fullWidth
        variant = "outlined"
        margin="normal"
        error={!!hasError}
        helperText={errors[name]?.message}
        disabled={disabled}
      
      />

  );
}

export default InputField;

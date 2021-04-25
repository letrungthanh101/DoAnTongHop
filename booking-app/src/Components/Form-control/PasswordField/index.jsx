import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
};

function PasswordField(props) {
  const { form, name, disabled, label } = props;
//   const { errors, formState } = form;
//   const hasError = formState.touched[name] && errors[name];

  const [showPassword, setshowPassword] = useState(false);
  const toggleShowPassword = () => {
    setshowPassword((x) => !x);
  };
  return (
    <div>
      {/* <Controller
        name={name}
        control={form.control}
        as={TextField}
        disabled={disabled}
        error={!!hasError}
        helperText={errors[name]?.message}
      /> */}

      <FormControl variant="outlined" margin="normal"   fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }

        />
      </FormControl>
    </div>
  );
}

export default PasswordField;

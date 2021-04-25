import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PasswordField from '../../../Components/Form-control/PasswordField';
import InputField from '../../../Components/Form-control/InputField';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup.string()
    .required('Please enter your full name')
    .test('','Please enter min two word',(value)=>{
      return value.split('').length >=2;
    }),
    email: yup.string().
    required('Please enter your email')
    .email('Please enter valid your email'),
    password: yup.string().required('Please enter your password').min(6,'Please enter at least 6 character.')

  });
  const form = useForm({
    defaultValues: {
      fullName:'',
      email: '',
      passWord: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
      console.log('Values is: ', values);
    }
    form.reset();
  };
  // handleSubmit là func  có sẵn từ useForm
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      
        <form className={classes.form} noValidate onSubmit={form.handleSubmit(handleSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <InputField name="fullName" label="Full Name" form={form}/>
            </Grid>
            <Grid item xs={12}>
              {/* <InputField name="email" label="Email" form={form} /> */}
            </Grid>
            <Grid item xs={12}>
              <PasswordField name="password" label="Password" form={form} />
            </Grid>
            <Grid item xs={12}>
              <PasswordField name="confirmPassword" label="Confirm Password" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

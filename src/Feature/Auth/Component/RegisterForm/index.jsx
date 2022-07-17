import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../Component/Form-controls/InputField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import PasswordField from '../../../../Component/Form-controls/PasswordField';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  
};

const useStyle = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
    
  },

  avatar: {
    width: "70px",
    height: "70px",
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    padding: theme.spacing(2, 0)
  },

  btnSubmit: {
    margin: theme.spacing(2,0),
    padding: theme.spacing(1,0)
  },
}))

function RegisterForm(props) {

  const classes = useStyle();

  const schema = yup.object().shape({
    fullName: yup
              .string()
              .required('Please enter fullname')
              .test('Should has at least two words', 'Please enter at least two words', value => {
                return value.split(' ').length >=2 ;
              }),
    email: yup
          .string()
          .required('Please enter your email')
          .email('Please enter invalid email'),
    password: yup
              .string()
              .required('Password must be 6 character')
              .min(6, 'Password must be 6 character'),
    confirmPassword: yup
              .string()
              .required('Please enter your password')
              .oneOf([yup.ref('password')], 'Password must be 6 character'),
  })


  const form = useForm({
    defaultValues: {
      title: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    resolver: yupResolver(schema),
  })

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if(onSubmit){
      onSubmit(values);
    }
    form.reset();
  } 

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5"  className={classes.title}>
        Create An Account
      </Typography>
        
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name='fullName' label='Fullname'/>
        <InputField form={form} name='email' label='Email'/>
        <PasswordField form={form} name='password' label='Password'/>
        <PasswordField form={form} name='confirmPassword' label='Confirm Password'/>

        <Button type="submit" className={classes.btnSubmit} variant="contained" color="primary" fullWidth>
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
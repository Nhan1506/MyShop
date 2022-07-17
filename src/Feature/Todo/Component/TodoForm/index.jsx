import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Component/Form-controls/InputField';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,

};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string()
    .required('Please enter this field')
    .min(5, 'It must be 5 character'),
  })
  const form = useForm({
    defaultValues: {
      title: '',
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
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField form={form} name='title' label='Enter title'/>
    </form>
  );
}

export default TodoForm;
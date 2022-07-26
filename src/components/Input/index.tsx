import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  givenError?: string;
  customClass?: string;
} & TextFieldProps;

const Input = ({
  name,
  required,
  givenError,
  customClass,
  defaultValue,
  ...rest
}: InputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      defaultValue={defaultValue}
      helperText={errors[name] && givenError}
      className={customClass}
      {...register(name, { required: { value: required as boolean, message: givenError as string } })}
      {...rest}
    />
  );
};

export default Input;

import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import { useAuth } from '../../../hooks/Auth';
import { showAlert } from '../../../utils/showAlert';
import { useStyles } from './styles';
import Loading from '../../../components/Loading';

interface SignUpProps {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const Register = (): JSX.Element => {
  const classes = useStyles();
  const formMethods = useForm<SignUpProps>();
  const navigate = useNavigate();
  const { handleSubmit } = formMethods;
  const { signUp } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: SignUpProps): Promise<void> => {
    const { confirmPassword, ...userData } = data;
    if (userData.password !== confirmPassword) {
      showAlert({
        title: 'Atenção',
        icon: 'warning',
        text: 'As senhas precisam ser iguais!',
      });
      return;
    }

    setLoading(true);
    try {
      const res = await signUp(userData);
      showAlert({
        title: 'Sucesso!',
        icon: 'success',
        text: res.message,
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/auth/login', { state: { email: res.content?.email } });
        }
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      showAlert({
        title: 'Ops...',
        icon: 'error',
        text: err.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.header}>
          <Typography color='secondary' variant='h5'>
            Insira suas informações para o registro
          </Typography>
        </div>
        <FormProvider {...formMethods}>
          <Input
            variant='outlined'
            name='email'
            label='E-mail'
            required
            givenError='Insira um endereço de e-mail'
          />
          <Input variant='outlined' name='name' label='Nome' required givenError='Insira seu nome' />
          <Input
            variant='outlined'
            type='password'
            name='password'
            label='Senha'
            required
            givenError='Insira uma senha'
          />
          <Input
            variant='outlined'
            type='password'
            name='confirmPassword'
            label='Confirme a senha'
            required
            givenError='Insira a senha novamente'
          />
        </FormProvider>
        <div className={classes.bottomContainer}>
          <Button className={classes.button} type='submit'>
            {loading ? <Loading loadingSize={16} /> : 'Cadastrar'}
          </Button>
          <NavLink className={classes.signIn} to='/auth/login'>
            <Typography variant='h6'>Já possuo uma conta</Typography>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;

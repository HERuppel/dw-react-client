import React, { useState } from 'react';
import { Modal as ModalComponent, Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

import { Close, Save } from '@material-ui/icons';

import { Post } from '../../@types/Post';

import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';
import { useAuth } from '../../hooks/Auth';
import { usePost } from '../../hooks/Post';
import { showAlert } from '../../utils/showAlert';
import Loading from '../Loading';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  buttonTitle?: string;
  buttonIcon?: React.ReactElement;
  buttonClass?: string;
}

const Modal = ({
  open,
  handleClose,
  handleOpen,
  buttonTitle,
  buttonIcon,
  buttonClass,
}: ModalProps): JSX.Element => {
  const classes = useStyles();
  const {
    user: { id },
  } = useAuth();
  const { addPost } = usePost();
  const formMethods = useForm<Post>();
  const { handleSubmit, reset } = formMethods;
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: Post): Promise<void> => {
    try {
      setLoading(true);
      const res = await addPost({ ...data, userId: id });

      showAlert({
        title: 'Sucesso!',
        text: res.message,
        icon: 'success',
        customClass: classes.swalContainer,
      });
      closeModal();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      showAlert({
        title: 'Ops...',
        text: err.response.data.message,
        icon: 'error',
        customClass: classes.swalContainer,
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = (): void => {
    reset();
    handleClose();
  };

  return (
    <>
      <Button className={buttonClass} onClick={handleOpen} endIcon={buttonIcon}>
        {buttonTitle || 'Abrir'}
      </Button>
      <ModalComponent
        open={open}
        onClose={handleClose}
        className={classes.container}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className={classes.content}>
          <div className={classes.header}>
            <Typography variant='h5' color='secondary'>
              Adicionar Post
            </Typography>
            <Button className={classes.closeButton} endIcon={<Close fontSize='large' />} onClick={closeModal}>
              Fechar
            </Button>
          </div>
          <FormProvider {...formMethods}>
            <form id='form' className={classes.body} onSubmit={handleSubmit(onSubmit)}>
              <Input
                variant='outlined'
                name='title'
                label='Título'
                required
                givenError='Insira o Título do post'
              />
              <Input variant='outlined' name='imageUrl' label='Imagem' />
              <Input
                name='body'
                label='Texto'
                variant='outlined'
                required
                givenError='Insira o texto'
                multiline
                minRows={4}
                maxRows={6}
                customClass={classes.textarea}
              />
              <Button className={classes.button} type='submit' endIcon={<Save />}>
                {loading ? <Loading loadingSize={16} /> : 'Salvar'}
              </Button>
            </form>
          </FormProvider>
        </Box>
      </ModalComponent>
    </>
  );
};

export default Modal;

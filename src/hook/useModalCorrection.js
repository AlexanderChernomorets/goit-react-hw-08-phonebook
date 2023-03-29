import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';

export const useModalCorrection = ({ close, name, number, id }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      number,
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', clickEsc);

    return () => {
      window.removeEventListener('keydown', clickEsc);
    };
  }, []);

  function clickEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }
    close(false);
  }

  function clickOverlay(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    close(false);
  }

  const onSubmit = data => {
    dispatch(updateContact({ id, ...data }));
    close(false);
  };

  return { clickOverlay, onSubmit, register, handleSubmit };
};

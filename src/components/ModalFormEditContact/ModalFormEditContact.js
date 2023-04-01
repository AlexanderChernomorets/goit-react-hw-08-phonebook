import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEditContactMutation } from 'redux/contacts';
import useFormFields from '../../hook/useFormFields';
import { updateModalState, resetOpenedContact } from 'redux/modal/modalActions';
import { isModalShownSelector } from 'redux/modal/modalSelectors';
import { ClsButton, Modal, Overlay } from './ModalFormEditContact.styled';
import { FormContact, FormInput, FormLabel, TitleForm } from 'components/FormAddContact/FormAddContact.styled';
import { FormButton } from 'views/LogInView/LoginView.styled';

const modalRoot = document.querySelector('#modal-root');

export default function ModalFormEditContact({ openedContact }) {
  const [editContact, { isLoading }] = useEditContactMutation();
  const {
    state: name,
    // eslint-disable-next-line no-unused-vars
    setState: setName,
    handleChange: handleNameChange,
  } = useFormFields(openedContact.name);
  const {
    state: number,
    // eslint-disable-next-line no-unused-vars
    setState: setNumber,
    handleChange: handleNumberChange,
  } = useFormFields(openedContact.number);
  const dispatch = useDispatch();
  const isModalShown = useSelector(isModalShownSelector);

  const handleEditSubmit = evt => {
    evt.preventDefault();
    const contactData = {
      name,
      number,
    };

    editContact({ id: openedContact.id, contact: contactData })
      .then(() => dispatch(updateModalState()))
      .then(() => dispatch(resetOpenedContact()));
  };

  const onBackdropClose = useCallback(
    evt => {
      if (evt.target === evt.currentTarget) {
        dispatch(updateModalState());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        dispatch(updateModalState());
      }
    };

    if (isModalShown) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modal-is-open');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-is-open');
    };
  }, [dispatch, isModalShown]);

  return createPortal(
    <Overlay onClick={onBackdropClose}>
      <Modal>
        

        
        <FormContact onSubmit={handleEditSubmit}>
        <ClsButton
          aria-label="close modal button"
          color="inherit"
          onClick={() => dispatch(updateModalState())}
        >
           X
        </ClsButton>
          <TitleForm>Please edit your contact:</TitleForm>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              maxLength={30}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel >
            Number
            <FormInput
             
              type="tel"
              name="number"
              value={number}
              maxLength={17}
              onChange={handleNumberChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits, contain spaces, dashes, parentheses and start with +"
              required
            />
          </FormLabel>
          <FormButton type="submit">
            {isLoading ? 'Saving...' : 'Save contact'}
          </FormButton>
        </FormContact>
      </Modal>
    </Overlay>,
    modalRoot
  );
}
ModalFormEditContact.propTypes = {
  openedContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

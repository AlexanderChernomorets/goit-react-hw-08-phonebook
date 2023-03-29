import { MdDelete } from 'react-icons/md';
import { BsPencilFill } from 'react-icons/bs';
import { ContItem, ContName, ContNum, DelButton } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { TailSpin } from 'react-loader-spinner';
import { ModalCorrection } from 'components/ModalCorrection/ModalCorrection';

export const ContactItem = ({ data: { number, id, name } }) => {
const [icon, setIcon ] = useState(null);
const [loading, setLoading] = useState(false);
const [isModal, setIsModal] = useState(false);
const dispatch = useDispatch();

useEffect(() => {
  setIcon(name[0].toUpperCase())
}, [name]);

const onDeleteContact = contactId => {
  setLoading(true);
  dispatch(deleteContact(contactId));
  setLoading(false);
}

  return (
    <>
      <ContItem>
        <span>{icon}</span>
        <ContName>{name}: </ContName>
        <ContNum>{number}</ContNum>
        <DelButton
          type="button"
          onClick={() => onDeleteContact(id)}
          dispatch={loading}
        >
          Delete
          {loading ? (
            <TailSpin width={20} height={20} />
          ) : (
            <MdDelete size={20} />
          )}
        </DelButton>
        <button
        type='button' onClick={() => setIsModal(true)}>
          <BsPencilFill size={20} />
        </button>

        {isModal && (
          <ModalCorrection 
          name={name}
          number={number}
          id={id}
          close={setIsModal}
          />
        )}
      </ContItem>
    </>
  );
};


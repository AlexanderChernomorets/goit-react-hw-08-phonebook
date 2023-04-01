import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateFilter } from 'redux/filter/filterActions';
import { useRemoveContactMutation } from 'redux/contacts';
import { Wrapper } from './ContactItem.styled';
import {
  setOpenedContact,
  updateModalState,
} from '../../redux/modal/modalActions';
import {
  ContItem,
  ContName,
  ContNum,
  DelButton,
} from 'components/ContactsList/ContactList.styled';

export default function ContactItem({ contactData }) {
  const [updateContactsByRemove, { isLoading }] = useRemoveContactMutation();
  const dispatch = useDispatch();

  const onContactEdit = contact => {
    dispatch(setOpenedContact(contact));
    dispatch(updateModalState());
  };

  const onContactDelete = id => {
    updateContactsByRemove(id);
    dispatch(updateFilter(''));
  };

  return (
    <ContItem>
      <ContName>{contactData.name}:</ContName>
      <ContNum>{contactData.number}</ContNum>

      <Wrapper>
        <DelButton
          color="inherit"
          aria-label="edit"
          size="large"
          type="button"
          onClick={() => onContactEdit(contactData)}
        >
          🖊
        </DelButton>

        {isLoading ? (
          <DelButton loading variant="outlined">
            Submit
          </DelButton>
        ) : (
          <DelButton
            color="inherit"
            aria-label="delete"
            size="large"
            type="button"
            onClick={() => onContactDelete(contactData.id)}
          >
            ❌
          </DelButton>
        )}
      </Wrapper>
    </ContItem>
  );
}

ContactItem.propTypes = {
  contactData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

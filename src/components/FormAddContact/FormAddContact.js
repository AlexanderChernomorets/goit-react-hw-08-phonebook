import useFormFields from 'hook/useFormFields';
import React from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contacts';

import { FormButton, FormContact, FormInput, FormLabel, TitleForm } from './FormAddContact.styled';

export default function FormAddContact() {
  const {
    state: name,
    setState: setName,
    handleChange: handleNameChange,
  } = useFormFields('');
  const {
    state: number,
    setState: setNumber,
    handleChange: handleNumberChange,
  } = useFormFields('');

  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactData = { name, number };
    const nameToAdd = contactData.name;

    if (data?.some(contact => contact.name === nameToAdd)) {
      alert(`${nameToAdd} is already in your contacts`);
      return;
    }

    addContact(contactData);
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      <TitleForm>Add new contact</TitleForm>
      <FormLabel >
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          maxLength={30}
          placeholder="🙍‍♂️ Enter contact name"
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
          placeholder="📞 Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits, contain spaces, dashes, parentheses and start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">
        {isLoading ? 'Addition...' : 'Add contact'}
      </FormButton>
    </FormContact>
  );
}

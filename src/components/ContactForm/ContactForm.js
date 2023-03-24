import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue, getItem, newContacts } from 'redux/itemsContacts';
import { nanoid } from 'nanoid';
import {
  Title,
  FormContact,
  FormLabel,
  FormButton,
  FormInput,
} from './ContactForm.styled';

const initialState = {
  name: '',
  number: '',
};

function ContactForm() {
  const [{ name, number }, setState] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);

  function onChange(e) {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const newCont = {
      id: nanoid(10),
      name,
      number,
    };

    if (contacts.some(x => x.name === newCont.name)) {
      alert(`${newCont.name} is already in contacts`);
      return;
    }

    dispatch(newContacts(newCont));
    dispatch(filterValue(''));

    setState({ ...initialState });
  }

  return (
    <FormContact onSubmit={onSubmit}>
      <Title>Phonebook</Title>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          placeholder="🙍‍♂️ Enter contact name"
          onChange={onChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          placeholder="📞 Enter phone number"
          onChange={onChange}
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormContact>
  );
}

export default ContactForm;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';

export const FormNewContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    setName('');
    setNumber('');
  }, [contacts]);

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(newContact({ name, number }));
  };

  return (
    <div>
      <form autoComplete="on" onSubmit={e => onSubmit(e)}>
        <label htmlFor="">
          Name
          <input
            type={'text'}
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name..."
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type={'tel'}
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+38(099)999-99-99"
            required
          />
        </label>
        <button type="submit" value={'add contact'}></button>
      </form>
    </div>
  );
};

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getFilter, getItem } from 'redux/itemsContacts';
import {
  ContactsSection,
  ContList,
  ContTitle,
  ContItem,
  ContName,
  ContNum,
  DelButton,
} from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);

  function contactsFillet() {
    if (filter === '') {
      return false;
    }

    return contacts.filter(x => x.name.toLowerCase().includes(filter));
  }

  const filt = contactsFillet();

  const list = filt ? filt : contacts;
  return (
    <ContactsSection>
      <ContTitle>Contacts</ContTitle>
      <ContList>
        {list.map(({ name, number, id }) => (
          <ContItem key={id}>
            <ContName>{name}: </ContName>
            <ContNum>{number}</ContNum>
            <DelButton
              type="button"
              name={id}
              onClick={e => dispatch(deleteContacts(e.target.name))}
            >
              Delete
            </DelButton>
          </ContItem>
        ))}
      </ContList>
    </ContactsSection>
  );
}

export default ContactList;

// ContactList.propTypes = {
//   onRemove: PropTypes.func.isRequired,
//   findContact: PropTypes.func.isRequired,
// };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

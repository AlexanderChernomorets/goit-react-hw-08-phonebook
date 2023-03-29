import { ErrorContactList } from 'components/ErrorContactList/ErrorContactList';
import Loader from 'components/Loader/Loader';
import { useContactList } from 'hook/useContactList';
import { ContactItem } from './ContactItem';
import { ContactsSection, ContList, ContTitle } from './ContactList.styled';

function ContactList() {
  const { renderContacts, contacts, isLoadingContacts } = useContactList();

  return (
    <ContactsSection>
      <ContTitle>Contact List</ContTitle>

      {isLoadingContacts ? (
        <Loader />
      ) : contacts.length === 0 ? (
        <ErrorContactList />
      ) : (
        <ContList>
          {renderContacts.map(x => (
            <ContactItem key={x.id} data={x} />
          ))}
        </ContList>
      )}
    </ContactsSection>
  );
}

export default ContactList;

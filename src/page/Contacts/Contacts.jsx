import ContactList from 'components/ContactList/ContactList';
import { FormNewContacts } from 'components/FormNewContacts/FormNewContacts';
import { SearchContacts } from 'components/SearchContacts/SearchContacts';

export default function Contacts() {
  return (
    <div>
      <h1>Your Phone Book</h1>
      <SearchContacts />
      <div>
        <FormNewContacts />
        <ContactList />
      </div>
    </div>
  );
}

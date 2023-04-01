import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { filterSelector } from 'redux/filter/filterSelector';
import { updateFilter } from 'redux/filter/filterActions';
import { useGetContactsQuery } from 'redux/contacts';
import { ContactsSection, ContList, ContTitle } from './ContactList.styled';

export default function ContactsList() {
  const { data } = useGetContactsQuery('', {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const filterContacts = () => {
    const normalizedString = filter?.toLowerCase();

    return filter
      ? data?.filter(contact =>
          contact.name.toLowerCase().includes(normalizedString)
        )
      : data;
  };

  const filteredContacts = filterContacts();

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(updateFilter(''));
    }
  }, [data, dispatch]);

  return (
    <ContactsSection>
      <ContTitle>Contacts</ContTitle>
      <ContList>
        {filteredContacts?.map(filteredContact => (
          <ContactItem key={filteredContact.id} contactData={filteredContact} />
        ))}
      </ContList>
    </ContactsSection>
  );
}

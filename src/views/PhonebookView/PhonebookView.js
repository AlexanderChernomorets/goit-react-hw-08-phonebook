import { Watch } from 'react-loader-spinner';
import Section from 'components/Section';
import FormAddContact from 'components/FormAddContact';
import ContactsList from 'components/ContactsList';
import { useGetContactsQuery } from 'redux/contacts';
import FilterInput from 'components/FilterInput';

export default function PhonebookView() {
  const { isFetching } = useGetContactsQuery();

  return (
    <>
      <Section isHidden={false}>
        <FormAddContact />
      </Section>

      <Section title="Contacts" isHidden={false}>
        {isFetching ? (
          <Watch
            height={48}
            width={48}
            radius={45}
            color="#1a75cfb3"
            wrapperClass="loader"
            ariaLabel="loading-indicator"
          />
        ) : (
          <FilterInput />
        )}

        <ContactsList />
      </Section>
    </>
  );
}

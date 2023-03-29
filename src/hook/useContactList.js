import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { contactsListServer } from 'redux/contacts/contactsOperations';
import {
  getContacts,
  getError,
  getIsLoadingContacts,
} from 'redux/contacts/contactsSelector';

export const useContactList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('search') ?? '';
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const isLoadingContacts = useSelector(getIsLoadingContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(contactsListServer());
    if (error) {
      navigate('/error', { replace: true });
    }
  }, [dispatch, error, navigate]);

  const renderContacts = filter
    ? contacts.filter(x => x.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return {
    renderContacts,
    contacts,
    isLoadingContacts,
  };
};

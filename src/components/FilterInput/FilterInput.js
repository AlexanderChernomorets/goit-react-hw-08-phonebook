import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filterActions';
import { filterSelector } from 'redux/filter/filterSelector';
import { useGetContactsQuery } from 'redux/contacts';
import { FilterSection, Text } from './FilterInput.styled';
import {
  FormInput,
  FormLabel,
} from 'components/FormAddContact/FormAddContact.styled';

export default function FilterInput() {
  const { data } = useGetContactsQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onInputFind = evt => {
    const stringForFilter = evt.target.value;
    dispatch(updateFilter(stringForFilter));
  };

  return (
    <>
    {data?.length ? (
      <FilterSection>
        <FormLabel>
          Find contact by name
          <FormInput
            type="text"
            name="filter"
            value={filter}
            autoFocus={true}
            onChange={onInputFind}
          />
        </FormLabel>
      </FilterSection>
    ) : (
      <Text>You haven't added any contact yet...</Text>
    )}
    </> 
  );

}



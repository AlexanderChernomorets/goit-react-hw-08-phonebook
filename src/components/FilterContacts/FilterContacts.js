import { useDispatch, useSelector } from 'react-redux';
import { filterValue, getFilter } from 'redux/itemsContacts';
import {
  FilterSection,
  FilterTitle,
  FilterInput,
} from './filterContact.styled';

function FilterContact() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <FilterSection>
      <FilterTitle>
        Find contacts by name
        <FilterInput
          type="filter"
          name="filter"
          value={filter}
          placeholder="🔎 Enter name for Search"
          onChange={e => dispatch(filterValue(e.target.value.toLowerCase()))}
        />
      </FilterTitle>
    </FilterSection>
  );
}
export default FilterContact;

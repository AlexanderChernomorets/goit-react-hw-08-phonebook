import { useSearchContacts } from 'hook/useSearchContacts';

export const SearchContacts = () => {
  const { filter, change } = useSearchContacts();
  return (
    <div>
      <label htmlFor="">
        <input
          type="text"
          name="search"
          value={filter}
          placeholder={'Find contacts by name'}
          onChange={e => change(e)}
        />
      </label>
    </div>
  );
};

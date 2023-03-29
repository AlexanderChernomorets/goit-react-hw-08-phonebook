import { useSelector } from 'react-redux';
import { getErrorMessage } from 'redux/contacts/contactsSelector';
import { BiErrorAlt } from 'react-icons/bi';

export default function ErrorMessage() {
  const message = useSelector(getErrorMessage);

  return (
    <div>
      <BiErrorAlt color="red" size={40} />
      <div>
        <p>Server connection error.</p>
        {message && (
          <p>
            <span>Error status:</span> {message}
          </p>
        )}
      </div>
    </div>
  );
}

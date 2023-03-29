import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/authOperations';
import { getUserName } from 'redux/user/authSelector';
import userIcon from 'img/user-icon.png';

export const UserMenu = () => {
  const user = useSelector(getUserName);

  const dispatch = useDispatch();
  const spreadOut = async () => {
    await dispatch(logOut());
    window.localStorage.removeItem('persist:auth');
  };

  return (
    <div>
      <div>
        <img src={userIcon} alt="user icon" />
        <p>
          Welcome <b>{user ? user : 'XXX'}</b>
        </p>
      </div>
      <button onClick={spreadOut}>Logout</button>
    </div>
  );
};

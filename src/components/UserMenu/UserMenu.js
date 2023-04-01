import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { LogOutBtn, Wrapper } from './UserMenu.styled';
import { Text } from 'components/FilterInput/FilterInput.styled';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome, {userName}!</Text>
      <LogOutBtn
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </LogOutBtn>
    </Wrapper>
  );
}

import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import logo from '../../images/pb.png';
import { Box, HeaderBox, Title } from './Header.styled';
export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <HeaderBox>
      {isLoggedIn ? (
        <>
          <Box>
            <img src={logo} alt="phonebook logo" width={35} height={35} />
            <Title>Phonebook</Title>
          </Box>

          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </HeaderBox>
  );
}

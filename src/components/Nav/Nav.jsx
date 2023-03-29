import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/user/authSelector';
import { NavBox, NavigLink, NavList } from './Nav.styled';

export const Nav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <NavBox>
      <NavList>
        <li>
          <NavigLink to={'/'}>Home</NavigLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavigLink to={'/contacts'}>List of Contacts</NavigLink>
          </li>
        )}
      </NavList>
      {!isLoggedIn ? (
        <NavList>
          <li>
            <NavigLink to={'/sign-in'}>Sign In</NavigLink>
          </li>
          <li>
            <NavigLink to={'/sign-up'}>Sign Up</NavigLink>
          </li>
        </NavList>
      ) : (
        <UserMenu />
      )}
    </NavBox>
  );
};

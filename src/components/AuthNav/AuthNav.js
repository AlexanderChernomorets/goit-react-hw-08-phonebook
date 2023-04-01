import { Link, NavBox, NavigLink, NavList } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <NavBox>
      <NavList>
        <Link>
          <NavigLink to="/register">Registration</NavigLink>
        </Link>
        <Link>
          <NavigLink
            to="/login"
            className={({ isActive }) => {
              return isActive ? 'activeNavLink' : 'navLink';
            }}
          >
            Log In
          </NavigLink>
        </Link>
      </NavList>
    </NavBox>
  );
}

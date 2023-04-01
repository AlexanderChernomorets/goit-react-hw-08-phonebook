import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavigLink = styled(NavLink)`
    color: rgba(0,0,0,.8);
    font-family: Georgia,Times New Roman,Times,serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    &.active {
    color: teal;
  }
  &:hover,
  &:focus {
    color: teal;
  }
`

export const Link = styled.li`
  display: flex;
  align-items: center;
`;
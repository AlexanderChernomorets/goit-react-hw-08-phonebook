import { Nav } from 'components/Nav/Nav';
import { HeaderBox } from './Header.styled';

export default function Header() {
  return (
    <HeaderBox>
      <div>
        <Nav />
      </div>
    </HeaderBox>
  );
}

import styled from 'styled-components';
import { palette } from '../theme';

const Wrapper = styled.nav`
  background-color: ${palette.primary.main};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;

  display: flex;
  justify-content: center;
`;

const NavButton = styled.button`
  border: none;
  border-radius: none;

  background-color: #fff;
  height: 2px;
  width: 4.5rem;
  margin-top: 4rem;

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
  }

  &::before {
    transform: translateY(-1.5rem);
  }
  &::after {
    transform: translateY(1.3rem);
  }
`;

export default function Sidebar() {
  return (
    <Wrapper>
      <NavButton />
    </Wrapper>
  );
}

import styled from 'styled-components';
import { palette, breakpoints } from '../theme';

const Wrapper = styled.nav`
  background-color: ${palette.primary.main};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;

  @media only screen and (max-width: ${breakpoints.lg}) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-content: flex-end;
    align-items: center;
  }

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

  @media only screen and (max-width: ${breakpoints.lg}) {
    margin-top: 0;
    margin-right: 3rem;

    &::before {
    transform: translateY(-1.2rem);
    }
    &::after {
      transform: translateY(1rem);
    }
`;

export default function Sidebar() {
  return (
    <Wrapper>
      <NavButton />
    </Wrapper>
  );
}

import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.palette.primary.main};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
`;

export default function Sidebar() {
  return <Wrapper>Sidebar</Wrapper>
}


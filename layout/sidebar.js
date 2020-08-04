import styled from 'styled-components';
import { palette } from '../theme';

const Wrapper = styled.nav`
  background-color: ${palette.primary.main};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
`;

export default function Sidebar() {
  return <Wrapper>Sidebar</Wrapper>
}


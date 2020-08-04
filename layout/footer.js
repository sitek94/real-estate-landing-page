import styled from 'styled-components';
import { palette } from '../theme';

const Wrapper = styled.footer`
  background-color: ${palette.secondary.main};
  grid-column: full-start / full-end;
`;

export default function Footer() {
  return <Wrapper>Footer</Wrapper>
}


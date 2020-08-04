import styled from 'styled-components';
import { palette } from '../theme';

const Wrapper = styled.header`
  background-color: ${palette.grey.dark2};
  grid-column: full-start / col-end 6;
`

export default function Header() {
  return <Wrapper>Homes</Wrapper>
}
import styled from 'styled-components';
import { palette } from '../theme';

const Wrapper = styled.section`
  background-color: ${palette.grey.dark2};
  grid-column: center-start / center-end;
`

export default function Homes() {
  return <Wrapper>Homes</Wrapper>
}
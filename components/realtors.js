import styled from 'styled-components';
import { palette } from '../theme';

const Wrapper = styled.div`
  background-color: ${palette.primary.main};
  grid-column: col-start 7 / full-end;
`

export default function Realtors() {
  return <Wrapper>Realtors</Wrapper>
}
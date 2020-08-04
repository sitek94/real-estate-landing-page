import styled from 'styled-components';
import { palette } from '../theme';

const Wrapper = styled.section`
  background-color: ${palette.grey.dark1};
  grid-column: full-start / full-end;
`

export default function Gallery() {
  return <Wrapper>Gallery</Wrapper>
}
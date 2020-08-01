import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.grey.dark1};
  grid-column: full-start / full-end;
`

export default function Gallery() {
  return <Wrapper>Gallery</Wrapper>
}
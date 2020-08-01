import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.grey.dark2};
  grid-column: center-start / center-end;
`

export default function Homes() {
  return <Wrapper>Homes</Wrapper>
}
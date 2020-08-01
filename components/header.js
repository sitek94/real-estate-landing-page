import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.palette.grey.dark2};
  grid-column: full-start / col-end 6;
`

export default function Header() {
  return <Wrapper>Homes</Wrapper>
}
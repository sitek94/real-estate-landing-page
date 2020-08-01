import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  grid-column: col-start 7 / full-end;
`

export default function Realtors() {
  return <Wrapper>Realtors</Wrapper>
}
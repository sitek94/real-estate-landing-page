import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  grid-column: full-start / full-end;
`;

export default function Footer() {
  return <Wrapper>Footer</Wrapper>
}


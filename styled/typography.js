import styled from 'styled-components';

const heading = ({ theme }) => `
  font-family: ${theme.typography.displayFontFamily};
  font-weight: 400;
`;

export const H1 = styled.h1`
  ${heading};

`;
export const H2 = styled.h2`
  ${heading};

`;
export const H3 = styled.h3`
  ${heading};

`;
export const H4 = styled.h4`
  ${heading};
  font-size: 1.9rem;
  color: ${props => props.color === 'light' ? props.theme.palette.grey.light1 : props.theme.palette.grey.dark1};
`;

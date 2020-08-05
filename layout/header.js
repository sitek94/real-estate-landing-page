import styled from 'styled-components';
import { palette } from '../theme';
import { H1, H3 } from '../components/typography';
import Button from '../components/button';

const Wrapper = styled.header`
  background-color: ${palette.grey.dark2};
  grid-column: full-start / col-end 6;
  background-image: linear-gradient(
    ${palette.secondary.main + 'EE'},
    ${palette.secondary.main + 'EE'}
  ),
  url(../images/hero.jpeg);
  background-size: cover;
  background-position: center;
  padding: 8rem;
  padding-top: 4rem;

  display: grid;
  grid-template-rows: 1fr min-content 6rem 1fr;
  grid-template-columns: max-content;
  row-gap: 1.5rem;
  justify-content: center;
`;

const LogoImg = styled.img`
  height: 3rem;
  justify-self: center;
`;

const HeaderButton = styled(Button)`
  align-self: start;
  justify-self: start;
`

const SeenOnText = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  align-items: center;

  font-size: 1.6rem;
  color: ${palette.grey.light2};

  &::before,
  &::after {
    content: "";
    height: 1px;
    display: block;
    background-color: currentColor;
  }
`;
const SeenOnLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  justify-items: center;
`;
const SeenOnLogoImg = styled.img`
  height: 2.5rem;
  filter: brightness(70%);
`;

export default function Header() {
  return (
    <Wrapper>
      <LogoImg src="images/logo.png" alt="Nexter logo" />
      <H3>Your own home</H3>
      <H1>The ultimate personal freedom</H1>
      <HeaderButton>View our properties</HeaderButton>
      <SeenOnText>As seen on</SeenOnText>
      <SeenOnLogos>
        <SeenOnLogoImg src="images/logo-bbc.png" alt="Seen on logo" />
        <SeenOnLogoImg src="images/logo-forbes.png" alt="Seen on logo" />
        <SeenOnLogoImg src="images/logo-techcrunch.png" alt="Seen on logo" />
        <SeenOnLogoImg src="images/logo-bi.png" alt="Seen on logo" />
      </SeenOnLogos>
    </Wrapper>
  );
}

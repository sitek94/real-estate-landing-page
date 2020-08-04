import styled from 'styled-components';
import { H4 } from '../styled/typography';
import { palette } from '../theme';

// DESCRIPTION
const Description = styled.p`
  font-size: 1.7rem;
`;

// ICON
const Icon = styled.svg`
  fill: ${palette.primary.main};
  width: 4.5rem;
  height: 4.5rem;
  grid-row: 1 / span 2;
  transform: translateY(-1rem);
`;

// FEATURE 
const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  row-gap: 1.5rem;
  column-gap: 2.5rem;
`;

function Feature({ title, description, src }) {
  return (
    <FeatureWrapper>
      <Icon>
        <use xlinkHref={src} />
      </Icon>
      <H4 color="dark">{title}</H4>
      <Description>{description}</Description>
    </FeatureWrapper>
  );
}

// FEATURES
const Wrapper = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;

  display: grid;
  gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  align-items: start;
`;

export default function Features({ features }) {
  return (
    <Wrapper>
      {features.map(feature => (
        <Feature key={feature.title} {...feature} />
      ))}
    </Wrapper>
  );
}

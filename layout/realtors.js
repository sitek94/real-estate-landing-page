import styled from 'styled-components';
import { palette } from '../theme';
import { H3, H4 } from '../components/typography';

const Wrapper = styled.div`
  background-color: ${palette.secondary.main};
  grid-column: col-start 7 / full-end;
  padding: 3rem;

  display: grid;
  row-gap: 2rem;
  align-content: center;
  justify-content: center;
  justify-items: center;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  column-gap: 2rem;
  row-gap: 5vh;
  align-items: center;
`;

const Img = styled.img`
  width: 7rem;
  border-radius: 50%;
  display: block;
`;

const Details = styled.div``;
const HousesSold = styled.p`
  text-transform: uppercase;
  color: ${palette.grey.light2};
  margin-top: -3px;

`;

export default function Realtors() {
  return (
    <Wrapper>
      <H3>Top 3 Realtors</H3>
      <List>
        {realtors.map((realtor, i) => (
          <>
            <Img
              src={`images/realtor-${i + 1}.jpeg`}
              alt={`${realtor.name} photo`}
            />
            <Details>
              <H4 color="light">{realtor.name}</H4>
              <HousesSold>{realtor.housesSold} houses sold</HousesSold>
            </Details>
          </>
        ))}
      </List>
    </Wrapper>
  );
}

const realtors = [
  { name: 'Erik Feiman', housesSold: 245 },
  { name: 'Monica Bellucci', housesSold: 211 },
  { name: 'Anthony Hopkins', housesSold: 194 },
];

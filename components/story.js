import styled from 'styled-components';

/* const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.palette.grey.dark2};
  grid-column: full-start / full-end;
` */

const LeftColumn = styled.div`
  background-color: cornflowerblue;
  grid-column: full-start / col-end 4;
`;

const RightColumn = styled.div`
  background-color: crimson;
  grid-column: col-start 5 / full-end;
`;

export default function Story() {
  return (
    <>
      <LeftColumn />
      <RightColumn />
    </>
  )
}
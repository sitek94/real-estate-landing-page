import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
  grid-template-columns: 
      [sidebar-start] 8rem 
      [sidebar-end full-start] minmax(6rem, 1fr)
      [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] 
      minmax(6rem, 1fr) [full-end];
`

export default function Layout({ children }) {
  return <Container>{children}</Container>
}
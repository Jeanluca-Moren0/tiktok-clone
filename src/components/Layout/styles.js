import styled from 'styled-components';

const Container = styled.div`
  width: 100;


  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding: 70px;
`

const SidebarContainer = styled.div`
  flex: 0 0 250px;

  @media(max-width: 768px){
    display: none;
    flex: 0;
  
  }


`

const ContentContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 3rem 1rem;

  display: flex;

  max-width: 1194px
  }


`


export {Container, SidebarContainer, ContentContainer}
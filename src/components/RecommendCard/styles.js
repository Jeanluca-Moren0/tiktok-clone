import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.75rem;
  padding: 0 1rem;

  
  margin-top: 0.5rem;





  
`;
const Avatar = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  
  margin-right: 1rem;

  object-fit: cover;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    font-weight: 600;
    font-size: 1em;

    :hover {
      text-decoration: underline;
    }
  }

  > span {
    font-weight: 400;
    font-size: 0.75em;

    opacity: .7;
  }
`;

export {Container, Avatar, Info} 
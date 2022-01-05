import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 0;
  width: 250px;
  padding-top: 26px;
`;

const MenuItem =  styled.div`
  cursor: pointer;
  color: var(--black);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0 1rem;
  box-sizing: border-box;
  height: 60px;

  :hover{
    opacity: .7;
  }

  > span {
    font-weight: ${props => props.active ? '700' : '400'};
    margin-left: 1rem;
    font-size: 1.5rem;
    line-height: 3rem;
    color: ${props => props.active ? 'var(--pink)' : 'var(--black)'}
  }
  
  > img { 
    width: 40px;
    height: 40px;
  }
`;

const Following = styled.div`
  width: 100%;
  padding: 20px 0 ;
  border-top: 1px solid var(--black-border);
  border-bottom: 1px solid var(--black-border);
`;
const FollowingHeader = styled.div`
  font-weight: 400;
  font-size: 1em;
  line-height: 1.5rem;
  color: #aab;
  height: 0.5rem;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
`;
const InfoContainer  = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1.5rem;
  width: 240px;
  color: #aab;
`;
const Links= styled.div`
  margin-bottom: ${props => props.margin ? '8px' : '0px'};

  > a {
    cursor: pointer;
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 0.75em;
    line-height: 0.5em;
    color: #aab;
    
  }
`;


export {Container, MenuItem, Following, FollowingHeader, InfoContainer, Links}
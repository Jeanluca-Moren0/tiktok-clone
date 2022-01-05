import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 16px;
  margin-bottom: 8px;
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;

  
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    font-weight: 600;
    font-size: 17px;
    :hover {
      text-decoration: underline;
    }
  }
  > span {
    font-weight: 400;
    font-size: 14px;
    color: rgba(22, 24, 35, 0.5);
  }
`;

export {Container, Avatar, Info} 
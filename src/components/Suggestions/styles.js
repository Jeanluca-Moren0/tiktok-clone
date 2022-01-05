import styled from 'styled-components';
import { ArrowForwardIos } from 'styled-icons/material';

const Container = styled.div`
  flex: 0 0 330px;
  width: 330px;
  margin-left: 24px;
@media (max-width: 1200px) {
  display: none;
}
`;
const IconsContainer = styled.div`
  margin-bottom: 39px;
  text-align: left;
`;
const Icons = styled.img`
  width: 31px;
  height: 31px;
  margin-right: 15px;
`;
const BoxContainer = styled.div`
  position: relative;
  border: 1px solid rgba(22, 24, 35, 0.12);
  border-radius: 8px;
  height: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;
const BoxHeader = styled.div`
  padding: 24px 16px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex: 0 0 auto;
> span {
  font-weight: 700;
  line-height: 1;
  font-size: 24px;
}
`;
const ButtonContainer = styled.div`
  width: 95px;
  height: 28px;
  font-weight: 600;
  font-size: 16px;
  margin-left: auto;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoName = styled.a`
  font-weight: 600;
  font-size: 17px;
  :hover {
    text-decoration: underline;
  }
`;
const InfoUserName = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgba(22, 24, 35, 0.5);
`;
const ItemContainer = styled.div`
  height: calc(100% - 72px);
  overflow: auto;
  cursor: pointer;
`;
const ArrowIcon = styled(ArrowForwardIos)`
  margin-left: auto;
  height: 20px;
  width: 14px;
`;
const DownloadImage = styled.img`
  width: 170px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 12px;
`;

export {
  Container, 
  IconsContainer,
  Icons,
  BoxContainer,
  BoxHeader,
  ItemContainer, 
  ButtonContainer,
  Item, 
  ArrowIcon,
  DownloadImage
  }
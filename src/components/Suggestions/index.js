import {
  Container, 
  IconsContainer,
  Icons,
  BoxContainer,
  BoxHeader,
  ItemContainer, 
  Item,
  ButtonContainer,
  ArrowIcon,
  DownloadImage
  } from './styles'

import User from '../User';
import Button from '../Button';
import RecommendCard from '../RecommendCard';

const people = [
  {
    name: 'Neymar Jr',
    username: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    username: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    username: '@anitta',
    avatar:
      'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/anitta.jpeg',
  },
  {
    name: 'Isis Valverde',
    username: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    username: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    username: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    username: '@anitta',
    avatar:
      'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/anitta.jpeg',
  },
  {
    name: 'Isis Valverde',
    username: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    username: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    username: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    username: '@anitta',
    avatar:
      'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/anitta.jpeg',
  },
  {
    name: 'Isis Valverde',
    username: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    username: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    username: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    username: '@anitta',
    avatar:
      'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/anitta.jpeg',
  },
  {
    name: 'Isis Valverde',
    username: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
];

const items = [
  {
    title: 'Woah',
    views: '12.7M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/dd58c8fc85e343de916d19eed732e7db.jpeg',
  },
  {
    title: 'Dance Monkey',
    views: '7.4M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/acfc564d3a2a442cb8eb02f31b982a1f.jpeg',
  },
  {
    title: '#youhaveto',
    views: '2.5B views',
    avatar:
      'https://p16-va-default.akamaized.net/obj/musically-maliva-obj/05d86ea37c51ea4df101f968dee1501d',
  },
  {
    title: 'Can we Kiss Forever?',
    views: '8.7M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/3c7b5e07880b4d3a912ea60b926ca57c.jpeg',
  },
  {
    title: 'Woah',
    views: '12.7M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/dd58c8fc85e343de916d19eed732e7db.jpeg',
  },
  {
    title: 'Dance Monkey',
    views: '7.4M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/acfc564d3a2a442cb8eb02f31b982a1f.jpeg',
  },
  {
    title: '#youhaveto',
    views: '2.5B views',
    avatar:
      'https://p16-va-default.akamaized.net/obj/musically-maliva-obj/05d86ea37c51ea4df101f968dee1501d',
  },
  {
    title: 'Can we Kiss Forever?',
    views: '8.7M views',
    avatar:
      'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-i-0000/3c7b5e07880b4d3a912ea60b926ca57c.jpeg',
  },
];

function Suggestions() {
  return (
    <Container>
      <IconsContainer>
        <Icons src="/images/facebookIcon.svg"></Icons>
        <Icons src="/images/pinterestIcon.svg"></Icons>
        <Icons src="/images/twitterIcon.svg"></Icons>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas Sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((person,index) => (
            <Item key={index}>
              <User key={index} user={person}/>
              <ButtonContainer>
                <Button fontSize={16}>Seguir</Button>
              </ButtonContainer>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
        <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {items.map((item,index) => (
              <Item key={index}>
                <RecommendCard key={index} recommend={item}></RecommendCard>
                <ArrowIcon></ArrowIcon>
              </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src="/images/appstore.png"></DownloadImage>
      <DownloadImage src="/images/playstore.png"></DownloadImage>
      <DownloadImage src="/images/amazon.png"></DownloadImage>
    </Container>
    );
}

export default Suggestions;

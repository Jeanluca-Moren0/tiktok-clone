import {Container, MenuItem, Following, FollowingHeader, InfoContainer, Links} from './styles'
import User from '../User';

function Sidebar() {

  const year = new Date().getFullYear() 
  const users = [
    {
      name: 'Will Smith',
      username: 'willsmith',
      avatar: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSY2pGlF9O0Q9ByWyUv9eAzq_UdG9vcQQCuEbNS9O-akN10LbFez2L7D3b8HQVV'
    },
    {
      name: 'Cavani',
      username: 'cavani7',
      avatar: 'https://uploads.metropoles.com/wp-content/uploads/2020/12/17102133/Cavani-United-1024x683.jpg'
    }
  ]
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg"></img>
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg"></img>
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User user={users[0]}></User>
        <User user={users[1]}></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>TikTok © {year}</a>
        </Links>
      </InfoContainer>
    </Container>
    );
}

export default Sidebar;
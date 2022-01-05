
import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar} from './styles'

 function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="images/logoIcon.svg"/>
          <Logo src="images/logo.svg"/>
        </LogoContainer>
        <OptionsContainer>
          <Icon>
            <img src="/images/uploadIcon.svg"/>
          </Icon>
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/53027683?v=4" alt="Foto de perfil." />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
    );
}

export default Header;


import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  background: var(--white);
  border-bottom: 1px solid var(--black-border);
  z-index: 1000;
`

const Content = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`

const LogoContainer = styled.div`
  display: block;

`
const LogoIcon = styled.img`
  width: 30px;
`
const Logo = styled.img`
  width: 97px;
  margin-left: 4px;
  position: relative;
  top: -2px;
`
const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.div`
  width: 37px;
  height: 37px;
`
const Avatar = styled.div`
  flex: 0 0 40px;
  margin-left: 30px;
  position: relative;
  cursor: pointer;

  > img {
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    
    position: relative;
    overflow: hidden;
  }

`


export {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar
  }
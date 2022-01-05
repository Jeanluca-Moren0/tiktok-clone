import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  max-width: 600px;
  position: relative;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--black-border);
  margin-bottom: 1rem;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const PersonContainer = styled.div`
  display: flex;
`
const Avatar = styled.img`
  display: flex;
  justify-content: space-between;
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
  border-radius: 50%;
    
    
`
const Info  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`
const Author = styled.a`
  display: flex;
  font-size: 1em;
  line-height: 1.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  :hover{
    text-decoration: underline
  }

  > span {
    margin-top: 2px;
    margin-left: 0.25rem;
    font-weight: 400;
    font-size: 0.75em;
    color: var(--black);
  }
`
const Description = styled.div`
  display: flex;
  
`

const Song = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 0.25rem;

  a{
    font-weight: 600;
    cursor: pointer;
    :hover{
      text-decoration: underline
    }
  }

  img{
    width: 1rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  
`

const Tag = styled.div`
  cursor: pointer;
  font-weight: bold;
  margin-left: 0.25rem;
  font-size: 1em;
  :hover{
      text-decoration: underline
    }
`

const Content = styled.div`
  margin-left: 68px;
`

const ActionsContainer = styled.div`
  visibility: hidden;
  width: 40px;
  height: 40px;
  bottom: 16px;
  left: 8px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

const VideoContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: calc(0.56 * (400px + ((100vw - 768px) / 1152) * 100));
  margin-top: 1rem;
  :hover {
    ${ActionsContainer} {
      visibility: visible;
    }
  }
`

const Video = styled.video`
  max-width: 100%;
  border-radius: 8px;
`

const PlayerIcon = styled.img`
  width: 20px;
  height: 20px;
`


const Actions = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-top: 8px;

`
const Action = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  margin-right: 24px;
  cursor: pointer;

  img{
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`

const ButtonContainer = styled.div`
  width: 128px;
  height: 28px;
  font-weight: 600;
  font-size: 16px;
`








export {
  Container, 
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Tag,
  ButtonContainer,
  Content,
  Song,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayerIcon,
  Actions,
  Action
};
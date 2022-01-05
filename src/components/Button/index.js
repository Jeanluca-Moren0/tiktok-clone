import styled from "styled-components";


export default styled.button`
  width: 100%;
  font-size: ${props => props.fontSize != null ? `${props.fontSize}px` : '18px'};
  font-weight: 700;
  height: 100%;
  
  background: ${props => props.outlined ? 'var(--white)' : 'var(--pink)'};
  border: ${props => props.outlined ? '1px solid var(--pink)' : 'none'};
  color: ${props => props.outlined ? 'var(--pink)' : 'var'};
  cursor: pointer;

  :hover{
    filter: brightness(1.3);
  }
`


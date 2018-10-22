import React from 'react';
import styled from 'styled-components'
//Variables import
import { coralColor } from '../utils';

const LogoDiv = styled.div`
display: flex;
color: white;
padding: .5% 2%;
background-color: ${coralColor};
position: absolute;
left: 50%;
text-align: center;
transform: translateX(-50%);
font-family: 'Amatic SC', cursive;
z-index: 5;
box-sizing: border-box;
height: 3.5rem;
align-items: center;
justify-content: center;
width: 100%;

@media (max-width: 700px) {
  border-radius: 0;
  margin-top: 0;
}

& h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 2.5rem;
}
`

const Logo = () => {

  return (
    <LogoDiv>
      <h1 aria-label="logotype">
        Paris Highlights
          </h1>
    </LogoDiv>
  );
}

export default Logo;
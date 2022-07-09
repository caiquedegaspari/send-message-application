import styled, { createGlobalStyle } from 'styled-components'
import image from './assets/map.png'
import footerRedCartoon from './assets/footerRedCartoon.png'
import footerGreenCartoon from './assets/footerGreenCartoon.png'
import footerYellowCartoon from './assets/footerYellowCartoon.png'
import yellowCartoonMain from './assets/yellowCartoonMain.png'
import redCartoonMain from './assets/redCartoonMain.png'
import yellowCartoonMain2 from './assets/yellowCartoonMain2.png'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
    background-image: url(${yellowCartoonMain}), url(${yellowCartoonMain2}), url(${redCartoonMain}), url(${image});
    background-repeat: no-repeat;
    background-size: fit-content, 30%;
    background-position: top left, bottom 35% right 50%,bottom right 40%, top right;
    @media (max-width: 600px) {
      background-image: url(${yellowCartoonMain}), url(${yellowCartoonMain2}), url(${redCartoonMain}), url(${image});
      background-position: top left, bottom left,bottom left -35%, bottom left;
    }
  }
`

export const CentralizedContainer = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10%;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`

export const StyledText = styled.text`
  margin: 15px 0;
  font-size: 40px;
  color: #3e3e3e;
`

export const Footer = styled.div`
  width: 100%;
  height: 200px;
  background: #fafafa;
  border-top: 1px solid #D8D8D8;
  left: 0%
  bottom: 0%;
  position: absolute;
  background-image: url(${footerRedCartoon}), url(${footerGreenCartoon}), url(${footerYellowCartoon});
  background-repeat: no-repeat;
  background-size: fit;
  background-position: top left, top right 100px, bottom right;
  
  
  display:flex;
  align-items: center;
  div {
    margin-left: 20%;
    img {
      margin: 10px 20px;
      transition: 300ms;
      :hover {
        cursor: pointer;
        transform: scale(1.70);
      }
    }
  }
  @media (max-width: 600px) {
   height: 100px;
   justify-content: center;
   div {
    margin-left: 0;
   }
  }
`

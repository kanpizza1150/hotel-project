import styled from 'styled-components'
import homeImg from '../Assets/img/homeBcg.jpeg'
import { setFlex, setBackground } from './Styles'
export const Hero = styled.header`
  min-height: 100vh;
  ${(props) => setBackground(props.img || homeImg)}
  ${setFlex()}
`

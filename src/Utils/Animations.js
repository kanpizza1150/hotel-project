import { keyframes, css } from 'styled-components'

export const fadeIn = (start, point, end, time, timingFunc) => {
  const animation = keyframes`
    0%{
        opacity:0;
        transform: translateY(${start}%);
    }
    50%{
        opacity:0.5;
        transform: translateY(${point}%);
    }100%{
        opacity:1;
        transform: translateY(${end}%);
    }
    `
  return css`
    animation: ${animation} ${time} ${timingFunc};
  `
}

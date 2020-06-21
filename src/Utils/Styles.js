import { css } from 'styled-components'
export const setColor = {
  primaryColor: '#af9a7d',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGrey: '#ececec',
  lightGrey: '#f7f7f7',
}

export const setFont = {
  main: `font-family: 'Lato', sans-serif;`,
  slanted: `font-family: 'Mansalva';`,
}

export const setFlex = (x = 'center', y = 'center') => `
    display:flex;
    align-items:${x};
    justify-content:${y};
`

export const setShadow = {
  light: 'box-shadow:3px 3px 5px 0px rgba(0,0,0,0.75);',
  dark: 'box-shadow:6px 6px 5px 0px rgba(0,0,0,0.75);',
  darkest: 'box-shadow:10px 10px 5px 0px rgba(0,0,0,0.75);',
}
export const setBackground = (img, color = 'rgba(0,0,0,0)') =>
  `background: linear-gradient(${color}, ${color}),url(${img}) center/cover fixed no-repeat;`

export const setBorder = (
  width = 2,
  style = 'solid',
  color = 'rgba(0,0,0,0)'
) => `border:${width}px ${style} ${color}`

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const setTransition = (
  property = 'all',
  time = '0.2s',
  timing = 'ease-in-out'
) => `transition: ${property} ${time} ${timing}`

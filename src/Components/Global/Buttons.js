import React from 'react'
import styled from 'styled-components'
import { setColor, setBorder, setTransition } from '../../Utils/Styles'

const Button = ({ className, children }) => {
  return <button className={className}>{children}</button>
}
const primaryStyled = `padding: 1.7rem 3.6rem;
  width: fit-content;
  margin: 2em auto auto;
  cursor: pointer;
  text-transform: capitalize;
  display: inline-block;
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
  color: ${setColor.mainWhite};
  background-color: ${setColor.primaryColor};
  outline: none;
  text-decoration: none;
  ${setBorder(2, 'solid', setColor.primaryColor)};
  ${setTransition()};
  &:hover {
    color: ${setColor.primaryColor};
    background-color: transparent;
  }`
export const PrimaryButtons = styled(Button)`
  ${primaryStyled}
`
export const SmallButton = styled(Button)`
  ${primaryStyled};
  padding: 0.7rem 1rem;
`

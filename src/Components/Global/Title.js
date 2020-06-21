import React from 'react'
import styled from 'styled-components'
import { setFont, setColor } from '../../Utils/Styles'
const Title = ({ className, text, align = 'left' }) => {
  return <h1 className={className}>{text}</h1>
}

export default styled(Title)`
  ${setFont.slanted};
  color: ${setColor.mainBlack};
  text-transform: capitalize;
  text-align: ${(props) => props.align};
`

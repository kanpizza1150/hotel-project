import React from 'react'
import styled from 'styled-components'
import { fadeIn } from '../../Utils/Animations'
import { setColor, setBorder, media } from '../../Utils/Styles'
const Banner = ({ className, title, greeting, text, children }) => {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>
      </h1>
      <div className='info'>
        <p>{text}</p>
        {children}
      </div>
    </div>
  )
}

const BannerWrapper = styled(Banner)`
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 6rem 3.2rem;
  letter-spacing: 0.3rem;
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: 4.8rem;
    color: ${setColor.primaryColor};
    ${fadeIn('100', '-10', '0', '2s', 'ease-in-out')};
  }
  span {
    color: ${setColor.mainWhite};
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  .info {
    ${fadeIn('-100', '10', '0', '2s', 'ease-in-out')};
  }

  ${media.tablet`
    ${setBorder(6, 'solid', setColor.primaryColor)};
    width: 70vw;
    p {
      width: 75%;
    }
  `}
`

export default BannerWrapper

import React from 'react'
import styled from 'styled-components'
import { setColor, media } from '../../Utils/Styles'
import Title from '../Global/Title'
import AboutBg from '../../Assets/img/aboutBcg.jpeg'
import { PrimaryButtons } from '../Global/Buttons'
const AboutUs = ({ className }) => {
  return (
    <div className={className}>
      <div className='about-img'>
        <img src={AboutBg} alt=' ' />
      </div>
      <div className='about-info'>
        <Title text='about us' />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          ipsum exercitationem ad non aspernatur nesciunt. Sed nobis, beatae
          provident natus repudiandae nostrum totam voluptatibus ratione
          veritatis laboriosam eligendi accusamus perspiciatis.
        </p>
        <PrimaryButtons>Read more</PrimaryButtons>
      </div>
    </div>
  )
}

export default styled(AboutUs)`
  .about {
    &-info,
    &-img {
      padding: 3rem;
    }
    &-img {
      img {
        width: 100%;
        display: block;
        border: 0.6rem solid ${setColor.primaryColor};
      }
    }
    &-info {
      p {
        letter-spacing: 0.3rem;
      }
    }
  }

  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
  width:100vw;
  max-width:117rem;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:3.2rem;
  .about-img{
     align-self: center;
     padding: 8rem 3rem;
  }
  .about-info{
       align-self: center;
     padding: 8rem 3rem;
    p{
      width:80%;
    }
  }
  `}
`

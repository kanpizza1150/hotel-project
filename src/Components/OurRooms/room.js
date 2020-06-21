import React from 'react'
import { SmallButton } from '../Global/Buttons'
import styled from 'styled-components'
import {
  setColor,
  setBorder,
  setShadow,
  setTransition,
} from '../../Utils/Styles'
const room = ({
  className,
  id = '',
  title = '',
  info = '',
  img = '',
  price = 0,
}) => {
  return (
    <div key={id} className={className}>
      <div className='img-container'>
        <img src={img} alt={title} />
        <div className='price'>${price}</div>
      </div>
      <div className='info-container'>
        <h4>{title}</h4>
        <p clasName='info'>{info}</p>
        <SmallButton>see more</SmallButton>
      </div>
    </div>
  )
}

export default styled(room)`
  ${setShadow.light};
  background-color: ${setColor.mainWhite};
  margin: 3.2rem 0;
  ${setTransition()};

  &:hover {
    ${setShadow.dark};
  }

  .img-container {
    background-color: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition()};
    }

    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      opacity: 0;
      ${setTransition()};
      letter-spacing: 0.5rem;
      font-size: 2.2rem;
      padding: 1rem 3.3rem;
      ${setBorder('2', 'solid', setColor.mainWhite)};
    }
  }
  &:hover img {
    opacity: 0.5;
  }
  &:hover .price {
    opacity: 1;
  }
  .info-container {
    padding: 1rem;
    h4 {
      text-transform: capitalize;
      letter-spacing: 3px;
      font-weight: bold;
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    p {
      letter-spacing: 3px;
    }
  }
`

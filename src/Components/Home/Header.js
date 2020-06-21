import React from 'react'
import { Hero } from '../../Utils/StyledComponents'
import homeImg from '../../Assets/img/homeBcg.jpeg'
import Banner from './Banner'
import { PrimaryButtons } from '../Global/Buttons'
export default function Header() {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting='Welcome to'
        title='beachwalk resort'
        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolorem a quaerat, repellat veniam provident quo distinctio ad similique culpa.'
      >
        <PrimaryButtons as='a' href='#b'>
          view details
        </PrimaryButtons>
      </Banner>
    </Hero>
  )
}

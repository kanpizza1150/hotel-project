import React, { Component } from 'react'
import Room from './room'
import { setColor, media } from '../../Utils/Styles'
import styled from 'styled-components'
import Title from '../Global/Title'
import rooms from '../../Assets/rooms-data'
export default class Rooms extends Component {
  state = { rooms: rooms }
  render() {
    return (
      <Section>
        <Title text='Our room' align='center' />
        <RoomsWrapper>
          {this.state.rooms.map((room) => (
            <Room
              id={room.id}
              img={room.img}
              title={room.title}
              info={room.info}
              price={room.price}
            />
          ))}
        </RoomsWrapper>
      </Section>
    )
  }
}

const Section = styled.div`
  background-color: ${setColor.lightGrey};
  padding: 3rem;
`
const RoomsWrapper = styled.div`
  margin: 0 auto;
  ${media.large`
    width: 100vw;
    max-width:117rem;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(35rem,1fr));
    grid-column-gap:4.5rem;`};
`

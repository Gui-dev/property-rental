import React from 'react'

import house1 from './../../assets/images/house1.jpg'
import house2 from './../../assets/images/house2.jpg'
import house3 from './../../assets/images/house3.jpg'
import { Container, Slide, Image } from './style'

export const SwiperItem: React.FC = () => {
  return (
    <Container>
      <Slide>
        <Image source={ house1 }/>
      </Slide>
      <Slide>
        <Image source={ house2 }/>
      </Slide>
      <Slide>
        <Image source={ house3 }/>
      </Slide>
    </Container>
  )
}

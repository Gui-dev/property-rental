import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Header, InputArea, InputSearch } from './style'

export const Home: React.FC = () => {



  return (
    <Container>
      <Header>
        <InputArea>
          <InputSearch placeholder="O que está procurando?"/>
          <Feather name="search" size={ 24 } color="#FFF"/>
        </InputArea>
      </Header>
    </Container>
  )
}

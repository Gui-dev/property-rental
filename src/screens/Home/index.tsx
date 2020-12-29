import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { NewPropertiesItem } from '../../components/NewPropertiesItem'
import house1 from './../../assets/images/house1.jpg'
import house2 from './../../assets/images/house2.jpg'
import house3 from './../../assets/images/house3.jpg'
import house4 from './../../assets/images/house4.jpg'
import { Container, Header, InputArea, InputSearch, News, Title, NewProperties } from './style'

export const Home: React.FC = () => {

  const { navigate } = useNavigation()

  const handleNavigateToPageDetails = () => {
    navigate('Details')
  }

  return (
    <Container>
      <Header>
        <InputArea>
          <InputSearch placeholder="O que está procurando?"/>
          <Feather name="search" size={ 24 } color="#FFF"/>
        </InputArea>
      </Header>

      <News>
        <Title>Novidades</Title>

        <NewProperties>
          <NewPropertiesItem
            onPressButton={ handleNavigateToPageDetails }
            title="Casa de praia"
            cover={ house1 }
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hs"
          />
          <NewPropertiesItem
            onPressButton={ handleNavigateToPageDetails }
            title="Casa Floripa"
            cover={ house2 }
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hs"
          />
          <NewPropertiesItem
            onPressButton={ handleNavigateToPageDetails }
            title="Rancho SP"
            cover={ house3 }
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hs"
          />
          <NewPropertiesItem
            onPressButton={ handleNavigateToPageDetails }
            title="Casa de praia"
            cover={ house4 }
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24hs"
          />
        </NewProperties>

      </News>

    </Container>
  )
}

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { NewPropertiesItem } from '../../components/NewPropertiesItem'
import { CloseToYouItem } from '../../components/CloseToYouItem'
import house1 from './../../assets/images/house1.jpg'
import house2 from './../../assets/images/house2.jpg'
import house3 from './../../assets/images/house3.jpg'
import house4 from './../../assets/images/house4.jpg'
import house5 from './../../assets/images/house5.jpg'
import house6 from './../../assets/images/house6.jpg'
import { Container, Header, InputArea, InputSearch, News, Title, NewProperties,
  CloseToYou, CloseToYouContent, Tipday, TipdayContent
} from './style'
import { TipdayItem } from '../../components/TipdayItem'

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

      <CloseToYou>
        <Title>Próximo de Você</Title>

        <CloseToYouContent>
            <CloseToYouItem
              cover={ house4 }
              description="Descrição da casa aqui"
              price="954,90"
            />
            <CloseToYouItem
              cover={ house5 }
              description="Descrição da casa aqui"
              price="954,90"
            />
            <CloseToYouItem
              cover={ house6 }
              description="Descrição da casa aqui"
              price="1545,90"
            />
        </CloseToYouContent>
      </CloseToYou>

      <Tipday>
        <Title>Dica do dia</Title>

        <TipdayContent>
          <TipdayItem
            cover={ house1 }
            title="Casa Floripa"
            offer="25"
          />
          <TipdayItem
            cover={ house2 }
            title="Casa praia"
            offer="15"
          />
          <TipdayItem
            cover={ house3 }
            title="Rancho SP"
            offer="10"
          />
        </TipdayContent>
      </Tipday>
    </Container>
  )
}

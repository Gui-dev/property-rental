import React from 'react'
import { Feather } from '@expo/vector-icons'
import Stars from 'react-native-stars'

import house1 from './../../assets/images/house1.jpg'
import house2 from './../../assets/images/house2.jpg'
import house3 from './../../assets/images/house3.jpg'
import house4 from './../../assets/images/house4.jpg'
import house5 from './../../assets/images/house5.jpg'
import house6 from './../../assets/images/house6.jpg'

import { SwiperItem } from '../../components/SwiperItem'
import { Container, SwiperContent, Content, HeaderContent, Title,
  Evaluation, EvaluationText, Rating, StarsIcons, HouseContent, Price, Description,
  HouseImages, Carousel, Image
} from './style'

export const Details: React.FC = () => {
  return (
    <Container>
      <SwiperContent>
        <SwiperItem />
      </SwiperContent>

      <Content>
        <HeaderContent>
          <Title>Casa de Praia</Title>
          <Evaluation>
            <EvaluationText>Avaliações</EvaluationText>
            <Rating>
              <Stars
                default={ 4 }
                count={ 5 }
                half={ true }
                starSize={ 24 }
                fullStar={ <StarsIcons name="md-star" size={ 24 } color="#f3f717"/> }
                emptyStar={ <StarsIcons name="md-star-outline" size={ 24 } color="#FFF"/> }
                halfStar={ <StarsIcons name="md-star-half" size={ 24 } color="#f3f717"/> }
              />
            </Rating>
          </Evaluation>
        </HeaderContent>
      </Content>

      <HouseContent>
        <Price>R$ 1,200.90</Price>
        <Description>Casa de praia uma quadra do mar, monitorada 24 horas</Description>

        <HouseImages>
          <Carousel>
            <Image
              source={ house1 }
            />
          </Carousel>
          <Carousel>
            <Image
              source={ house2 }
            />
          </Carousel>
          <Carousel>
            <Image
              source={ house3 }
            />
          </Carousel>
          <Carousel>
            <Image
              source={ house4 }
            />
          </Carousel>
          <Carousel>
            <Image
              source={ house5 }
            />
          </Carousel>
          <Carousel>
            <Image
              source={ house6 }
            />
          </Carousel>
        </HouseImages>
      </HouseContent>
    </Container>
  )
}

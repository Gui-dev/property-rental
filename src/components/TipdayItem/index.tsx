import React from 'react'
import { useNavigation } from '@react-navigation/native'

import house1 from './../../assets/images/house1.jpg'
import { Container, ImageBackground, Title, Offer } from './style'

interface ITipdayItemProps {
  cover: string
  title: string
  offer: string
}

export const TipdayItem: React.FC<ITipdayItemProps> = ({ cover, title, offer }) => {

  const { navigate } = useNavigation()

  const handleNavigateToDetails = () => {
    navigate('Details')
  }

  return (
    <Container onPress={ handleNavigateToDetails }>
      <ImageBackground
        source={ cover }
      >
        <Title>{ title }</Title>
        <Offer>{ `${offer}% OFF` }</Offer>
      </ImageBackground>
    </Container>
  )
}

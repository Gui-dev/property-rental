import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, ImageContainer, Image, Content, Description, Price } from './style'

interface ICloseToYouItemProps {
  cover: string
  description: string
  price: string
}

export const CloseToYouItem: React.FC<ICloseToYouItemProps> = ({ cover, description, price }) => {

  const { navigate } = useNavigation()

  const handleNavigateToPageDetails = () => {
    navigate('Details')
  }

  return (
    <Container onPress={ handleNavigateToPageDetails }>
      <ImageContainer>
        <Image source={ cover }/>
      </ImageContainer>

      <Content>
        <Description>{description}</Description>
        <Price>{ `R$ ${price}` }</Price>
      </Content>
    </Container>
  )
}

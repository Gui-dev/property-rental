import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Container, Image, Content, Title, Dot, Badge, Description,
  Footer, FooterContent, Price, FooterIcon
} from './style'

interface INewPropertiesItemProps {
  onPressButton: () => void
  title: string
  cover: string
  description: string
}

export const NewPropertiesItem: React.FC<INewPropertiesItemProps> =
  ({ onPressButton, title, cover, description }) => {

    const handleNavigationToPageDetails = () => {
      onPressButton()
    }

  return (
    <Container onPress={ handleNavigationToPageDetails }>
      {/* <Image source={ { uri: cover } }/> */}
      <Image source={ cover } />

      <Content>
        <Title>{title}</Title>
        <Dot />
        <Badge>Novo</Badge>
      </Content>

      <Description>{ description }</Description>

      <Footer>
        <FooterContent>
          <Price>R$ 1.204,90</Price>
        </FooterContent>
        <FooterIcon>
          <Ionicons name="ios-add-circle" size={ 24 } color="#4F4F4F"/>
        </FooterIcon>
      </Footer>
    </Container>
  )
}

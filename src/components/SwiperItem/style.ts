import styled from 'styled-components/native'
import Swiper from 'react-native-swiper'

export const Container = styled(Swiper).attrs({
  dotStyle: {
    width: 10,
    height: 10,
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10
  },
  activeDotColor: '#FFF',
  activeDotStyle: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10
  }
})`

`

export const Slide = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #DDD;
`

export const Image = styled.Image`
  width: 100%;
  height: 400px;
`

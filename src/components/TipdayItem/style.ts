import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: .8
})`
  width: 230px;
  height: 130px;
  margin: 0 20px 40px 0;
  border-radius: 10px;
`

export const ImageBackground = styled.ImageBackground.attrs({
  blurRadius: 2
})`
  width: 230px;
  height: 130px;
  padding: 12px;
  background-color: #222;
  opacity: .8;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: Montserrat_700Bold;
  color: #FFF;
`

export const Offer = styled.Text`
  font-size: 20px;
  font-family: Montserrat_700Bold;
  color: #FFF;
`

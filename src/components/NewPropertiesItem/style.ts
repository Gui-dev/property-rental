import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 200px;
  height: 250px;
  margin: 20px 30px 5px 2px;
  padding: 15px;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 10px;
  elevation: 2;
`

export const Image = styled.Image`
  width: 170px;
  height: 110px;
  border-radius: 10px;
`

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 10px 0;
`

export const Title = styled.Text`
  font-size: 12px;
  font-family: Montserrat_700Bold;
  color: #4F4F4F;
`

export const Dot = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: red;
  margin: 0 4px;
`

export const Badge = styled.Text`
  font-size: 9px;
  font-family: Montserrat_700Bold;
  color: red;
`

export const Description = styled.Text`
  font-size: 12px;
  font-family: Montserrat_400Regular;
  color: #4F4F4F;
`

export const Footer = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 5px;
`

export const FooterContent = styled.View`
  width: 80%;
`

export const Price = styled.Text`
  font-size: 15px;
  font-family: Montserrat_700Bold;
  color: #4F4F4F;
`

export const FooterIcon = styled.View`
  width: 20%;
`


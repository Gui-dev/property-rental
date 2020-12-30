import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: .9
})`
  flex-direction: row;
  width: 250px;
  height: 70px;
  padding: 6px;
  margin: 5px 20px 0 2px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  elevation: 2;
`

export const ImageContainer = styled.View`
  border-radius: 10px;
`

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`

export const Content = styled.View`
  justify-content: flex-end;
  width: 65%;
  height: 100%;
  padding: 0 10px;
`

export const Description = styled.Text`
  font-size: 12px;
  font-family: Montserrat_500Medium;
  color: #4F4F4F;
`

export const Price = styled.Text`
  font-size: 13px;
  font-family: Montserrat_700Bold;
  color: #4F4F4F;
`

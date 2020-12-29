import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  padding: 0;
  background-color: #222;
`

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 20px 0;
  padding: 0 15px;
`

export const InputArea = styled.View`
  align-items: center;
  flex-direction: row;
  width: 98%;
  height: 40px;
  padding: 0 25px 0 15px;
  background-color: #000;
  border-radius: 10px;
  elevation: 2;
`

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: '#FFF'
})`
  font-size: 13px;
  font-family: Montserrat_500Medium;
  color: #FFF;
  width: 98%;
  padding: 0 15px;
`

export const News = styled.View`
  width: 100%;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: Montserrat_700Bold;
  color: #FFF;
  padding: 0 15px;
`

export const NewProperties = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  padding: 0 15px;
`

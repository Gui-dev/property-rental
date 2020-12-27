import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
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
  height: 37px;
  padding: 0 15px;
  border-radius: 10px;
`

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: '#FFF'
})`
  font-size: 13px;
  font-family: Montserrat_500Medium;
  color: #FFF;
  width: 98%;
  padding: 0 10px;
`

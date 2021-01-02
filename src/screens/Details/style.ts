import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  background-color: #222;
`

export const SwiperContent = styled.View`
  flex-direction: row;
  width: 100%;
  height: 340px;
`

export const Content = styled.View`
  /* flex-direction: row; */
  /* align-items: center; */
  width: 100%;
  margin-top: 20px;
`

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: Montserrat_700Bold;
  color: #FFF;
`

export const Evaluation = styled.View`

`

export const EvaluationText = styled.Text`
  font-size: 9px;
  font-family: Montserrat_500Medium;
  color: #FFF;
`

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
`

export const StarsIcons = styled(Ionicons)`

`

export const HouseContent = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Price = styled.Text`
  font-size: 20px;
  font-family: Montserrat_700Bold;
  color: #FFF;
  padding: 0 15px;
`

export const Description = styled.Text`
  font-size: 16px;
  font-family: Montserrat_500Medium;
  line-height: 20px;
  color: #FFF;
  margin-top: 20px;
  padding: 0 15px;
`

export const HouseImages = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  margin-top: 20px;
  padding: 0 15px;
`

export const Carousel = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #222;
  width: 90px;
  height: 90px;
  margin-right: 25px;
  border-radius: 15px;
`

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`

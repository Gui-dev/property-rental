import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Details } from '../screens/Details'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Routes: React.FC = () => {

  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Montserrat_700Bold',
            color: '#FFF'
          },
          headerStyle: {
            backgroundColor: '#222',
            elevation: 0,
            shadowColor: 'transparent'
          },
        }}
      >
        <Screen
          name="Home"
          component={ Home }
          options={{
            headerTitle: "Alugue",
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  activeOpacity={ .6 }
                >
                  <Feather name="shopping-bag" size={ 24 } color="#FFF"/>
                </TouchableOpacity>
              )
            }
          }}
        />
        <Screen
          name="Details"
          component={ Details }
          options={{
            headerTitle: "Detalhe",
            headerTintColor: '#FFF',
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  activeOpacity={ .6 }
                >
                  <Feather name="shopping-bag" size={ 24 } color="#FFF"/>
                </TouchableOpacity>
              )
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

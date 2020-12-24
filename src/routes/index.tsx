import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Details } from '../screens/Details'

export const Routes: React.FC = () => {

  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={ Home }/>
        <Screen name="Details" component={ Details }/>
      </Navigator>
    </NavigationContainer>
  )
}

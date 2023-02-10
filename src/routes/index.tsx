import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";

export function Routes() {
  const { COLORS } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.PURPLE }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
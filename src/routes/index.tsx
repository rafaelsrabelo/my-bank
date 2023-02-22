import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { AppRoutes } from "./app";
import { AuthRoutes } from "./auth";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { COLORS } = useTheme()
  const { user } = useAuth();
  // console.log('usuário logado =>', user);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.PURPLE }}>
      <NavigationContainer>
        {
          user.id ? <AppRoutes /> : <AuthRoutes />
        }
      </NavigationContainer>
    </View>
  )
}
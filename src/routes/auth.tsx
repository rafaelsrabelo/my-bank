import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Initial } from '../screens/Initial';
import { Welcome } from '../screens/Welcome';

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name='initial' component={Initial} />
      <Screen name='welcome' component={Welcome} />
    </Navigator>
  )
}
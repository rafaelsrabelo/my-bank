import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../screens/Welcome';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name='initial' component={Welcome} />
      <Screen name='welcome' component={Login} />
      <Screen name='signup' component={SignUp} />
    </Navigator>
  )
}
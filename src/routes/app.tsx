import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo} from '@expo/vector-icons'

import { Home } from '../screens/Home';
import { Pix } from '../screens/Pix';
import { Saved } from '../screens/Saved';
import { Platform } from 'react-native';

type AppRoutes = {
  home: undefined;
  pix: undefined;
  saved: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Screen, Navigator } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#771AC9',
      tabBarInactiveTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        height: 62,
        // paddingBottom: 100
      }
    }}>
      <Screen
        name='home'
        component={Home}
        
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather name='home' size={size} color={focused ? '#771AC9' : '#c3c3c3'} />
          ),
        }}
      />
      <Screen
        name='pix'
        component={Pix}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather name='clock' size={size} color={focused ? '#771AC9' : '#c3c3c3'} />
          )
        }}
      />
      <Screen
        name='saved'
        component={Saved}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather name='share' size={size} color={focused ? '#771AC9' : '#c3c3c3'} />
          )
        }}
      />
    </Navigator>
  )
}
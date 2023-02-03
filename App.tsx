import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import {Welcome} from './src/screens/Welcome'
import theme from './src/theme';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Initial } from './src/screens/Initial';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {
        fontsLoaded ?  <Welcome /> : <Loading />
      }
    </ThemeProvider>
  );
}

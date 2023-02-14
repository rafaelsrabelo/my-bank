import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { TypeSelect } from './src/screens/TypeSelect';

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
        fontsLoaded ?  <Routes /> : <Loading />
      }
    </ThemeProvider>
  );
}

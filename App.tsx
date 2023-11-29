import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { TypeSelect } from './src/screens/TypeSelect';
import { AuthContexProvider } from './src/contexts/AuthContext';
import { decode as atob } from 'base-64';
global.atob = atob;

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContexProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContexProvider>
    </ThemeProvider>
  );
}

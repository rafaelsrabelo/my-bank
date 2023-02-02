import  { ThemeProvider} from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

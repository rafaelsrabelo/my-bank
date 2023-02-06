import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { BackgroundImage, Container, Title } from "./styles";
import background from './../../../assets/background.png';
import { Text } from "react-native";
import { Button } from "../../components/Button";
export function Initial() {
  const navigation = useNavigation();

  function handleWelcome() {
    navigation.navigate('welcome')
  }

  return (
    <Container>
      <BackgroundImage source={background} />
      <Title>Tenha o controle das suas finanças</Title>
      <Button
        title="Acessar"
        onPress={handleWelcome}
      />
    </Container>
  )
}
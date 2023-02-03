import { BackgroundImage, Container, Title } from "./styles";
import background from './../../../assets/background.png';
import { Text } from "react-native";
import { Button } from "../../components/Button";
export function Initial() {
  return (
    <Container>
      <BackgroundImage source={background} />
      <Title>Tenha o controle das suas finanças</Title>
      <Button title="Acessar" />
    </Container>
  )
}
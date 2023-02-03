import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Title, HightLight , Subtitle} from "./styles";

export function Welcome() {
  return (
    <Container>
      <Header />
      <HightLight>
        <Title>Bem vindo ao MyBank!</Title>
        <Subtitle>Tenha o controle da sua vida financeira na palma da sua mão!</Subtitle>
        <Input style={{ marginTop: 50, marginBottom: 20 }} placeholder="Qual seu nome?" />
        <Button title="Adicionar"/>
      </HightLight>
    </Container>
  )
}
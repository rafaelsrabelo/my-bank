
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Title, HightLight , Subtitle} from "./styles";

export function Login() {
  const navigation = useNavigation();

  function newAccount() {
    navigation.navigate('signup')
  }
  return (
    <Container>
      <Header />
      <HightLight>
        <Title>Bem vindo ao MyBank!</Title>
        <Subtitle>Acesse sua conta e tenha controle da sua vida financeira na palma da sua mão!</Subtitle>
        <Input style={{ marginTop: 50, marginBottom: 20 }} placeholder="Email" />
        <Input style={{ marginTop: 0, marginBottom: 20 }} placeholder="Senha" />
        <Button title="Adicionar" />
        <Subtitle style={{ marginTop: 50, marginBottom: 20}}>Ainda não tem conta?</Subtitle>
        <Button onPress={newAccount} title="Criar conta" type="SECONDARY" />
      </HightLight>
    </Container>
  )
}
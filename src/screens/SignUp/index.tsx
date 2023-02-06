import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Content, Title } from "./styles";

export function SignUp() {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <Header />
      <Content>
        <Title>Crie sua conta</Title>
        <Input placeholder="Nome" style={{ marginTop: 20}} />
        <Input placeholder="E-mail" style={{ marginTop: 20}} />
        <Input placeholder="Senha" style={{ marginTop: 20}} />
        <Input placeholder="Confirmar a senha" style={{ marginTop: 20, marginBottom: 20 }} />
        <Button title="Criar a conta" />  
        <View style={{marginBottom: 30}} />
        <Button onPress={goBack} title="Voltar para login" type="SECONDARY" />  
      </Content>
    </Container>
  )
}
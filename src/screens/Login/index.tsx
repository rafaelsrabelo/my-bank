import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Title, HightLight , Subtitle} from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Alert } from 'react-native'
type FormData = {
  email: string;
  password: string;
}

export function Login() {
  const { login } = useAuth();
  const navigation = useNavigation();
  const { control, reset, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false);
  
  function newAccount() {
    navigation.navigate('signup')
  }
  
  async function handleLogin({ email, password }: FormData) {
    try {
      console.log('passou')
      setIsLoading(true);
      await login(email, password);
      reset()
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Header />
      <HightLight>
        <Title>Controle suas transações</Title>
        <Subtitle>Acesse sua conta e tenha o controle da sua vida financeira</Subtitle>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Informe o e-mail' }}
          render={({ field: { onChange } }) => (
            <Input style={{ marginTop: 50, marginBottom: 20 }} onChangeText={onChange} autoCapitalize="none" placeholder="Email" keyboardType="email-address"/>
          )}
        />
                <Controller
          control={control}
          name="password"
          rules={{ required: 'Informe a senha' }}
          render={({ field: { onChange } }) => (
            <Input style={{ marginTop: 0, marginBottom: 20 }} secureTextEntry onChangeText={onChange} placeholder="Senha" />
          )}
        />
        <Button
          title="Acessar"
          onPress={handleSubmit(handleLogin)}
            
        />
        <Subtitle style={{ marginTop: 50, marginBottom: 20}}>Ainda não tem conta?</Subtitle>
        <Button onPress={newAccount} title="Criar conta" type="SECONDARY" />
      </HightLight>
    </Container>
  )
}
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Text } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Content, Error, Title, TopForm } from "./styles";

type FormProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Campos obrigatório'),
  email: yup.string().required('Campos obrigatório').email('E-mail inválido'),
  password: yup.string().required('Campos obrigatório').min(6, 'A senha deve ter pelo menos 6 dígitos'),
  password_confirmation: yup.string().required('Campos obrigatório').oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere')
})

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormProps>({
    resolver: yupResolver(signUpSchema)
  });
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }
  function handleSignUp({ email, name, password, password_confirmation }: FormProps) {
    console.log({email,name,password,password_confirmation});
  }

  return (
    <Container>
      <Header />
      <TopForm>
      <Title>Crie sua conta</Title>
      </TopForm>
      {
        errors.name || errors.email || errors.password || errors.password_confirmation ?
        <TopForm>
        <Error>{errors.name?.message }</Error>
        <Error>{errors.email?.message }</Error>
        <Error>{errors.password?.message }</Error>
        <Error>{errors.password_confirmation?.message }</Error>
      </TopForm> : <View></View>
      }

      <Content>
        <Controller
          control={control}
          name="name"
          render={({ field: {onChange, value} }) => (
            <Input
              placeholder='Nome'
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              style={{ marginTop: 20}}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: {onChange, value} }) => (
            <Input
              placeholder='Senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              style={{ marginTop: 20, marginBottom: 20}}
            />
          )}
        />
        
        <Controller
          control={control}
          name="password_confirmation"
          rules={{
            required: 'Os campos são obrigátorios!!'       
          }}
          render={({ field: {onChange, value} }) => (
            <Input
              placeholder='Confirmar senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType="send"
              style={{ marginBottom: 20}}
            />
          )}
        />
        <Button onPress={handleSubmit(handleSignUp)} title="Criar e acessar"/>  
        <View style={{marginBottom: 30}} />
        <Button onPress={goBack} title="Voltar para login" type="SECONDARY" />  
        <Title>Crie sua conta</Title>

      </Content>
    </Container>
  )
}
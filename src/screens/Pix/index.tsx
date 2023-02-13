import { View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Categorie, Container, TitleForm} from "./styles";
import { HeaderApp } from "../../components/HeaderApp";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";
import { useState } from "react";
import { CategorySelect } from "../../components/CategorySelect";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { api } from "../../services/api";

type FormProps = {
  name: string;
  amount: string;
  type: string;
}

export function Pix() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormProps>();
  const [transactionType, setTransactionType] = useState('');
  const navigation = useNavigation();

  function handleCategories(type: 'up' | 'down') {
    setTransactionType(type);
  }

  async function createTransaction(form: FormProps) {
    const data = {
      name: form.name,
      amount: form.amount,
      type: form.type
    }

    api.post('/transactions', data).then((response) => console.log('deu certo')).catch((err) => console.log('deu errado'))

    reset();
    navigation.navigate('home');
  }

  // function createTransaction(form: FormProps) {
  //   try {
  //     const data = {
  //       name: form.name,
  //       amount: form.amount,
  //       transactionType
  //     }
  //     axios.post('/transactions', {
  //       data
  //     });
  //     console.log(data)
  //     reset();
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  return (
    <View>
      <HeaderApp />

      <Container>
        <TitleForm>Cadastro</TitleForm>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value} 
              placeholder="Nome"
              style={{ marginBottom: 20 }} />
          )}
        />

        <Controller
          control={control}
          name="amount"
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
              placeholder="Valor"
              style={{ marginBottom: 20 }} />
          )}
        />

        <Categorie style={{ marginBottom: 100 }}>
          <Controller
            control={control}
            name="type"
            
            render={({ field: { onChange, value } }) => (
              <TransactionTypeButton
                onPress={() => handleCategories('up')}
                type="up"
                
                title="Entrada"
                isActive={transactionType === 'up'}
              />
            )}

          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <TransactionTypeButton
                onPress={() => handleCategories('down')}
                type="down"
                title="Saída"
                isActive={transactionType === 'down'}
              />
            )}
          />
        </Categorie>

        {/* <CategorySelect title="Categoria"/> */}
        
        <Button title="Cadastrar" onPress={handleSubmit(createTransaction)}/>
      </Container>
    </View>
  )
}
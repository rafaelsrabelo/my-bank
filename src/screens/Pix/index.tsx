import { View, Text } from "react-native";
import { Categorie, Container, TitleForm} from "./styles";
import { HeaderApp } from "../../components/HeaderApp";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";
import { useState } from "react";
import { CategorySelect } from "../../components/CategorySelect";
import { useForm, Controller } from 'react-hook-form';

type FormProps = {
  name: string;
  amount: string;
  type: string;
}

export function Pix() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormProps>();
  const [transactionType, setTransactionType] = useState('');

  function handleCategories(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleRegister(form: FormProps) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType
    }

    console.log(data);
  }


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
              placeholder="amount"
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
        
        <Button title="Cadastrar" onPress={handleSubmit(handleRegister)}/>
      </Container>
    </View>
  )
}
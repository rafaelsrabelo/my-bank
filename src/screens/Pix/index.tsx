import { View, Text, Alert, Modal } from "react-native";
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
import { Select } from "../../components/Select";
import { TypeSelect } from "../TypeSelect";

type FormProps = {
  name: string;
  amount: string;
  created_at: string;
  transactionType: string;
}

export function Pix() {
  const [category, setCategory] = useState({
    id: 1,
    name: 'up'
  });
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormProps>();
  const [transactionType, setTransactionType] = useState('');
  const [categoryModal, setCategoryModal] = useState(false);
  const navigation = useNavigation();

  // function handleCategories(type: 'up' | 'down') {
  //   setTransactionType(type);
  // }

  function handleCloseSelectType() {
    setCategoryModal(false)
  }

  function handleOpenSelectType() {
    setCategoryModal(true)
  }

  async function createTransaction(form: FormProps) {
    const data = {
      name: form.name,
      type: 'up',
      amount: form.amount,
    }
    console.log(data);
    console.log(`${form} + form`)
    await api.post('/transactions', {
      data,
    }).then((response) => console.log('deu certo')).catch((err) => console.log('deu errado' + err.message))

    reset();
    navigation.navigate('home');
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
              placeholder="Valor"
              style={{ marginBottom: 20 }} />
          )}
        />
        
        <Select title={category.name} onPress={handleOpenSelectType} />
        
        <Button title="Cadastrar" onPress={handleSubmit(createTransaction)}/>
      </Container>
      <Modal visible={categoryModal}>
        <TypeSelect
          type={category}
          setCategory={setCategory}
          closedSelectType={handleCloseSelectType}
        />
      </Modal>
    </View>
  )
}
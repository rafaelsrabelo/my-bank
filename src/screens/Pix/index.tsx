import { View, Text, Alert, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Categorie, Container, TitleForm} from "./styles";
import { HeaderApp } from "../../components/HeaderApp";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";
import { useEffect, useState } from "react";
import { CategorySelect } from "../../components/CategorySelect";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { api } from "../../services/api";
import { Select } from "../../components/Select";
import { TypeSelect } from "../TypeSelect";
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { dateFormatter } from "../../utils/formatter";

type FormProps = {
  name: string;
  amount: number;
  created_at: string;
  transactionType: string;
}

export function Pix() {
  const [transactions, setTransactions] = useState<FormProps[]>([]);
  const [category, setCategory] = useState({});
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormProps>();
  const [categoryModal, setCategoryModal] = useState(false);
  const navigation = useNavigation();

  function handleCloseSelectType() {
    setCategoryModal(false)
  }

  function handleOpenSelectType() {
    setCategoryModal(true)
  }

  async function createTransaction(form: FormProps) {
      try {
      const data = {
        name: form.name,
        type: category.name,
        amount: form.amount,
        created_at: dateFormatter.format((new Date())),
      }
        api.post('/transactions', data);
        console.log(`${data} AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`)
      reset();
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // console.log(control)
  },[])

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
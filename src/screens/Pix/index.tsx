import { View, Text } from "react-native";
import { Categorie, Container, TitleForm} from "./styles";
import { HeaderApp } from "../../components/HeaderApp";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";
import { useState } from "react";
import { CategorySelect } from "../../components/CategorySelect";

export function Pix() {
  const [transactionType, setTransactionType] = useState('');

  function handleCategories(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <View>
      <HeaderApp />

      <Container>
        <TitleForm>Cadastro</TitleForm>
        
        <Input placeholder="Nome" style={{ marginBottom: 20 }} />
        <Input placeholder="Valor" style={{ marginBottom: 20 }}/>

        <Categorie style={{ marginBottom: 100 }}>
          <TransactionTypeButton
            onPress={() => handleCategories('up')}
            type="up"
            title="Entrada"
            isActive={transactionType === 'up'}
          />
          <TransactionTypeButton
            onPress={() => handleCategories('down')}
            type="down"
            title="Saída"
            isActive={transactionType === 'down'}
          />
        </Categorie>

        {/* <CategorySelect title="Categoria"/> */}
        
        <Button title="Cadastrar" />
      </Container>
    </View>
  )
}
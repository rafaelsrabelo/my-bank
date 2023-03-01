import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import {Feather } from '@expo/vector-icons'
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { ButtonCard, Container, Content, Date, Hidden, Label, Title, Value, ButtonEye, HeaderContent } from "./styles";
import { api } from "../../services/api";

interface TransactionProps {
  id: number;
  name: string;
  amount: string;
  type: string;
  created_at: string;
}

export function LastMoney() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [showValue, setShowValue] = useState(false);

  async function getTransactions() {
    try {
      const response = await api.get('/transactions')
      console.log(response.data.transctionsList)
      setTransactions(response.data.transctionsList)
    } catch (error) {
      console.log('Ops! Ocorreu um erro!')
    }
  }

  useFocusEffect(useCallback(() => {
    getTransactions()
  }, []))
  
  function showValueFunction() {
    setShowValue(!showValue);
  }

  return (
    <Container>
      <HeaderContent>
      <Title>Últimas movimentações</Title>
        <ButtonEye style={{ opacity: 0.9 }} onPress={showValueFunction}>
          {
            showValue ?
              <Feather
                name="eye"
                size={36}
                color="#000"
              /> :           <Feather
              name="eye-off"
              size={36}
              color="#000"
              />
          }

        </ButtonEye>
      </HeaderContent>

      <FlatList
        data={transactions}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
        <ButtonCard>
            <Date>{item.created_at}</Date>
            
            <Content>
              <Label>{item.name}</Label>
            {
                showValue ? (
                  <Value  type={item.type}>{item.type === 'up' ? `R$ ${item.amount}` : `R$ - ${item.amount}`}</Value>
                ) : (
                    <Hidden></Hidden>
              )
            }
            </Content>
          </ButtonCard>}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center', marginTop: 50, fontSize: 18}}>
            Não há movimentação!
          </Text>
        )}
      />
    </Container>
  )
}
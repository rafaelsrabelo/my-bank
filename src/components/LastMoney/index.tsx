import { useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { ButtonCard, Container, Content, Date, Hidden, Label, Title, Value } from "./styles";

const list = [
  {id: 1, label: 'Salário', value: '7.000,00', date: '24/01/23',type: 0},
  {id: 2, label: 'Cartão', value: '3.000,00', date: '30/01/23',type: 1},
  {id: 3, label: 'Plano de saúde', value: '700,00', date: '31/01/23',type: 1},
]


export function LastMoney() {
  const [showValue, setShowValue] = useState(false);

  return (
    <Container>
      <Title>Últimas movimentações</Title>
      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
        <ButtonCard onPress={() => setShowValue(!showValue)}>
            <Date>{item.date}</Date>
            
            <Content>
              <Label>{item.label}</Label>
            {
                showValue ? (
                  <Value type={item.type}>{item.type === 0 ? `R$ ${item.value}` : `R$ - ${item.value}`}</Value>
                ) : (
                    <Hidden></Hidden>
              )
            }
            </Content>
        </ButtonCard>}
      />
    </Container>
  )
}
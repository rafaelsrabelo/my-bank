import { useState } from "react";
import {Feather } from '@expo/vector-icons'
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { ButtonCard, Container, Content, Date, Hidden, Label, Title, Value, ButtonEye, HeaderContent } from "./styles";

const list = [
  {id: 1, label: 'Salário', value: '7.000,00', date: '24/01/23',type: 0},
  {id: 2, label: 'Cartão', value: '3.000,00', date: '30/01/23',type: 1},
  {id: 3, label: 'Plano de saúde', value: '700,00', date: '31/01/23',type: 1},
  {id: 4, label: 'Ifood', value: '300,00', date: '31/01/23',type: 1},
  {id: 5, label: 'Ingles', value: '600,00', date: '31/01/23',type: 1},
  {id: 6, label: 'Contas', value: '700,00', date: '31/01/23',type: 1},
  {id: 7, label: 'Bernardo', value: '1000,00', date: '31/01/23',type: 1},
]


export function LastMoney() {
  const [showValue, setShowValue] = useState(false);

  function showValueFunction() {
    setShowValue(!showValue);
  }

  return (
    <Container>
      <HeaderContent>
      <Title>Últimas movimentações</Title>
      <ButtonEye style={{ opacity: 0.9 }}  onPress={showValueFunction}>
          <Feather
            name="eye"
            size={36}
            color="#000"
            />
        </ButtonEye>
      </HeaderContent>

      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
        <ButtonCard>
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
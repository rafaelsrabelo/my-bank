import { useState, useContext } from "react";
import { Feather } from '@expo/vector-icons'
import { FlatList, Text, View } from "react-native";
import { ButtonCard, Container, Content, Date, Hidden, Label, Title, Value, ButtonEye, HeaderContent } from "./styles";
import { TransactionContext } from "../../contexts/TransactionContext";
import { priceFOrmatter } from "../../utils/formatter";

export function LastMoney() {
  const { transactions } = useContext(TransactionContext)
  const [showValue, setShowValue] = useState(false);
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'up') {
        acc.up += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.down = + transaction.amount;
        acc.total -= transaction.amount;
      }
      
      return acc;
    },
    {
      up: 0,
      down: 0,
      total: 0
    });
  function showValueFunction() {
    setShowValue(!showValue);
  }

  return (
    <Container>
      <HeaderContent>
        <Title>Últimas movimentações</Title>
        {
          transactions ? 
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

        </ButtonEye> : <View />
        }

      </HeaderContent>

      <FlatList
        data={transactions}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
        <ButtonCard>
            <Date>
              { item.created_at}
            </Date>
            <Content>
              <Label>{item.name}</Label>
            {
                showValue ? (
                  <Value  type={item.type}>{item.type === 'up' ? `${ priceFOrmatter.format(item.amount)}` : `${ priceFOrmatter.format(item.amount)}`}</Value>
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
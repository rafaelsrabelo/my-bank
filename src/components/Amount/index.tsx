import { useContext } from "react";
import { Alert, Text, FlatList, View } from "react-native";
import { TransactionContext } from "../../contexts/TransactionContext";
import { priceFOrmatter } from "../../utils/formatter";

import { Container, Content, Description, Item, Title, Balance, Expenses } from "./styles";

export function Amount() {
  const { transactions } = useContext(TransactionContext)
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
  return (
    <Container>
      <Item>
        <Title>Saldo</Title>
        <Content>
          <Description>{ priceFOrmatter.format(summary.total)}</Description>
          <Balance></Balance>
        </Content>
      </Item>

    </Container>
  )
}
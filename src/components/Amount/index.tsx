import { Text } from "react-native";
import { Container, Content, Description, Item, Title, Balance, Expenses } from "./styles";
type Props = {
  balance: string;
  expenses?: string;
}
export function Amount({balance, expenses }: Props ) {
  return (
    <Container>
      <Item>
        <Title>Saldo</Title>
        <Content>
          <Description>R$</Description>
          <Balance>{ balance }</Balance>
        </Content>
      </Item>

    </Container>
  )
}
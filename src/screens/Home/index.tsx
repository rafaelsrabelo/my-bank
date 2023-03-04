import { Actions } from "../../components/Actions";
import { Amount } from "../../components/Amount";
import { HeaderApp } from "../../components/HeaderApp";
import { LastMoney } from "../../components/LastMoney";
import { Container } from "./styles";
import { useAuth } from '../../hooks/useAuth'
import { Text } from 'react-native'
import { TransactoinsProvider } from "../../contexts/TransactionContext";

export function Home() {
  const { user, signOut } = useAuth();
  return (
    <Container>
      <TransactoinsProvider>
        <HeaderApp />
        <Amount/>
        <Actions />
        <LastMoney />
      </TransactoinsProvider>
      </Container>
  )
}
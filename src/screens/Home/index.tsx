import { Actions } from "../../components/Actions";
import { Amount } from "../../components/Amount";
import { HeaderApp } from "../../components/HeaderApp";
import { LastMoney } from "../../components/LastMoney";
import { Container} from "./styles";
export function Home() {
  return (
    <Container>
      <HeaderApp />
      <Amount balance="3.300,00" />
      <Actions />
      <LastMoney />
      </Container>
  )
}
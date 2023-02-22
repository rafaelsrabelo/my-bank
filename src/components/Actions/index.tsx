import { ActionButton, AreaButton, Container, Title } from "./styles";
import { AntDesign } from '@expo/vector-icons/'
import { useNavigation, Link } from "@react-navigation/native";

export function Actions() {
  const navigation = useNavigation();

  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <ActionButton>
        <AreaButton>
          <AntDesign name="addfolder" size={26} color="#000" />
        </AreaButton>
        <Title>
          Entradas
        </Title>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="tagso" size={26} color="#000" />
        </AreaButton>
        <Title>
          Saídas
        </Title>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="creditcard" size={26} color="#000" />
        </AreaButton>
        <Title>
          Agendamento
        </Title>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="setting" size={26} color="#000" />
        </AreaButton>
        <Title>
          Configurações
        </Title>
      </ActionButton>
    </Container>
  )
}
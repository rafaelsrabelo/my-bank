import { ActionButton, AreaButton, Container, Title } from "./styles";
import { Text, ScrollView } from 'react-native'
import { AntDesign} from '@expo/vector-icons'

export function Actions() {
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
          Compras
        </Title>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="creditcard" size={26} color="#000" />
        </AreaButton>
        <Title>
          Carteira
        </Title>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="barcode" size={26} color="#000" />
        </AreaButton>
        <Title>
          Boletos
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
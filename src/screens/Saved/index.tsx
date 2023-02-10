import { View, Text } from "react-native";
import { HeaderApp } from "../../components/HeaderApp";
import { Container} from "./styles";

export function Saved() {
  return (
    <View>
      <HeaderApp />
      
      <Container>
      <Text>Olá mundo</Text>
      </Container>

    </View>
  )
}
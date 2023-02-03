import { Text, View } from "react-native";
import logoImg from '../../../assets/nubank_logo.png';

import { Container, Logo } from "./styles";
export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  )
}
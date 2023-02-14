import { ButtonProps } from "react-native";
import { Category, Container, Icon } from "./styles";
import {Feather } from '@expo/vector-icons'

interface Props {
  title: string;
}

export function CategorySelect({ title, ...rest }: Props) {
  
  return (
    <Container {...rest}>
      <Category>{title}</Category>
      
      <Feather
        name="chevron-down"
      />

    </Container>
  )
}
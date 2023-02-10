import { Category, Container, Icon } from "./styles";
import {Feather } from '@expo/vector-icons'

interface Props {
  title: string;
}

export function CategorySelect({ title }: Props) {
  
  return (
    <Container>
      <Category>{title}</Category>
      
      <Feather
        name="chevron-down"
      />

    </Container>
  )
}
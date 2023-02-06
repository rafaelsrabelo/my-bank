import { Container, Title, ButtonTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from 'react-native';
import { ButtonProps } from "react-native";

type Props = ButtonProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container
      type={type}
      {...rest}>
      <Title style={{color: type === 'PRIMARY' ? '#fff' : '#771ac9' }}>
        {title}
      </Title>
    </Container>
  )
}
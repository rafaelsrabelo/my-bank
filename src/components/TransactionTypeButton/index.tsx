import { Container, Title, Icon } from "./styles";
import {Feather } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <Container
      {...rest}
      isActive={isActive}
      type={type}
    >
      <Icon
        name={icons[type]}
        type={type}
        // size={36}
        // color="#fff"
      />
      <Title>
        {title}
      </Title>
    </Container>
  )
}
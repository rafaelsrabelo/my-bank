import { Container, Category } from './styles';
import { Feather } from '@expo/vector-icons';

interface Props {
  title: string; 
  onPress: () => void;
}

export function Select( {title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Feather name='chevron-down' color='#555' size={26} />
    </Container>
  )
}
import {Feather } from '@expo/vector-icons'
import { View } from 'react-native'
import { useAuth } from '../../hooks/useAuth'
import { Container, Message, ButtonEye, Hello } from './styles'

export function HeaderApp() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <View>
        <Hello>Olá,</Hello>
        <Message>{user.name}</Message>
      </View>
      <View>
      <ButtonEye style={{ opacity: 0.9 }} onPress={signOut}>
          <Feather
            name="log-out"
            size={24}
            color="#fff"
          />
        </ButtonEye>
      </View>
      </Container>
  )
}


import {Feather } from '@expo/vector-icons'
import { View } from 'react-native'
import { useAuth } from '../../hooks/useAuth'
import { Container, Message, ButtonEye } from './styles'
export function HeaderApp() {
  const { user, signOut } = useAuth();
  return (
    <Container>
      <View>
        <Message>Olá, { user.name }</Message>
      </View>
      <View>
      <ButtonEye style={{ opacity: 0.9 }} onPress={signOut}>
          <Feather
            name="log-out"
            size={36}
            color="#fff"
          />
        </ButtonEye>
      </View>
    </Container>
  )
}


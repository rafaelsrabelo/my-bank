import {Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { Container, Message, ButtonEye } from './styles'
export function HeaderApp () {
  return (
    <Container>
      <View>
        <Message>Olá, Rafael</Message>
      </View>
      <View>
      <ButtonEye style={{ opacity: 0.9 }}>
          <Feather
            name="eye"
            size={36}
            color="#fff"
          />
        </ButtonEye>
      </View>
    </Container>
  )
}


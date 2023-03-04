import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.ScrollView`
  padding: 0 20px;
  max-height: 84px;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const ActionButton = styled(TouchableOpacity)`
  align-items: flex-start;
  margin-right: 24px;
`

export const AreaButton = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  margin-top: 4px;
  text-align: center;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.GRAY_700};
`

import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  height: 172px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const ButtonEye = styled(TouchableOpacity)`
  width: 44;
  height: 44;
  background-color: rgba(255,255,255,0.5);
  justify-content: center;
  align-items: center;
  border-radius: 11px;
`
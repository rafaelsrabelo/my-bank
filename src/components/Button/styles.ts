import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props> `
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border: 1px solid #771ac9;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.PURPLE : theme.COLORS.WHITE };
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
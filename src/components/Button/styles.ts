import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props> `
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.PURPLE : theme.COLORS.GRAY_700 };
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
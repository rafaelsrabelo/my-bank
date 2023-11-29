import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 42px; 
  max-height: 42px; 
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PURPLE};
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
  border-radius: 6px;
  padding: 0 16px;
`
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px; 
  max-height: 56px; 
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.PURPLE};
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
  border-radius: 6px;
  padding: 16px;
`
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  padding: 18px 16px;
  margin-bottom: 20px;
`;

export const Category = styled.Text`
  font-size: 14px;
`;

export const Icon = styled(Feather)``;

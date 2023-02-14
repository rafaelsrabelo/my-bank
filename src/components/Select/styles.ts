import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  padding: 18px 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  
  margin-bottom: 30px;
  border: 1px solid ${({theme}) => theme.COLORS.PURPLE};
`;

export const Category = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
`
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.PURPLE};
  `
export const Content = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  padding: 0 20px;
`

export const Title = styled.Text`
  color: red;
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  margin-top: 50px;
`
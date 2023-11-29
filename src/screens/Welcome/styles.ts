import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  padding: 20px;
`

export const BackgroundImage = styled.Image`
  height: 350px;
  width: 100%;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  margin-bottom: auto;
`
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.PURPLE};
  `
export const Content = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  padding: 20px;
`

export const TopForm = styled.View`
padding: 20px 0px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_500};
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  margin-top: 30px;
  text-align: center;
`

export const Error = styled.Text`
  padding: 10px 0;
  color: ${({theme}) => theme.COLORS.PURPLE};
  text-align: center;
`
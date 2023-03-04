import styled from "styled-components/native";

export const Container = styled.View`
  /* flex: 1; */
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  padding:  30px 20px;
  width: 100%;
  justify-content: space-between;

  margin-top: -50px;
`

export const Item = styled.View`
/* border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700}; */

`

export const Title = styled.Text`
font-weight: bold;
  /* font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD}; */
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.WHITE};
`

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Description = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-right: 6px;

`

export const Balance = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GREEN_700};
  font-weight: bold;
`

export const Expenses = styled.Text`
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  color: red;
`



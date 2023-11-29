import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 50px;
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const HightLight = styled.View`
  padding:  20px;
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

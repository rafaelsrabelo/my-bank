import styled from "styled-components/native";

export const Container = styled.View`
  padding: 40px 20px;
`;

export const TitleForm = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_500}; 
  margin-bottom: 30px;
`

export const Categorie = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
import styled from "styled-components/native";

interface TypeProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE}; 

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.WHITE}; 
`

export const Category = styled.TouchableOpacity<TypeProps>`
  width: 100%;
  padding: 15px;

  flex-direction: row;
  align-items: center;
  background: ${({theme, isActive}) => isActive ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE };
`;

export const Name = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const Separetor = styled.View`
  height: 1px;
  width: 100%;
`

export const Content = styled.View`
  margin: 30px 0;
  padding: 0 20px;
`
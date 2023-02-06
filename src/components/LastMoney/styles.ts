import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

export type Props = {
  type: number;
}

export const Container = styled(TouchableOpacity)`
flex: 1;
padding: 0 20px;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.BLACK};
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
`

export const FlatListComponent = styled(FlatList)`
`

export const ButtonCard = styled(TouchableOpacity)`
margin-bottom: 24px;
border-bottom-width: 0.5;
border-bottom-color: ${({theme}) => theme.COLORS.GRAY_300};
`

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 8px;
`

export const Date = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`
export const Value = styled.Text<Props>`
  color: ${({ theme, type }) => type === 0 ? theme.COLORS.GREEN_700 : 'red'};
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const Hidden = styled.Text`
  margin-top: 6px;
  width: 80px;
  height: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;
`
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonEye = styled(TouchableOpacity)`
  width: 36;
  height: 36;
  background-color: rgba(255,255,255,0.5);
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`
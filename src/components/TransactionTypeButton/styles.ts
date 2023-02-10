import styled, {css} from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

interface IconProps {
  type: 'up' | 'down'
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
  width: 48%;

  flex-direction:row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 5px;

  padding: 16px;

  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.COLORS.GREEN_500};
  `}

  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({theme}) => theme.COLORS.RED_300};
  `}
`
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
export const Icon = styled(Feather) <IconProps>`
  color: ${({ theme, type }) =>
    type === 'up' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_500
};
  font-size: 24px;
  margin-right: 12px;
`
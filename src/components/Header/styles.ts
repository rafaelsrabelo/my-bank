import styled from 'styled-components/native'

export const Container = styled.View`
margin-top: 56px;
  width: 100%;
  height: 56;
  background-color: ${({theme}) => theme.COLORS.PURPLE};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 50px;
`

export const Logo = styled.Image`
  height: 46px;
  width: 55px;
`

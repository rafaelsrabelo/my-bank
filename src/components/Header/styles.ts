import styled from 'styled-components/native'

export const Container = styled.View`
margin-top: 56px;
  width: 100%;
  /* height: 56; */
  background-color: ${({theme}) => theme.COLORS.PURPLE};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const Logo = styled.Image`
  height: 124px;
  width: 124px;
`

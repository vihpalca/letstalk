import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Actions } from 'react-native-router-flux';

export default props => (
  <BackgroundImage source={require('../assets/images/bg.png')}>
    <Wrapper>
      <ContainerTop>        
        <TextWelcome>Seja Bem Vindo!</TextWelcome>
        <Logo source={require('../assets/images/logo.png')} />
      </ContainerTop>
      <ContainerBody>
        <Button title='Fazer Login' onPress={() => Actions.Login()} />
      </ContainerBody>
    </Wrapper>
  </BackgroundImage>
);

const BackgroundImage = styled.ImageBackground `
  flex: 1;
`

const Wrapper = styled.View `
  flex: 1;
  paddingVertical: 15;
  paddingHorizontal: 15;
`
const ContainerTop = styled.View `
  flex: 2;
  alignItems: center;
  marginTop: 80;
`
const ContainerBody = styled.View `
  flex: 1;
`
const TextWelcome = styled.Text `
  color: #fff;
`

const Logo = styled.Image `
  width: 60;
  height: 60;
  marginTop: 5;
`

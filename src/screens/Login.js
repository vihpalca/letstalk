import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components';
import Input from '../components/Input';
import ButtonLogin from '../components/Button';
import { modifyEmail, modifyPassword, authUser } from '../actions/AuthActions';

class formLogin extends Component {
  // console.log(props);
  _authUser = () => {
    const { email, password } = this.props;
    this.props.authUser({ email, password });
  }

  renderBtnLogin() {
    if(this.props.loadLogin) {
      return (
        <ButtonLoad size="large" />
      )
    }
    return (
      <ButtonLogin color="#115E54" title="Acessar" onPress={() => this._authUser()} />
    )
  }
  render() {
    return (
      <BackgroundImage source={require('../assets/images/bg.png')}>
        <Wrapper>
          <ContainerTop>
            <Title>Whatsapp Clone</Title>
          </ContainerTop>
          <ContainerBody>
            <Input value={this.props.email} placeholder="E-mail"  placeholderTextColor="#fff" onChangeText={text => this.props.modifyEmail(text)} />
            <Input value={this.props.password} secureTextEntry placeholder="Senha"  placeholderTextColor="#fff" onChangeText={text => this.props.modifyPassword(text)} />
            <ErrorText>{this.props.errorLogin}</ErrorText>
            <Text onPress={() => Actions.Register()}>Ainda não tem cadastro? Cadastre-se</Text>
          </ContainerBody>
          <ContainerFooter>
            {this.renderBtnLogin()}
          </ContainerFooter>
        </Wrapper>
      </BackgroundImage>
    )
  }
}
const mapStateToProps = state => (
  {
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    errorLogin: state.AuthReducer.errorLogin,
    loadLogin: state.AuthReducer.loadLogin
  }
)

export default connect(mapStateToProps, { modifyEmail, modifyPassword, authUser})(formLogin);


const Wrapper = styled.View `
  flex: 1;
  paddingVertical: 10;
  paddingHorizontal: 10;
`

const ContainerTop = styled.View `
  flex: 1;
  justifyContent: center;
  alignItems: center;
`

const ContainerBody = styled.View `
  flex: 2;
`

const ContainerFooter = styled.View `
  flex: 2;
`

const Title = styled.Text `
  fontSize: 25;
  color: #fff;
`

const Text = styled.Text `
  color: #fff;
`

const BackgroundImage = styled.ImageBackground `
  flex: 1;
`
const ErrorText = styled.Text `
  color: #ff0000;
  fontSize: 18;
`

const ButtonLoad = styled.ActivityIndicator `

`
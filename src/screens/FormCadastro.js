import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { modifyName, modifyEmail, modifyPassword, registerUser } from '../actions/AuthActions';
import Input from '../components/Input';
import ButtonLogin from '../components/Button';

class formCadastro extends Component {
  
  _registerUser() {    
    const { name, email, password } = this.props;
    this.props.registerUser({ name, email, password });
  }

  renderBtnRegister() {
    if (this.props.loadRegister) {
      return (
        <BtnLoadRegister size="large" />
      )
    }
    return(
      <ButtonLogin color="#115E54" title="Cadastrar" onPress={() => this._registerUser()} />
    )
  }
  render() {
    return (
      <Wrapper>
        <ContainerTop>
          <Title>Cadastro</Title>
        </ContainerTop>
        <ContainerBody>
          <Input value={this.props.name} placeholder="Nome" onChangeText={text => this.props.modifyName(text)} />
          <Input value={this.props.email} placeholder="E-mail" onChangeText={text => this.props.modifyEmail(text)} />
          <Input value={this.props.password} secureTextEntry placeholder="Senha" onChangeText={text => this.props.modifyPassword(text)} />
          <TextError>{this.props.errorRegister}</TextError>
        </ContainerBody>
        <ContainerFooter>
          { this.renderBtnRegister() }          
        </ContainerFooter>
      </Wrapper>
    )
  }
}
const mapStateToProps = state => (
  {
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    name: state.AuthReducer.name,
    errorRegister: state.AuthReducer.errorRegister,
    loadRegister: state.AuthReducer.loadRegister,
  }
)

export default connect(mapStateToProps, { modifyName, modifyEmail, modifyPassword, registerUser })(formCadastro);

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
`

const TextError = styled.Text `
  color: #ff0000;
  fontSize: 18;
`

const BtnLoadRegister = styled.ActivityIndicator ``

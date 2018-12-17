import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers'
import Routes from './AppNavigator';
import styled from 'styled-components';

export default class App extends Component {
  initializeFirebase() {
    const firebase = require("firebase");
   
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyACCGqkH0wOk0Ts7I9gpgVs9_xUD1knehA",
      authDomain: "letstalk-221e7.firebaseapp.com",
      databaseURL: "https://letstalk-221e7.firebaseio.com",
      projectId: "letstalk-221e7",
      storageBucket: "letstalk-221e7.appspot.com",
      messagingSenderId: "804141326599"
    };

    firebase.initializeApp(config);
  }

  componentWillMount() {
    this.initializeFirebase();
  }
  
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Wrapper>
          <Routes />
        </Wrapper>
      </Provider>
    );
  }
}

// Primeiro prâmeto da createStore são os reducers, logo após vem um objeto literar onde poderia iniciar um estado como existe INITIAL_STATE
// dentro dos reducers e o terceiro parâmetro é o applyMiddleware passando o Redux Thunk, eu estou dizendo ao meu provider para adicionar
// middlewares utilizando a lib do Redux Thunk. Com isso é possível interceptar todas as actions creators que são disparadas pela nossa store

const Wrapper = styled.View `
  flex: 1
`
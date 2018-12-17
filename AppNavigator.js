import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/FormCadastro';
import WelcomeScreen from './src/screens/Welcome';
import MainScreen from './src/screens/Main';
//Versão do router flux sugerida 3.38.0
export default props => (
  <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
    <Stack key="root">
      <Scene key='Login' component={LoginScreen} title="Login" hideNavBar={true} />
      <Scene key='Register' component={RegisterScreen} title="Register" />
      <Scene key='Welcome' component={WelcomeScreen} title="Welcome" hideNavBar={true} />
      <Scene key='Main' component={MainScreen} title="Main" hideNavBar={true} />
    </Stack>
  </Router>
)
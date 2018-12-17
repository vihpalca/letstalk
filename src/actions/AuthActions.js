import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { MODIFY_EMAIL, MODIFY_PASSOWRD, MODIFY_NAME, REGISTER_SUCCESS, 
          REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_IN_PROGRESS,
          REGISTER_IN_PROGRESS } from './types';

export const modifyEmail = (text) => { // Action Creator
  return { // Action
    type: MODIFY_EMAIL, // Toda action tem que retornar um type obrigatoriamente
    payload: text, //retorno de valor
  }
}

export const modifyPassword = (text) => { 
  return { 
    type: MODIFY_PASSOWRD, 
    payload: text, 
  }
}

export const modifyName = (text) => { 
  return { 
    type: MODIFY_NAME, 
    payload: text, 
  }
}

export const registerUser = ({ name, email, password }) => {
  return dispatch => {
    dispatch ({ type: REGISTER_IN_PROGRESS })
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
          .push({ name }).then(value => {
            registerSuccess(dispatch) 
          });

      })
      .catch(erro => registerError(erro, dispatch));    
  }

}

const registerSuccess = (dispatch) => {  
  dispatch ({ type: REGISTER_SUCCESS })
  Actions.Welcome();
}

const registerError = (erro, dispatch) => {
  dispatch ({ type: REGISTER_ERROR, payload: erro.message })
}

export const authUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_IN_PROGRESS })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( value => loginUserSuccess(dispatch) )
      .catch( err => loginUserError(err, dispatch) );
  }
}

const loginUserSuccess = (dispatch) => {
  dispatch(
    {
      type: LOGIN_SUCCESS
    }
  )

  Actions.Main();
}

const loginUserError = (error, dispatch) => {
  dispatch (
    {
      type: LOGIN_ERROR,
      payload: error.message
    }
  )
}
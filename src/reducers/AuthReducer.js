import { MODIFY_EMAIL, MODIFY_PASSOWRD, MODIFY_NAME, REGISTER_SUCCESS, 
        REGISTER_ERROR, LOGIN_ERROR, LOGIN_IN_PROGRESS, REGISTER_IN_PROGRESS } from '../actions/types';
const INITIAL_STATE = {
  name: 'Victor',
  email: 'vi@teste.com',
  password: '123456',
  errorRegister: '',
  errorLogin: '',
  loadLogin: false,
  loadRegister: false,
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case MODIFY_EMAIL:
      return { ...state, email: action.payload }
    case MODIFY_PASSOWRD:s
      return { ...state, password: action.payload }
    case MODIFY_NAME:
      return { ...state, name: action.payload }
    case REGISTER_SUCCESS:
      return { ...state, name: '', password: '', loadRegister: false }
    case REGISTER_ERROR:
      return { ...state, errorRegister: action.payload, loadRegister: false }
    case REGISTER_IN_PROGRESS:
      return { ...state, errorRegister: '', loadRegister: true }
    case LOGIN_IN_PROGRESS:
      return { ...state, loadLogin: true }
    case LOGIN_ERROR:
      return { ...state, errorLogin: action.payload, loadLogin: false }
    default:
      return state
  }
}
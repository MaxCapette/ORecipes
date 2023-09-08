import { createAction, createReducer } from '@reduxjs/toolkit';
import checkLogin from '../../middlewares/loginThunk';
import checkLocalStorage from '../../middlewares/localStorageThunk';

interface UserState {
  logged: boolean;
  credentials: {
    email: string;
    password: string;
  };
  pseudo: null | string;
  errorMessage: null | string;
  token: null | string;
}
export const initialState: UserState = {
  logged: false,
  credentials: {
    email: '',
    password: '',
  },
  pseudo: null,
  errorMessage: null,
  token: null,
};

export const setCredentials = createAction<{
  inputValue: string;
  inputName: 'email' | 'password';
}>('user/SET_CREDENTIALS');

export const logOut = createAction('user/LOGOUT');
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCredentials, (state, action) => {
      state.credentials[action.payload.inputName] = action.payload.inputValue;
    })
    .addCase(checkLogin.fulfilled, (state, action) => {
      state.logged = true;
      state.pseudo = action.payload.pseudo;
      state.errorMessage = '';
    })
    .addCase(checkLogin.rejected, (state) => {
      state.errorMessage = 'Erreur de connexion';
    })
    .addCase(logOut, (state) => {
      state.logged = false;
    })
    .addCase(checkLocalStorage.fulfilled, (state, action) => {
      state.token = action.payload;
      state.logged = true;
    });
});

export default userReducer;

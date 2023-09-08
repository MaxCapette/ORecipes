import { createAction, createReducer } from '@reduxjs/toolkit';
import checkLogin from '../../middlewares/loginThunk';

interface UserState {
  logged: boolean;
  credentials: {
    email: string;
    password: string;
  };
  pseudo: null | string;
  errorMessage: null | string;
}
export const initialState: UserState = {
  logged: false,
  credentials: {
    email: '',
    password: '',
  },
  pseudo: null,
  errorMessage: null,
};

export const setCredentials = createAction<{
  inputValue: string;
  inputName: 'email' | 'password';
}>('user/SET_CREDENTIALS');

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
    .addCase(checkLogin.rejected, (state, action) => {
      state.errorMessage = 'Erreur de connexion';
    });
});

export default userReducer;

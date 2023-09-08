import { createAction, createReducer } from '@reduxjs/toolkit';

interface UserState {
  logged: boolean;
  credentials: {
    email: string;
    password: string;
  };
}
export const initialState: UserState = {
  logged: false,
  credentials: {
    email: '',
    password: '',
  },
};

export const setCredentials = createAction<{
  inputValue: string;
  inputName: 'email' | 'password';
}>('user/SET_CREDENTIALS');

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCredentials, (state, action) => {
    state.credentials[action.payload.inputName] = action.payload.inputValue;
  });
});

export default userReducer;

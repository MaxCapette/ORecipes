import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCredentials } from '../../store/reducers/user';

function AppHeader() {
  const emailFromStore = useAppSelector(
    (state) => state.user.credentials.email
  );
  const passwordFromStore = useAppSelector(
    (state) => state.user.credentials.password
  );
  const dispatch = useAppDispatch();
  return (
    <header className="header">
      <LoginForm
        email={emailFromStore}
        password={passwordFromStore}
        changeField={(inputValue, inputName) => {
          dispatch(setCredentials({ inputValue, inputName }));
          console.log('hangeField executé');
        }}
        handleLogin={() => {
          console.log('handleLogin executé');
        }}
        handleLogout={() => {
          console.log('handleLogout executé');
        }}
        isLogged={false}
        loggedMessage="Bonjour {pseudo} vous êtes bien connecté"
      />
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
    </header>
  );
}

export default AppHeader;

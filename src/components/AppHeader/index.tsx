import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCredentials } from '../../store/reducers/user';
import checkLogin from '../../middlewares/loginThunk';

function AppHeader() {
  const emailFromStore = useAppSelector(
    (state) => state.user.credentials.email
  );
  const passwordFromStore = useAppSelector(
    (state) => state.user.credentials.password
  );
  const logged = useAppSelector((state) => state.user.logged);
  const pseudo = useAppSelector((state) => state.user.pseudo);
  const errorMessage = useAppSelector((state) => state.user.errorMessage);
  const dispatch = useAppDispatch();
  return (
    <header className="header">
      <div>
        <LoginForm
          email={emailFromStore}
          password={passwordFromStore}
          changeField={(inputValue, inputName) => {
            dispatch(setCredentials({ inputValue, inputName }));
            console.log('hangeField executé');
          }}
          handleLogin={() => {
            console.log('handleLogin executé');
            dispatch(checkLogin());
          }}
          handleLogout={() => {
            console.log('handleLogout executé');
          }}
          isLogged={logged}
          loggedMessage={`Bonjour ${pseudo} vous êtes bien connecté`}
        />
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
    </header>
  );
}

export default AppHeader;

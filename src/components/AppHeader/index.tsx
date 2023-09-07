import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';

function AppHeader() {
  return (
    <header className="header">
      <LoginForm
        email={''}
        password={''}
        changeField={function (
          value: string,
          name: 'email' | 'password'
        ): void {
          throw new Error('Function not implemented.');
        }}
        handleLogin={function (): void {
          throw new Error('Function not implemented.');
        }}
        handleLogout={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
    </header>
  );
}

export default AppHeader;

import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import Error from '../Error';

import Loading from './Loading';

import './App.scss';
import actionGetRecipes from '../../middlewares/apiMiddleware';
import { useAppDispatch } from '../../hooks/redux';

interface AppProps {
  loading?: boolean;
}

function App({ loading }: AppProps) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(actionGetRecipes());
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

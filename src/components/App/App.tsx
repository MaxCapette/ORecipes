import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchRecipesThunk } from '../../middlewares/fetchRecipesThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Home from '../Home';
import Menu from '../Menu';
import Recipe from '../Recipe';
import FavPage from '../FavPage/FavPage';
import Error from '../Error';

import Loading from './Loading';

import './App.scss';
import { getJWTToLocalStorage } from '../../localStorage/localStorage';
import checkLocalStorage from '../../middlewares/localStorageThunk';

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.recipes.isLoading);
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchRecipesThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(checkLocalStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <div className="app">
      <Menu />
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes-fav" element={<FavPage />} />
          <Route path="/recipe/:slug" element={<Recipe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

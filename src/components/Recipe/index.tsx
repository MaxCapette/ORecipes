/* eslint-disable arrow-body-style */
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Page from '../Page';
import AppHeader from '../AppHeader';

import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

import { useAppSelector } from '../../hooks/redux';
import { findRecipe } from '../../store/selectors/recipes';

import './styles.scss';

function Recipe() {
  /* useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }); */

  const { slug: slugFromURL } = useParams();
  const recipe = useAppSelector((state) =>
    findRecipe(state.recipes.list, slugFromURL)
  );

  if (!recipe) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients list={recipe.ingredients} />
        <Instructions steps={recipe.instructions} />
      </div>
    </Page>
  );
}

export default Recipe;

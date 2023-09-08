import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchFavRecipesThunk } from '../../middlewares/fetchRecipesThunk';
import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

function FavPage() {
  // au premier rendu de cette page il faudrait aller chercher les recettes pref sur l'API
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavRecipesThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // on va chercher dans le state la liste des recettes pref
  // il faudra aller remplir cette liste avec un appelajax vers le back (en filant le jwt pour qu'il sache qui on est)
  const recipes = useAppSelector((state) => state.recipes.favList);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Mes recettes préférées"
        text="Ce sont les meilleures"
        recipes={recipes}
      />
    </Page>
  );
}

export default FavPage;

import { useSelector } from 'react-redux';

import './styles.scss';
import { useAppSelector } from '../../hooks/redux';

function Menu() {
  const recipes = useAppSelector((state: any) => state.recipes.list);
  // console.log(recipes.list);

  return (
    <nav className="menu">
      <a className="menu-link menu-link--active" href="/">
        Accueil
      </a>
      {recipes.map((recipe: any) => (
        <a
          key={recipe.id}
          className="menu-link"
          href={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </a>
      ))}
    </nav>
  );
}

export default Menu;

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import './styles.scss';
import { useAppSelector } from '../../hooks/redux';

function Menu() {
  const recipes = useAppSelector((state: any) => state.recipes.list);
  // console.log(recipes.list);

  return (
    <nav className="menu">
      <Link className="menu-link" to="/">
        Accueil
      </Link>
      {recipes.map((recipe: any) => (
        <Link
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;

import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useAppSelector } from '../../hooks/redux';
import { Recipe } from '../../@types/recipe';

function Menu() {
  const recipes = useAppSelector((state: any) => state.recipes.list);
  // console.log(recipes.list);

  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) =>
          `menu-link ${isActive && 'menu-link--active'}`
        }
        to="/"
      >
        Accueil
      </NavLink>
      {recipes.map((recipe: Recipe) => (
        <NavLink
          key={recipe.id}
          className={({ isActive }) =>
            `menu-link ${isActive && 'menu-link--active'}`
          }
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;

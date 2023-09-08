import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useAppSelector } from '../../hooks/redux';
import { Recipe } from '../../@types/recipe';

function Menu() {
  const recipes = useAppSelector((state) => state.recipes.list);
  // console.log(recipes.list);
  const logged = useAppSelector((state) => state.user.logged);

  return (
    <nav className="menu">
      {logged && (
        <NavLink
          className={({ isActive }) =>
            `menu-link ${isActive && 'menu-link--active'}`
          }
          to="/recipes-fav"
        >
          Mes recettes préférées
        </NavLink>
      )}
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

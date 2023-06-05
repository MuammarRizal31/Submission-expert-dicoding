import DefaultPage from '../views/pages/dafault-page';
import Detail from '../views/pages/detail';
import FavoritePage from '../views/pages/favorite-page';

const routes = {
  '/': DefaultPage,
  '/detail/:id': Detail,
  '/favorite': FavoritePage,
};

export default routes;

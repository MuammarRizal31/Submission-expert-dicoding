import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../template-creator';

const FavoritePage = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Favorite Restaurant</h2>
            <div id="favorite" class="favorite">
       
            </div>
          </div>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#favorite');

    if (restaurant.length === 0) {
      restaurantContainer.innerHTML = `
        Empty favorite
      `;
    }
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default FavoritePage;

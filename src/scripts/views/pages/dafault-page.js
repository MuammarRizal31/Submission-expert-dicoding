import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../template-creator';

const DefaultPage = {
  async render() {
    return `

    <div class="restaurant" id="restaurant">
    <h2>Daftar Restoran</h2>
      <div class="row"></div>
    </div>`;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.DefaultPage();
    const restaurantContainer = document.querySelector('.row');
    restaurant.forEach((e) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(e);
    });
  },
};

export default DefaultPage;

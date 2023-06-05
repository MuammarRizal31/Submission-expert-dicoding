import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async DefaultPage() {
    const response = await fetch(API_ENDPOINT.default_page);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default RestaurantSource;

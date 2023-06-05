class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurant, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoritRestaurant = favoriteRestaurant;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurant(latestQuery);
    });
  }

  _showFoundRestaurant(restaurants) {
    this._view.showRestaurants(restaurants);
  }

  async _searchRestaurant(latestQuery) {
    this._latestQuery = latestQuery;

    const foundRestaurant = await this._favoritRestaurant.searchRestaurant(this.latestQuery);

    this._showFoundRestaurant(foundRestaurant);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;

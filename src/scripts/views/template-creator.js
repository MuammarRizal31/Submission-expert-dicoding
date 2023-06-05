import CONFIG from '../globals/config';

const detailRestaurant = (restaurant) => `    
<div class="restaurant">
<h1>Detail Restoran</h2>
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" crossorigin="anonymous" alt="${restaurant.title}" data-src="${CONFIG.BASE_IMAGE_URL.MEDIUM_RESOLUTION + restaurant.pictureId}" />
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <h5>Kota : ${restaurant.city}</h5>
      <h5>Alamat : ${restaurant.address}</h5>
      <p>${restaurant.description} </p>
    </div>
  </div>
</div>

<div class="menus">
  <div class="menuHeader">
    <h2>Menu</h2>
  </div>
  <div class="menuContent">
    <div class="menuFoods">
    <h4>Makanan</h4>
      <ul class="foods">

      </ul>
    </div>
    <div class="menuDrinks">
    <h4>Minuman</h4>
      <ul class="drinks">
      
      </ul>
    </div>
  </div>
</div>

<div class="customerReviews">
  <div class="row cardsCustomer">
    
  </div>
</div>
`;

const customerReviewss = ({ customerReviews }) => {
  let cards = '';
  customerReviews.forEach((e) => {
    cards += `
    <div class="cards">
      <h3>Nama : ${e.name}</h3>
      <h4>Tanggal : ${e.date}</h4>
      <p>Pesan : ${e.review}</p>
    </div>
    `;
  });
  return cards;
};
const drinksMenu = ({ menus }) => {
  const drinksRestaurant = menus.drinks;
  let cards = '';
  drinksRestaurant.forEach((e) => {
    cards += `
      <li>${e.name}</li>
    `;
  });
  return cards;
};
const menusRestaurant = ({ menus }) => {
  const foodsRestaurant = menus.foods;
  let cards = '';
  foodsRestaurant.forEach((e) => {
    cards += `
      <li>${e.name}</li>
    `;
  });
  return cards;
};

const createRestaurantItemTemplate = (restaurant) => `
<div class="cards">
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL.LARGE_RESOLUTION + restaurant.pictureId}" alt="${restaurant.name}"/>
<div class="deskripsi">
  <h2 class="judul">
  <a href="/#/detail/${restaurant.id}"/>${restaurant.name}
  </h2>
  <p>${restaurant.description}</p>
</div>
</div>`;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  detailRestaurant,
  menusRestaurant,
  drinksMenu,
  customerReviewss,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

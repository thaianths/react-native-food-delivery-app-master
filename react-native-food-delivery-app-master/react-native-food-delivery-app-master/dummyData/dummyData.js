import {icons, images} from '../constants';

// Dummy data
export const initialCurrentLocation = {
  streetName: 'Islamabad',
  gps: {
    latitude: 33.6163232,
    longitude: 72.9460246,
  },
};

export const categoryData = [
  {
    id: 1,
    name: 'Appetizer',
    icon: icons.fries,
  },
  {
    id: 2,
    name: 'Sides',
    icon: icons.salad,
  },
  {
    id: 3,
    name: 'Beverages',
    icon: icons.drink,
  },
  {
    id: 4,
    name: 'Dips',
    icon: icons.noodle,
  },
  {
    id: 5,
    name: 'Chicken',
    icon: icons.hamburger,
  },
  {
    id: 6,
    name: 'Lunch Deals',
    icon: icons.pizza,
  },
  {
    id: 7,
    name: 'Midnight Deals',
    icon: icons.riceBowl,
  },
  {
    id: 8,
    name: 'Extras',
    icon: icons.sushi,
  },
  {
    id: 9,
    name: 'FP Menu',
    icon: icons.donut,
  },
  {
    id: 10,
    name: 'Special Deals',
    icon: icons.hotdog,
  },
];

// price rating
export const affordable = 1;
export const fairPrice = 2;
export const expensive = 3;

export const restaurantData = [
  {
    id: 1,
    name: 'Burger King',
    rating: 4.8,
    categories: [5, 7],
    priceRating: affordable,
    photo: images.burgerRestaurant,
    duration: '30 - 45 min',
    location: {
      latitude: 33.6464301,
      longitude: 72.8004813,
    },
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
    menu: [
      {
        menuId: 1,
        name: 'Crispy Chicken Burger',
        photo: images.crispyChickenBurger,
        description: 'Burger with crispy chicken, cheese and lettuce',
        calories: 200,
        price: 10,
      },
      {
        menuId: 2,
        name: 'Crispy Chicken Burger with Honey Mustard',
        photo: images.honeyMustardChickenBurger,
        description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
        calories: 250,
        price: 15,
      },
      {
        menuId: 3,
        name: 'Crispy Baked French Fries',
        photo: images.backedFries,
        description: 'Crispy Baked French Fries',
        calories: 194,
        price: 8,
      },
    ],
  },
  {
    id: 2,
    name: '14th Street Pizza',
    rating: 4.8,
    categories: [2, 4, 6],
    priceRating: expensive,
    photo: images.pizzaRestaurant,
    duration: '15 - 20 min',
    location: {
      latitude: 33.6839177,
      longitude: 73.006025,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Jackson',
    },
    menu: [
      {
        menuId: 4,
        name: 'Hawaiian Pizza',
        photo: images.hawaiianPizza,
        description: 'Canadian bacon, homemade pizza crust, pizza sauce',
        calories: 250,
        price: 15,
      },
      {
        menuId: 5,
        name: 'Tomato & Basil Pizza',
        photo: images.pizza,
        description:
          'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
        calories: 250,
        price: 20,
      },
      {
        menuId: 6,
        name: 'Tomato Pasta',
        photo: images.tomatoPasta,
        description: 'Pasta with fresh tomatoes',
        calories: 100,
        price: 10,
      },
      {
        menuId: 7,
        name: 'Mediterranean Chopped Salad ',
        photo: images.salad,
        description: 'Finely chopped lettuce, tomatoes, cucumbers',
        calories: 100,
        price: 10,
      },
    ],
  },
  {
    id: 3,
    name: 'Sosig - Premier Hotdogs',
    rating: 4.8,
    categories: [3],
    priceRating: expensive,
    photo: images.hotDogRestaurant,
    duration: '20 - 25 min',
    location: {
      latitude: 33.5510631,
      longitude: 73.12339,
    },
    courier: {
      avatar: images.avatar_3,
      name: 'James',
    },
    menu: [
      {
        menuId: 8,
        name: 'Chicago Style Hot Dog',
        photo: images.chicagoHotDog,
        description: 'Fresh tomatoes, all beef hot dogs',
        calories: 100,
        price: 20,
      },
    ],
  },
  {
    id: 4,
    name: 'Tokyo Sushi Restaurant',
    rating: 4.8,
    categories: [8],
    priceRating: expensive,
    photo: images.japaneseRestaurant,
    duration: '10 - 15 min',
    location: {
      latitude: 33.6233504,
      longitude: 73.0151007,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'John',
    },
    menu: [
      {
        menuId: 9,
        name: 'Sushi sets',
        photo: images.sushi,
        description: 'Fresh salmon, sushi rice, fresh juicy avocado',
        calories: 100,
        price: 50,
      },
    ],
  },
  {
    id: 5,
    name: 'Asian Wok',
    rating: 4.8,
    categories: [1, 2],
    priceRating: affordable,
    photo: images.noodleShop,
    duration: '15 - 20 min',
    location: {
      latitude: 33.5283303,
      longitude: 73.0958514,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'John',
    },
    menu: [
      {
        menuId: 10,
        name: 'Kolo Mee',
        photo: images.koloMee,
        description: 'Noodles with char siu',
        calories: 200,
        price: 5,
      },
      {
        menuId: 11,
        name: 'Sarawak Laksa',
        photo: images.sarawakLaksa,
        description: 'Vermicelli noodles, cooked prawns',
        calories: 300,
        price: 8,
      },
      {
        menuId: 12,
        name: 'Nasi Lemak',
        photo: images.nasiLemak,
        description: 'A traditional Malay rice dish',
        calories: 300,
        price: 8,
      },
      {
        menuId: 13,
        name: 'Biryani with Mutton',
        photo: images.nasiBriyaniMutton,
        description: 'A traditional Sindhi rice dish with mutton',
        calories: 300,
        price: 8,
      },
    ],
  },
  {
    id: 6,
    name: 'Shani Dessets',
    rating: 4.9,
    categories: [9, 10],
    priceRating: affordable,
    photo: images.kekLapisShop,
    duration: '35 - 40 min',
    location: {
      latitude: 33.5284581,
      longitude: 73.0280003,
    },
    courier: {
      avatar: images.avatar_1,
      name: 'Jessie',
    },
    menu: [
      {
        menuId: 12,
        name: 'Malaysian Iced Tea',
        photo: images.tehCPeng,
        description: 'Three Layer Teh C Peng',
        calories: 100,
        price: 2,
      },
      {
        menuId: 13,
        name: 'ABC Ice Kacang',
        photo: images.iceKacang,
        description: 'Shaved Ice with red beans',
        calories: 100,
        price: 3,
      },
      {
        menuId: 14,
        name: 'Layer Cake',
        photo: images.kekLapis,
        description: 'Sarawak layered cake',
        calories: 300,
        price: 20,
      },
    ],
  },
];

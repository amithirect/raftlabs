export enum AppImageType {
  Banner = "banner",
}

export const FOOD_CATEGORIES = [
  "Burgers",
  "Fries",
  "Snacks",
  "Salads",
  "Pizzas",
  "Tacos",
  "Nachos",
  "Deserts",
];

export const EMPTY_CART_STATE: Cart = {
  items: [],
  offers: [],
};

export const EMPTY_USER_PROFILE_STATE: UserProfile = {
  fullname: "",
  house: "",
  street: "",
  pincode: "",
  email: "",
  phone: "",
};

export const EMPTY_APP_STATE: AppInfo = {
  cart: EMPTY_CART_STATE,
  userProfile: EMPTY_USER_PROFILE_STATE,
};

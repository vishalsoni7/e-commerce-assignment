import { productsData, categoryData } from "./data";

const wishlistFromLocalStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];

const loggedFromLocalStorage = localStorage.getItem("logged")
  ? JSON.parse(localStorage.getItem("logged"))
  : false;

export const initialState = {
  products: productsData,
  category: categoryData,
  cart: cartFromLocalStorage,
  wishlist: wishlistFromLocalStorage,
  user: userFromLocalStorage,
  logged: loggedFromLocalStorage,
};

export const ecReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      const itemForCart = state.products.find((item) => item.id === payload);

      return {
        ...state,
        cart: [...state.cart, itemForCart],
      };

    case "ADD_TO_WISHLISH":
      const itemForWishList = state.products.find(
        (item) => item.id === payload
      );

      return {
        ...state,
        wishlist: [...state.wishlist, itemForWishList],
      };

    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter((item) => item.id !== payload);

      return {
        ...state,
        cart: filteredCart,
      };

    case "REMOVE_FROM_WISHLIST":
      const filteredWishlist = state.wishlist.filter(
        (item) => item.id !== payload
      );

      return {
        ...state,
        wishlist: filteredWishlist,
      };

    case "LOGIN":
      return {
        ...state,
        user: payload,
      };

    case "LOGGED":
      return {
        ...state,
        logged: payload,
      };

    case "LOGOUT":
      return {
        ...state,
        logged: false,
        wishlist: [],
        cart: [],
        user: {},
      };

    default:
      return state;
  }
};

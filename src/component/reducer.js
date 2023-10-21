import { productsData, categoryData } from "../data";

// Retrieve wishlist data from local storage, or use an empty array if not present
const wishlistFromLocalStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

// Retrieve cart data from local storage, or use an empty array if not present
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// Retrieve user data from local storage, or use an empty object if not present
const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];

// Retrieve login status from local storage, defaulting to false if not present
const loggedFromLocalStorage = localStorage.getItem("logged")
  ? JSON.parse(localStorage.getItem("logged"))
  : false;

// Define the initial state for your application's context
export const initialState = {
  products: productsData,
  category: categoryData,
  cart: cartFromLocalStorage,
  wishlist: wishlistFromLocalStorage,
  user: userFromLocalStorage,
  logged: loggedFromLocalStorage,
};

// Define the reducer function to manage state changes
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

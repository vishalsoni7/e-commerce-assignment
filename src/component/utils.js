import {
  addCart,
  addWishList,
  removeCartToast,
  removeWishlistToast,
  logOut,
} from "./toast";

import { login } from "./apicalls";

// Function to add an item to the cart
export const handleAddtoCart = (ecDispatch, id) => {
  ecDispatch({ type: "ADD_TO_CART", payload: id });
  addCart();
};

// Function to add an item to the wishlist
export const handleAddtoWishlish = (ecDispatch, id) => {
  ecDispatch({ type: "ADD_TO_WISHLISH", payload: id });
  addWishList();
};

// Function to remove an item from the wishlist
export const removefromWishlist = (ecDispatch, id) => {
  ecDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  removeWishlistToast();
};

// Function to remove an item from the cart
export const removeFromCart = (ecDispatch, id) => {
  ecDispatch({ type: "REMOVE_FROM_CART", payload: id });
  removeCartToast();
};

// Function to handle user logout
export const handleLogout = (ecDispatch, navigate) => {
  ecDispatch({ type: "LOGOUT" });
  logOut();
  navigate("/");
};

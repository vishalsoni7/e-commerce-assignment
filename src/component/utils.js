import {
  addCart,
  addWishList,
  removeCartToast,
  removeWishlistToast,
  logOut,
} from "./toast";

// Function to add an item to the cart
export const handleAddtoCart = (ecDispatch, _id) => {
  ecDispatch({ type: "ADD_TO_CART", payload: _id });
  addCart();
};

// Function to add an item to the wishlist
export const handleAddtoWishlish = (ecDispatch, _id) => {
  ecDispatch({ type: "ADD_TO_WISHLISH", payload: _id });
  addWishList();
};

// Function to remove an item from the wishlist
export const removefromWishlist = (ecDispatch, _id) => {
  ecDispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id });
  removeWishlistToast();
};

// Function to remove an item from the cart
export const removeFromCart = (ecDispatch, _id) => {
  ecDispatch({ type: "REMOVE_FROM_CART", payload: _id });
  removeCartToast();
};

// Function to handle user logout
export const handleLogout = (ecDispatch, navigate) => {
  ecDispatch({ type: "LOGOUT" });
  logOut();
  navigate("/");
};

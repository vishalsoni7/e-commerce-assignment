import {
  addCart,
  addWishList,
  removeCartToast,
  removeWishlistToast,
  logOut,
} from "./toast";

export const handleAddtoCart = (ecDispatch, id) => {
  ecDispatch({ type: "ADD_TO_CART", payload: id });
  addCart();
};

export const handleAddtoWishlish = (ecDispatch, id) => {
  ecDispatch({ type: "ADD_TO_WISHLISH", payload: id });
  addWishList();
};

export const removefromWishlist = (ecDispatch, id) => {
  ecDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  removeWishlistToast();
};

export const removeFromCart = (ecDispatch, id) => {
  ecDispatch({ type: "REMOVE_FROM_CART", payload: id });
  removeCartToast();
};

export const handleLogout = (ecDispatch, navigate) => {
  ecDispatch({ type: "LOGOUT" });
  logOut();
  navigate("/");
};

import toast, { Toaster } from "react-hot-toast";

export const addWishList = () =>
  toast.success("Added in Wishlist", {
    style: {
      icon: "👏",
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });

export const addCart = () =>
  toast.success("Added in Cart", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });

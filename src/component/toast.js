import toast from "react-hot-toast";

export const addWishList = () =>
  toast.success("Added in Wishlist", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });

export const addCart = () => {
  toast.success("Added in Cart", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });
};

export const loginToast = () => {
  toast.success("Login Successfully", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });
};

export const loginErrorToast = () => {
  toast.error("No user found or Wrong password!", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });
};

export const registerToast = (data) => {
  toast.success(`${data.userName} Registered Successfully`, {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });
};

export const registerErrorToast = () => {
  toast.error("Missing fields or something went wrong!", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });
};

export const removeCartToast = () => {
  toast.error("Removed from cart!", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });
};

export const removeWishlistToast = () => {
  toast.error("Removed from wishlist!", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });
};

export const logOut = () => {
  toast.error("Logout Successfully!", {
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "#222",
      fontSize: "small",
    },
  });
};

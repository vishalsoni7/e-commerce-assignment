import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ECContext } from "../context/ECContext";

export const User = () => {
  const navigate = useNavigate();
  const {
    ecState: { user },
    ecDispatch,
  } = useContext(ECContext);

  const handleLogout = () => {
    localStorage.removeItem("wishlist");
    localStorage.removeItem("cart");
    localStorage.removeItem("user");
    localStorage.removeItem("logged");
    ecDispatch({ type: "LOG_OUT", payload: false });
    navigate("/login");
  };

  return (
    <div className="user-parent-div">
      <img src="user.svg" alt="user" />

      <h4>Name: {user?.userName} </h4>

      <p>Email: {user?.email} </p>
      <p>User: {user?.phoneNumber} </p>
      <p>Address: {user?.address} </p>

      <button onClick={handleLogout}> Log Out </button>
    </div>
  );
};

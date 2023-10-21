import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ECContext } from "../context/ECContext";

import { handleLogout } from "../component/utils";

export const User = () => {
  const navigate = useNavigate();
  const {
    ecState: { user },
    ecDispatch,
  } = useContext(ECContext);

  return (
    <div className="user-parent-div">
      <img src="user.svg" alt="user" />

      <h4>Name: {user?.userName} </h4>

      <p>Email: {user?.email} </p>
      <p>User: {user?.phoneNumber} </p>
      <p>Address: {user?.address} </p>

      <button onClick={() => handleLogout(ecDispatch, navigate("/login"))}>
        {" "}
        Log Out{" "}
      </button>
    </div>
  );
};

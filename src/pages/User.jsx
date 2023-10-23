import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ECContext } from "../context/ECContext";

// Import the handleLogout function for handling user logout
import { handleLogout } from "../component/utils";

// Component for rendering the User profile page
export const User = () => {
  // Access user information and the dispatch function from the context
  const {
    ecState: { user },
    ecDispatch,
  } = useContext(ECContext);

  const navigate = useNavigate();

  return (
    <div className="user-parent-div">
      <img src="user.svg" alt="user" />

      <h4>Name: {user?.userName} </h4>
      <p>Email: {user?.email} </p>
      <p>Phone Number: {user?.phoneNumber} </p>

      <button onClick={() => handleLogout(ecDispatch, navigate)}>
        {" "}
        Log Out{" "}
      </button>
    </div>
  );
};

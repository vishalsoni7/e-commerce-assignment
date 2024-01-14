import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { ECContext } from "../context/ECContext";

// Import the login function for making login API calls
import { login } from "../component/apicalls";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

// Component for rendering the Login page
export const Login = () => {
  // Access the application context and useNavigate for enabling navigation
  const { ecDispatch } = useContext(ECContext);
  const navigate = useNavigate();

  // Define local state to manage input fields
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // Function to handle input changes and update the state
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // Function to perform the login process
  const letMeIn = (e) => {
    e.preventDefault();
    login(ecDispatch, input, navigate);
    setInput({
      email: "",
      password: "",
    });
  };

  // Function for guest login
  const iAmGuest = (e) => {
    e.preventDefault();
    login(
      ecDispatch,
      { email: "user@example.com", password: "newpassword" },
      navigate
    );
  };

  return (
    <div className="login-parent-div">
      <div className="login-container">
        <h2>
          <FontAwesomeIcon icon={faRightToBracket} /> Login
        </h2>

        <p className="left-p">Username</p>
        <input
          name="email"
          placeholder="something@gmail.com"
          type="text"
          onChange={handleInput}
        />

        <p className="left-p"> Password </p>
        <input
          name="password"
          placeholder="***********"
          type="password"
          onChange={handleInput}
        />

        <button onClick={letMeIn}> Let Me In </button>

        <p onClick={() => navigate("/register")}> Create New Account </p>

        <p onClick={iAmGuest}> Guest Login </p>
      </div>
    </div>
  );
};

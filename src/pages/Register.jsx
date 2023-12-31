import { useState, useContext } from "react";
import { ECContext } from "../context/ECContext";

import { useNavigate } from "react-router-dom";

// Import the register function for making registration API calls
import { resgister } from "../component/apicalls";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

// Component for rendering the registration page
export const Register = () => {
  // Access the application context and navigation function
  const { ecDispatch } = useContext(ECContext);
  const navigate = useNavigate();

  // Define local state to manage input fields
  const [input, setInput] = useState({
    email: "",
    password: "",
    profilePic: "",
    userName: "",
    phoneNumber: "",
    address: "",
  });

  // Function to handle input changes and update the state
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // Function to perform the registration process
  const letMeIn = async (e) => {
    e.preventDefault();
    await resgister(ecDispatch, input, navigate);
    setInput({
      email: "",
      password: "",
      profilePic: "",
      userName: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="login-parent-div">
      <div className="login-container">
        <h2>
          <FontAwesomeIcon icon={faRightToBracket} /> Register
        </h2>

        <p className="left-p">Email</p>
        <input
          name="email"
          placeholder="something@gmail.com"
          type="text"
          onChange={handleInput}
        />

        <p className="left-p">Password </p>
        <input
          name="password"
          placeholder="***********"
          type="password"
          onChange={handleInput}
        />

        <p className="left-p">Profile Picture</p>
        <input
          name="profilePic"
          placeholder="profile url"
          type="url"
          onChange={handleInput}
        />

        <p className="left-p">Username</p>
        <input
          name="userName"
          placeholder="tonystark"
          type="text"
          onChange={handleInput}
        />

        <p className="left-p">Phone</p>
        <input
          name="phoneNumber"
          placeholder="Mobile"
          type="tel"
          onChange={handleInput}
        />

        <button onClick={letMeIn}> Let Me In </button>

        <p onClick={() => navigate("/login")}> Login </p>
      </div>
    </div>
  );
};

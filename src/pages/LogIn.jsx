import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { ECContext } from "../context/ECContext";

import { login } from "../component/apicalls";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export const Login = () => {
  const { ecDispatch } = useContext(ECContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const letMeIn = async (e) => {
    e.preventDefault();
    await login(ecDispatch, input, navigate);
    setInput({
      email: "",
      password: "",
    });
  };

  const iAmGuest = async (e) => {
    e.preventDefault();
    await login(
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

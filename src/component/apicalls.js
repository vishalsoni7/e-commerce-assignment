import axios from "axios";

// Import toast-related functions for displaying messages
import {
  loginErrorToast,
  loginToast,
  registerToast,
  registerErrorToast,
} from "./toast";

// Function to handle user login
export const login = async (ecDispatch, userDetails, navigate) => {
  try {
    const response = await axios.post(
      "https://tripadvisor.vishalsoni7.repl.co/destinations/signin",
      userDetails
    );
    ecDispatch({ type: "LOGIN", payload: response.data });
    ecDispatch({ type: "LOGGED", payload: true });
    loginToast();
    navigate("/");
  } catch (error) {
    console.log({ error });
    loginErrorToast();
  }
};

// Function to handle user registration
export const resgister = async (ecDispatch, userDetails, navigate) => {
  try {
    const response = await axios.post(
      "https://tripadvisor.vishalsoni7.repl.co/destinations/signup",
      userDetails
    );
    ecDispatch({ type: "LOGIN", payload: response.data });
    ecDispatch({ type: "LOGGED", payload: true });
    registerToast(response.data);
    navigate("/");
  } catch (error) {
    console.log({ error });
    registerErrorToast();
  }
};

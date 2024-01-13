import axios from "axios";

// Import toast-related functions for displaying messages
import {
  loginErrorToast,
  loginToast,
  registerToast,
  registerErrorToast,
} from "./toast";

const baseURL =
  "https://2a4c31e6-154e-4cd2-929b-c02f67222e6c-00-1ja4cwlzj3j4f.pike.replit.dev";

// Function to handle user login
export const login = async (ecDispatch, userDetails, navigate) => {
  try {
    const response = await axios.post(`${baseURL}/login`, userDetails);
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
    const response = await axios.post(`${baseURL}/register`, userDetails);
    ecDispatch({ type: "LOGIN", payload: response.data });
    ecDispatch({ type: "LOGGED", payload: true });
    registerToast(response.data);
    navigate("/");
  } catch (error) {
    console.log({ error });
    registerErrorToast();
  }
};

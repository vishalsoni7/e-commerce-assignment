import axios from "axios";

// Import toast-related functions for displaying messages
import {
  loginErrorToast,
  loginToast,
  registerToast,
  registerErrorToast,
} from "./toast";

const baseURL =
  "https://b62b4570-ad3d-4426-a0e4-777479e42f0e-00-x5gcozflsqux.asia-b.replit.dev";

// Function to handle user login
export const login = async (ecDispatch, userDetails, navigate) => {
  try {
    const response = await axios.post(`${baseURL}/login`, userDetails, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    ecDispatch({ type: "LOGIN", payload: response.data });
    ecDispatch({ type: "LOGGED", payload: true });
    loginToast();
    navigate("/");
  } catch (error) {
    console.log(error);
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

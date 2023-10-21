import axios from "axios";

import {
  loginErrorToast,
  loginToast,
  registerToast,
  registerErrorToast,
} from "./toast";

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

export const resgister = async (ecDispatch, userDetails, navigate) => {
  try {
    const response = await axios.post(
      "https://tripadvisor.vishalsoni7.repl.co/destinations/signup",
      userDetails
    );
    ecDispatch({ type: "LOGIN", payload: response.data });
    registerToast(response.data);
    navigate("/");
  } catch (error) {
    console.log({ error });
    registerErrorToast();
  }
};

import { Route, Routes } from "react-router-dom";

import { Cart } from "../pages/Cart";
import { User } from "../pages/User";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/LogIn";
import { Products } from "../pages/Product";
import { Register } from "../pages/Register";
import { Wishlist } from "../pages/Wishlist";

import { RequireAuth } from "./requireauth";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Landing />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              {" "}
              <Wishlist />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              {" "}
              <Products />{" "}
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

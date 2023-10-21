import { useContext } from "react";
import { ECContext } from "../context/ECContext";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHouse,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const {
    ecState: { user },
  } = useContext(ECContext);
  const navigate = useNavigate();
  return (
    <div className="header-parent-div">
      <h2 onClick={() => navigate("/")}> My Shoes </h2>
      <div className="header-child-div">
        <p>New & Featured</p> <p>Men</p> <p>Women</p> <p>Sale</p>{" "}
        <p>Customise</p> <p>SNKRS</p>
      </div>

      <div className="header-child-div">
        <p onClick={() => navigate("/user")} className="user-header">
          {" "}
          👋🏻 @{user?.userName}{" "}
        </p>

        <h3 onClick={() => navigate("/")}>
          {" "}
          <FontAwesomeIcon icon={faHouse} />{" "}
        </h3>
        <h3 onClick={() => navigate("/wishlist")}>
          <FontAwesomeIcon icon={faHeart} />{" "}
        </h3>
        <h3 onClick={() => navigate("/cart")}>
          <FontAwesomeIcon icon={faCartShopping} />{" "}
        </h3>
      </div>
    </div>
  );
};

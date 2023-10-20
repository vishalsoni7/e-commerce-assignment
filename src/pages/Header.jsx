import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHouse,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header-parent-div">
      <h2> My Shoes </h2>
      <div className="header-child-div">
        <p>New & Featured</p> <p>Men</p> <p>Women</p> <p>Kids</p> <p>Sale</p>{" "}
        <p>Customise</p> <p>SNKRS</p>
      </div>

      <div className="header-child-div">
        <h3>
          {" "}
          <FontAwesomeIcon icon={faHouse} />{" "}
        </h3>
        <h3>
          <FontAwesomeIcon icon={faHeart} />{" "}
        </h3>
        <h3>
          <FontAwesomeIcon icon={faCartShopping} />{" "}
        </h3>
      </div>
    </div>
  );
};

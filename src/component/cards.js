import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

// Component for rendering a category card
export const CategoryCard = ({ category, images }) => {
  return (
    <div className="card">
      {images.map((image, index) => (
        <img key={index} src={image} alt={category} />
      ))}{" "}
      <div className="card-info">
        <h3 className="category">{category}</h3>
      </div>
    </div>
  );
};

// Component for rendering a product card
export const ProductCart = ({
  _id,
  ideal,
  name,
  price,
  image,
  addCart,
  addWishList,
}) => {
  return (
    <div>
      <div className="products-cart">
        <NavLink className="link" to={`/product/${_id}`}>
          <img src={image} alt={image} />
          <span className="span"> {ideal} </span>
          <p>{name} </p>
          <span> $ {price} </span>{" "}
        </NavLink>
        <div className="button-div">
          <button
            onClick={() => addWishList(_id)}
            className="products-cart-button1"
          >
            Wishlist{" "}
          </button>
          <button
            onClick={() => addCart(_id)}
            className="products-cart-button2"
          >
            Buy Now{" "}
          </button>{" "}
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

// Component for rendering a cart card
export const Card = ({ item, onRemove }) => {
  return (
    <div className="cart-card" key={item?._id}>
      <img src={item?.image} alt={item?.name} />

      <div>
        <h3> {item?.name} </h3>
        <p> Ideal: {item?.ideal} </p>
        <p> MRP: {item?.price} </p>
        <br />
        <button onClick={() => onRemove(item?._id)}> Remove </button>
      </div>
    </div>
  );
};

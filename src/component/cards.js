import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";

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

export const ProductCart = ({
  id,
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
        <NavLink className="link" to={`/product/${id}`}>
          <img src={image} alt={image} />
          <span className="span"> {ideal} </span>
          <p>{name} </p>
          <span> $ {price} </span>{" "}
        </NavLink>
        <div className="button-div">
          <button
            onClick={() => addWishList(id)}
            className="products-cart-button1"
          >
            Wishlist{" "}
          </button>
          <button onClick={() => addCart(id)} className="products-cart-button2">
            Buy Now{" "}
          </button>{" "}
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export const Card = ({ item, onRemove }) => {
  return (
    <div className="cart-card" key={item?.id}>
      <img src={item?.image} alt={item?.name} />

      <div>
        <h3> {item?.name} </h3>
        <p> Ideal: {item?.ideal} </p>
        <p> MRP: {item?.price} </p>
        <br />
        <button onClick={() => onRemove(item?.id)}> Remove </button>
      </div>
    </div>
  );
};

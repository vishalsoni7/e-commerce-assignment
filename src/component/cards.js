import { addWishList, addCart } from "./toast";

import { Toaster } from "react-hot-toast";

export const CategoryCard = ({ id, image, category, price }) => {
  return (
    <div className="card">
      {image.map((item) => (
        <img src={item} alt={item} />
      ))}

      <div className="card-info">
        <h3 className="category">{category}</h3>
        <span className="price"> Starts at {price}</span>
      </div>
    </div>
  );
};

export const ProductCart = ({ ideal, name, price, image }) => {
  return (
    <div className="product-card-div ">
      <div className="products-cart ">
        <img src={image} />
        <span className="span"> {ideal} </span>
        <p>{name} </p>
        <span> $ {price} </span>

        <div className="button-div">
          <button onClick={addWishList} className="products-cart-button1">
            {" "}
            Wishlist{" "}
          </button>
          <button onClick={addCart} className="products-cart-button2">
            {" "}
            Buy Now{" "}
          </button>{" "}
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

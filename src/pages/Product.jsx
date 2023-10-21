import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ECContext } from "../context/ECContext";

// Import utility functions for adding items to cart and wishlist
import { handleAddtoCart, handleAddtoWishlish } from "../component/utils";

// Component for rendering the Product details page
export const Products = () => {
  // Access the application state, dispatch function, and route parameters
  const {
    ecState: { products },
    ecDispatch,
  } = useContext(ECContext);
  const { productId } = useParams();

  // Find the product with the matching ID from the route parameters
  const findProduct = products.find((item) => item.id === +productId);

  return (
    <div className="product-parent-div">
      <img src={findProduct?.image} alt={findProduct?.image} />

      <div className="product-child-div">
        <h2> {findProduct?.name} </h2> <p> Ideal: {findProduct?.ideal} </p>
        <p> MRP: {findProduct?.price} </p>
        <span> incl. of taxes (Also includes all applicable duties) </span>
        <br />
        <>
          {findProduct?.shoeSize.map((s, i) => (
            <button key={i} className="size">
              {" "}
              {s}{" "}
            </button>
          ))}{" "}
        </>
        <p> {findProduct?.description} </p>
        <div>
          <button
            onClick={() => handleAddtoCart(ecDispatch, findProduct?.id)}
            className="button-hoverAndFoucusBtn"
          >
            {" "}
            Add to Cart{" "}
          </button>
          <button
            onClick={() => handleAddtoWishlish(ecDispatch, findProduct?.id)}
            className="button-outlineBtn"
          >
            {" "}
            Wishlist{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

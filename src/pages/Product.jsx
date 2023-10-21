import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ECContext } from "../context/ECContext";

export const Products = () => {
  const {
    ecState: { products },
  } = useContext(ECContext);
  const { productId } = useParams();

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
          {findProduct?.shoeSize.map((s) => (
            <button className="size"> {s} </button>
          ))}{" "}
        </>
        <p> {findProduct?.description} </p>
        <div>
          <button className="button-hoverAndFoucusBtn"> Add to Cart </button>
          <button className="button-outlineBtn"> Wishlist </button>
        </div>
      </div>
    </div>
  );
};

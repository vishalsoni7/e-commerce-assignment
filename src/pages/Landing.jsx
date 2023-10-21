import { useContext } from "react";
import { ECContext } from "../context/ECContext";

import { ProductCart, CategoryCard } from "../component/cards";

import { addWishList, addCart } from "../component/toast";
import { Carousel } from "../component/corosel";
import { Footer } from "./Footer";

export const Landing = () => {
  const {
    ecDispatch,
    ecState: { products, category },
  } = useContext(ECContext);

  const handleAddtoCart = (id) => {
    ecDispatch({ type: "ADD_TO_CART", payload: id });
    addCart();
  };

  const handleAddtoWishlish = (id) => {
    ecDispatch({ type: "ADD_TO_WISHLISH", payload: id });
    addWishList();
  };

  return (
    <div className="landing-parent-div">
      <Carousel />

      <h1 className="landing-heading"> GET WHAT SUITS YOU </h1>

      <div className="global">
        {category.map((item) => (
          <CategoryCard
            key={item.id}
            category={item.category}
            images={item.img}
          />
        ))}
      </div>

      <div className="featured-div">
        <h1> Featured </h1>
        <p> Browse all featured products </p>
      </div>

      <div className="card-global">
        {products?.map((item) => (
          <ProductCart
            key={item?.id}
            id={item?.id}
            addCart={() => handleAddtoCart(item?.id)}
            addWishList={() => handleAddtoWishlish(item?.id)}
            image={item?.image}
            ideal={item?.ideal}
            name={item?.name}
            price={item?.price}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

import { useContext } from "react";
import { ECContext } from "../context/ECContext";

import { ProductCart, CategoryCard } from "../component/cards";

import { Carousel } from "../component/corosel";
import { Footer } from "./Footer";

import { handleAddtoCart, handleAddtoWishlish } from "../component/utils";

export const Landing = () => {
  const {
    ecDispatch,
    ecState: { products, category },
  } = useContext(ECContext);

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
            addCart={() => handleAddtoCart(ecDispatch, item?.id)}
            addWishList={() => handleAddtoWishlish(ecDispatch, item?.id)}
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

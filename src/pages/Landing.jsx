import { useContext } from "react";
import { ECContext } from "../context/ECContext";

// Import components for rendering product cards and category cards
import { ProductCart, CategoryCard } from "../component/cards";

// Import the Carousel component for displaying images
import { Carousel } from "../component/corosel";

// Import the Footer component
import { Footer } from "./Footer";

// Import functions for handling cart and wishlist actions
import { handleAddtoCart, handleAddtoWishlish } from "../component/utils";

// Component for rendering the landing page
export const Landing = () => {
  // Access the application state and dispatch function from the context
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

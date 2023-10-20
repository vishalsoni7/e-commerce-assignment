import { ProductCart } from "../component/cards";

import { productsData, category } from "../data";
import { Carousel } from "../component/corosel";
import { Footer } from "./Footer";

export const Landing = () => {
  return (
    <div className="landing-parent-div">
      <Carousel />

      <h1 className="landing-heading"> GET WHAT SUITS YOU </h1>

      <div className="global">
        {category.map((item) => (
          <div className="card" key={item.id}>
            <h3> {item.category} </h3>
            {item.img.map((p) => (
              <img src={p} alt={p} />
            ))}
          </div>
        ))}{" "}
      </div>

      <div className="featured-div">
        <h1> Featured </h1>
        <p> Browse all featured products </p>
      </div>

      <div className="card-global">
        {productsData.map((item) => (
          <ProductCart
            key={item.id}
            image={item.image}
            ideal={item.ideal}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

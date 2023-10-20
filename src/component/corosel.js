import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { coroselImages } from "../data";

export const Carousel = () => {
  return (
    <div className="slide-container" style={{ margin: "0rem 3rem 0rem 3rem" }}>
      <Fade duration={1500}>
        {coroselImages.map((image, index) => (
          <div key={index}>
            {" "}
            <div
              style={{
                background: `url(${image.url}) no-repeat center`,
                backgroundSize: "cover",
                height: "610px",
              }}
            ></div>{" "}
          </div>
        ))}
      </Fade>
    </div>
  );
};

import { useContext } from "react";
import { ECContext } from "../context/ECContext";

// Import the Card component for rendering wishlist items
import { Card } from "../component/cards";

// Import the removefromWishlist function for handling item removal from wishlist
import { removefromWishlist } from "../component/utils";

// Component for rendering the Wishlist page
export const Wishlist = () => {
  // Access the application state and dispatch function from the context
  const {
    ecState: { wishlist },
    ecDispatch,
  } = useContext(ECContext);

  return (
    <div className="cart-parent-div">
      {wishlist?.length > 0 && <h2>Wishlist</h2>}

      {wishlist?.length === 0 && (
        <h1 className="nothing">Nothing in Wishlist !☹︎ </h1>
      )}

      <div className="cart-child-div">
        {wishlist?.map((item) => (
          <Card
            key={item?._id}
            item={item}
            onRemove={() => removefromWishlist(ecDispatch, item?._id)}
          />
        ))}
      </div>
    </div>
  );
};

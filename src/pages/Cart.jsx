import { useContext } from "react";
import { ECContext } from "../context/ECContext";

// Import the Card component for rendering cart items
import { Card } from "../component/cards";

// Component for rendering the Cart page
import { removeFromCart } from "../component/utils";

export const Cart = () => {
  // Access the application state and dispatch function from the context
  const {
    ecState: { cart },
    ecDispatch,
  } = useContext(ECContext);

  return (
    <div className="cart-parent-div">
      {cart?.length > 0 && <h2> Cart </h2>}

      {cart?.length === 0 && (
        <h1 className="nothing"> Your Cart Is Empty !☹︎ </h1>
      )}

      <div className="cart-child-div">
        {cart?.map((item) => (
          <Card
            key={item?._id}
            item={item}
            onRemove={() => removeFromCart(ecDispatch, item?._id)}
          />
        ))}
      </div>
    </div>
  );
};

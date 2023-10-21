import { useContext } from "react";
import { ECContext } from "../context/ECContext";

import { Card } from "../component/cards";

export const Wishlist = () => {
  const {
    ecState: { wishlist },
    ecDispatch,
  } = useContext(ECContext);

  const removefromWishlist = (id) => {
    ecDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  return (
    <div className="cart-parent-div">
      {wishlist?.length > 0 && <h2>Wishlist</h2>}

      {wishlist?.length === 0 && (
        <h1 className="nothing">Nothing in Wishlist !☹︎ </h1>
      )}

      <div className="cart-child-div">
        {wishlist?.map((item) => (
          <Card
            key={item?.id}
            item={item}
            onRemove={() => removefromWishlist(item?.id)}
          />
        ))}
      </div>
    </div>
  );
};

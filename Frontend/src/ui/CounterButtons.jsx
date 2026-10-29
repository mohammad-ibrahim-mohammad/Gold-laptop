import { addItem, removeItem } from "@/features/cart/cart";
import { useDispatch, useSelector } from "react-redux";

function CounterButtons({ product }) {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  function handleAddCartItem(item) {
    dispatch(addItem({ ...item, quantity: 1 }));
  }
  function handleRemoveCartItem(id) {
    if (!cart.length) return;
    dispatch(removeItem(id));
  }

  const existingItem = cart.find((item) => item.id === product.id);

  return (
    <div className="flex items-center justify-center overflow-hidden rounded-full border border-gray-200 text-lg">
      <button
        disabled={!existingItem?.quantity}
        onClick={() => handleRemoveCartItem(product.id)}
        className="disabled:curs flex h-10 w-10 cursor-pointer items-center justify-center text-gray-700 transition-all duration-300 hover:bg-blue-600 hover:text-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-700"
      >
        -
      </button>
      <span className="flex h-10 min-w-10 items-center justify-center border-x border-gray-200 px-3">
        {existingItem?.quantity ?? 0}
      </span>
      <button
        onClick={() => handleAddCartItem(product)}
        className="flex h-10 w-10 cursor-pointer items-center justify-center text-gray-700 transition-all duration-300 hover:bg-blue-600 hover:text-gray-50"
      >
        +
      </button>
    </div>
  );
}

export default CounterButtons;

import CounterButtons from "@/ui/CounterButtons";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "./cart";

function CartItem() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleDeleteCartItem(id) {
    dispatch(deleteItem(id));
  }

  return (
    <div className="flex-1 overflow-y-auto py-4">
      {cart.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-500">
          <FaShoppingCart size={40} />

          <p className="text-sm">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-5">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-sm font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">{item.brand}</p>
                  </div>

                  <button
                    onClick={() => handleDeleteCartItem(item.id)}
                    className="shrink-0 cursor-pointer text-gray-400 transition-colors hover:text-red-500"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="font-semibold">
                    {item.price.toFixed(2)} د.إ
                  </span>

                  <CounterButtons product={item} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartItem;

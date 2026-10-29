import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import CartFooter from "@/features/cart/CartFooter";
import CartItem from "@/features/cart/CartItem";

function Cart() {
  const { cart } = useSelector((state) => state.cart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <div className="flex items-center gap-2">
      <Sheet>
        <SheetTrigger className="relative cursor-pointer">
          <FaShoppingCart size={20} />

          {totalItems > 0 && (
            <span className="bg-primary absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white">
              {totalItems}
            </span>
          )}
        </SheetTrigger>

        <SheetContent className="flex w-full flex-col sm:max-w-md">
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="text-xl">Your Cart</SheetTitle>

            <SheetDescription>
              {totalItems === 0
                ? "Your cart is empty"
                : `${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`}
            </SheetDescription>
          </SheetHeader>
          <div className="overflow-y-scroll px-2 py-4">
            <CartItem />
          </div>
          <SheetFooter>
            <CartFooter cart={cart} totalPrice={totalPrice} />
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <span className="text-sm font-bold">{totalPrice.toFixed(2)} د.إ</span>
    </div>
  );
}

export default Cart;

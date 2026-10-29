function CartFooter({ cart, totalPrice }) {
  return (
    <div>
      {cart.length > 0 && (
        <div className="border-t pt-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">Subtotal</span>

            <span className="text-xl font-bold">
              {totalPrice.toFixed(2)} د.إ
            </span>
          </div>

          <button className="bg-primary w-full cursor-pointer rounded-lg py-3 font-semibold text-white transition-opacity hover:opacity-90">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartFooter;

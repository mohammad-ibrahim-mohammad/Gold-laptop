import { FiHeart } from "react-icons/fi";
import Cart from "../features/cart/ShoppingCart.jsx";
import { Link } from "react-router-dom";

function HeaderActions() {
  return (
    <>
      <div className="relative cursor-pointer">
        <Link to={'/favorites'}>
        <FiHeart size={20} />
        </Link>

        <span className="bg-primary absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white">
          0
        </span>
      </div>
      <Cart />
    </>
  );
}

export default HeaderActions;

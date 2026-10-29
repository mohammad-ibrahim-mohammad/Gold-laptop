import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

function ProductFlipButton({ to }) {
  return (
    <Link to={to}>
      <button className="group/btn relative hidden h-10 w-64 cursor-pointer items-center justify-center rounded bg-gray-800 py-2 text-white transition group-hover:flex">
        <span className="absolute transition-all duration-300 group-hover/btn:-translate-y-5 group-hover/btn:opacity-0">
          إضافة للسلة
        </span>

        <FaShoppingCart
          size={24}
          className="absolute translate-y-5 opacity-0 transition-all duration-300 group-hover/btn:translate-y-0 group-hover/btn:opacity-100"
        />
      </button>
    </Link>
  );
}

export default ProductFlipButton;

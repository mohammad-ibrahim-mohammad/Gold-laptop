import { URL } from "@/helpers/constants";
import ProductFlipButton from "@/ui/ProductFlipButton";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const {
    id,
    sku,
    name,
    description,
    regular_price,
    discount_price,
    quantity,
    taxable,
    images = [],
  } = product;

  const regularPrice = Number(regular_price);
  const discountPrice = Number(discount_price);

  const hasDiscount = discount_price != null && discountPrice < regularPrice;

  return (
    <div className="group relative z-10 min-h-75 hover:z-20">
      <div className="absolute inset-x-0 top-0 flex flex-col items-center gap-4 overflow-hidden rounded bg-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
        <div className="relative w-full">
          <span className="absolute top-4 right-4 z-10 rounded bg-gray-800 px-2 py-1 text-xs font-bold text-white">
            {sku}
          </span>

          <Link to={`/products/${id}`}>
            <img
              src={
                images?.[0]
                  ? `${URL}/images/products/${images[0]}`
                  : `${URL}/images/products/default-laptop.jpeg`
              }
              alt={name || "Product image"}
            />
          </Link>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 p-4">
          <p className="text-md text-center font-semibold text-gray-800">
            {name}
          </p>

          <div className="flex items-center justify-center gap-2">
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                ${regularPrice.toFixed(2)}
              </span>
            )}

            <span className="text-primary text-sm font-semibold">
              ${(hasDiscount ? discountPrice : regularPrice).toFixed(2)}
            </span>
          </div>

          <p className="text-sm text-gray-500">
            {quantity > 0 ? `${quantity} available` : "Out of stock"}
          </p>

          <p className="hidden text-center text-[15px] font-thin text-gray-400 group-hover:block">
            {description}
          </p>

          <ProductFlipButton to={`/products/${id}`} />
        </div>
      </div>
    </div>
  );
}

import ProductFlipButton from "@/ui/ProductFlipButton";
import { FaLaptop } from "react-icons/fa";
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
  } = product;
  const regularPrice = Number(regular_price);
  const discountPrice = Number(discount_price);
  const hasDiscount = discount_price != null && discountPrice < regularPrice;

  return (
    <article
      dir="rtl"
      className="flex h-full min-h-[440px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm"
    >
      <div className="relative w-full bg-gray-50">
        {sku && (
          <span className="absolute top-3 right-3 z-10 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-gray-600 shadow-sm">
            {sku}
          </span>
        )}
        {hasDiscount && (
          <span className="absolute top-3 left-3 z-10 rounded-md bg-red-600 px-2.5 py-1 text-xs font-semibold text-white">
            خصم
          </span>
        )}
        <Link
          to={`/products/${id}`}
          aria-label={`عرض ${name}`}
          className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-gray-50 text-gray-400"
        >
          <FaLaptop aria-hidden="true" className="text-5xl text-gray-300" />
          <span className="text-xs">No image available</span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link
          to={`/products/${id}`}
          className="line-clamp-2 min-h-12 text-right text-base leading-6 font-semibold text-gray-900 no-underline"
        >
          {name}
        </Link>

        {description && (
          <p className="line-clamp-2 min-h-10 text-right text-sm leading-5 text-gray-500">
            {description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-gray-100 pt-3">
          <div className="flex flex-col gap-1">
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through">
                ${regularPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              ${(hasDiscount ? discountPrice : regularPrice).toFixed(2)}
            </span>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              quantity > 0
                ? "bg-emerald-50 text-emerald-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {quantity > 0 ? `${quantity} available` : "Out of stock"}
          </span>
        </div>

        <ProductFlipButton to={`/products/${id}`} />
      </div>
    </article>
  );
}

import { URL } from "@/helpers/constants";
import FavoriteButton from "../features/Favorites/FavoriteButton";

function ProductImages({ mainImage, product, handleNewMainImage }) {
  console.log(product.images);
  return (
    <div className="sticky top-6">
      <img
        className="w-full rounded-sm object-contain"
        src={`${URL}/images/products/${mainImage || product?.images[0]}`}
      />
      <FavoriteButton
        className={
          "absolute top-2 right-2 rounded-full bg-white p-2 text-gray-500 hover:cursor-pointer hover:text-gray-500"
        }
        productId={product.id}
      />
      <div className="flex items-center justify-around gap-2 overflow-x-scroll">
        {product.images.map((image, i) => (
          <img
            className="mt-8 h-32 w-52 transform rounded-sm transition-all duration-150 hover:-translate-y-1 hover:cursor-pointer hover:opacity-75 hover:grayscale-25"
            src={`http://localhost:2000/images/products/${product.images[i]}`}
            onClick={() => handleNewMainImage(product.images[i])}
            key={image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;

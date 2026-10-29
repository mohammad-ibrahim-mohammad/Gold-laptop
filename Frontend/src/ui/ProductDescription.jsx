import useProduct from "@/features/Products/useProduct";
import { useParams } from "react-router-dom";

function ProductDescription() {
  const { productId } = useParams();
  const { product, isLoading } = useProduct(productId);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mt-4 flex justify-center p-2">
      <p className="text-muted-foreground max-w-3xl text-center leading-7">
        {product?.description}
      </p>
    </div>
  );
}

export default ProductDescription;

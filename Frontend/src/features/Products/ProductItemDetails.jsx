import { useParams } from "react-router-dom";
import useProduct from "./useProduct";
import { useState } from "react";
import CounterButtons from "../../ui/CounterButtons";
import ProductSpec from "../../ui/ProductSpec";
import ProductInfo from "../../ui/ProductInfo";
import ProductImages from "../../ui/ProductImages";
// import ProductDetailsTabs from "../../ui/ProductDetailsTabs";
import ProductTabsLayout from "../../ui/ProductTabsLayout";
import { Button } from "../../components/ui/button";
import ProductDetailsTabs from "@/ui/ProductDetailsTabs";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cart";

function ProductItemDetails() {
  const { productId } = useParams();
  const { product, isLoading } = useProduct(productId);

  const [mainImage, setMainImage] = useState("");

  const dispatch = useDispatch();

  function handleAddCartItem(item) {
    dispatch(addItem({ ...item, quantity: 1 }));
  }

  function handleNewMainImage(img) {
    setMainImage(img);
  }

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="mt-12 mr-40 border-r-2 border-gray-100 pr-4">
      <div className="grid grid-cols-[600px_1fr] items-start gap-x-8">
        <ProductImages
          mainImage={mainImage}
          handleNewMainImage={handleNewMainImage}
          product={product}
        />
        <div className="flex min-h-0 flex-col border border-gray-100 px-6 py-4 shadow-md">
          <ProductInfo product={product} />

          <ProductSpec product={product} />

          <div className="mt-auto flex items-center justify-between pt-4">
            <CounterButtons product={product} />

            <Button size="lg" onClick={() => handleAddCartItem(product)}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <ProductDetailsTabs />

      <ProductTabsLayout />
    </div>
  );
}

export default ProductItemDetails;

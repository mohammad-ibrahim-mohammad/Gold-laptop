import Products from "@/features/Products/Products";
import useProducts from "@/features/Products/useProducts";

function ProductCategoryPage() {
  const { products, isLoading } = useProducts({});

  return <Products products={products} isLoading={isLoading} />;
}

export default ProductCategoryPage;

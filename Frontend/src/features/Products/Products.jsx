import ProductItem from "./ProductItem";
import ProductsFilter from "@/ui/ProductsFilter";
import ProductsOperations from "./ProductsOperations";
import useProducts from "./useProducts";

export default function Products() {
  const {
    products = [],
    isLoading = false,
    isFetching = false,
  } = useProducts();

  return (
    <main className="container mx-auto flex gap-8">
      <div className="w-full md:w-3/4">
        <ProductsOperations />

        {isLoading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-muted-foreground text-center">
            No products found. Try adjusting your filters.
          </p>
        ) : (
          <>
            {isFetching && (
              <p className="text-muted-foreground text-sm">
                Updating products...
              </p>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>

      <ProductsFilter />
    </main>
  );
}

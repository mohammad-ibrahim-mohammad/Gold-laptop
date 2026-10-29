import ProductsLimit from "@/ui/ProductsLimit";
import ProductSort from "@/ui/ProductSort";
import ProductsView from "@/ui/ProductsView";

function ProductsOperations() {
  return (
    <div className="mb-6 flex items-center justify-between rounded bg-white p-4 shadow-sm">
      <ProductSort
        options={[
          { value: "regular_price", label: "Sort by price (Low to High)" },
          { value: "-regular_price", label: "Sort by price (High to Low)" },

          { value: "name", label: "Sort by name (A to Z)" },
          { value: "-name", label: "Sort by name (Z to A)" },

          { value: "-created_at", label: "Newest first" },
          { value: "created_at", label: "Oldest first" },
        ]}
      />
      <div className="flex">
        <ProductsLimit limitPageOptions={[9, 12, 18, 24]} />
        <ProductsView />
      </div>
    </div>
  );
}

export default ProductsOperations;

import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import { FieldSet, FieldLegend, FieldDescription } from "@/components/ui/field";
import RangeFilter from "./RangeFilter";
import { useSearchParams } from "react-router-dom";

function ProductsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleAddFilter(key, value) {
    searchParams.set(key, value);

    setSearchParams(searchParams);
  }
  return (
    <aside className="hidden w-1/4 space-y-8 md:block">
      <RangeFilter />

      <FieldSet className="space-y-4">
        <FieldLegend>Filter Products</FieldLegend>

        <FieldDescription>
          Refine your search by selecting categories and brands.
        </FieldDescription>

        <div className="space-y-6">
          <CategoryFilter addFilter={handleAddFilter} />
          <BrandFilter addFilter={handleAddFilter} />
        </div>
      </FieldSet>
    </aside>
  );
}

export default ProductsFilter;

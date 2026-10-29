import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

function useProducts() {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit") || 9;

  const sort = searchParams.get("sort") || "created_at";

  // filter
  const categoriesFilter = searchParams.getAll("category");
  const brandsFilter = searchParams.getAll("brand");

  console.log("Categories filter:", categoriesFilter);
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["products", limit, sort, categoriesFilter, brandsFilter],
    queryFn: () => getProducts({ limit, sort, categoriesFilter, brandsFilter }),
  });
  return { products: data?.products, isLoading, isFetching };
}

export default useProducts;

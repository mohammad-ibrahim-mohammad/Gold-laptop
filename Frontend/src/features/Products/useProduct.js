import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../../services/apiProducts";

function useProduct(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails({ id }),
  });
  return { product: data?.product, isLoading };
}

export default useProduct;

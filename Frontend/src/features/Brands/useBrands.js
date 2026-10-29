import { getBrands } from "@/services/apiBrands";
import { useQuery } from "@tanstack/react-query";

function useBrands() {
  const { data } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });
  return { brands: data?.brands };
}

export default useBrands;

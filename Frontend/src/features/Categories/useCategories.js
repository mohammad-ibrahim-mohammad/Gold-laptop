import { getCategories } from "@/services/apiCategories";
import { useQuery } from "@tanstack/react-query";

function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categries"],
    queryFn: getCategories,
  });
  return { categories: data?.categories, isLoading };
}

export default useCategories;

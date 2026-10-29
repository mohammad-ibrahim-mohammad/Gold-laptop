import { getFavoritesApi } from "@/services/apiFavorites";
import { useQuery } from "@tanstack/react-query";

function useFavorites(userId) {
  const { data, isLoading } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavoritesApi(userId),
  });
  return { data, isLoading };
}

export default useFavorites;

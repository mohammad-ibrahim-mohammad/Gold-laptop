import { getReviews } from "@/services/apiReviews";
import { useQuery } from "@tanstack/react-query";

function useReviews(id) {
  const { data: reviews, isLoading: isLoadingReviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(id),
  });
  return { reviews, isLoadingReviews };
}

export default useReviews;
